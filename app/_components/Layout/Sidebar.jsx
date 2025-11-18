"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Advertisement from "../Advertisement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

async function getPosters() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/posters?service=acauto`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch posters");
        const data = await res.json();

        return data || [];
    } catch (err) {
        console.error("❌ Error loading posters:", err);
        return [];
    }
}

async function getCarMakers() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/vehicle/makers?limit=24&service=acauto`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();

        return data;
    } catch (err) {
        console.error("❌ Error loading news:", err);
        return null;
    }
}

function setCache(key, data, ttlSeconds) {
    const record = {
        data,
        expiry: Date.now() + ttlSeconds * 1000
    };
    localStorage.setItem(key, JSON.stringify(record));
}

function getCache(key) {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const record = JSON.parse(cached);
    if (record.expiry < Date.now()) {
        localStorage.removeItem(key);
        return null;
    }
    return record.data;
}

const Sidebar = () => {
    const pathname = usePathname();
    const [posters, setPosters] = useState([]);
    const [makers, setMakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingPoster, setLoadingPoster] = useState(true);

    useEffect(() => {
        const makersCache = getCache("carMakers");
        if (makersCache) {
            setMakers(makersCache);
            setLoading(false);
        } else {
            (async () => {
                const apiResponse = await getCarMakers();
                const makersData = apiResponse.makers || [];
                setMakers(makersData);
                setCache("carMakers", makersData, 60);
                setLoading(false);
            })();
        }

        const postersCache = getCache("posterData");
        if (postersCache) {
            setPosters(postersCache);
            setLoadingPoster(false);
        } else {
            (async () => {
                const apiResponse = await getPosters();

                const posterData = apiResponse.acauto_sidebar || [];
                setPosters(posterData);
                setCache("posterData", posterData, 60);
                setLoadingPoster(false);
            })();
        }
    }, []);
    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <h3>Car Producers</h3>
                {loading ? (<p>Loading makers...</p>) : makers.length > 0 ? (
                    <div className="maker">
                        {makers.map((maker, index) => {
                            const isActive = pathname.startsWith(`/make/${maker.slug.toLowerCase()}`);
                            return (
                                <Link
                                    key={index}
                                    href={maker.link.toLowerCase()}
                                    className={`maker__link ${isActive ? 'active' : ''}`}
                                >
                                    {maker.path === "/logo" ? (
                                        <>
                                            <FontAwesomeIcon icon={faBars} /> {maker.alt}
                                        </>
                                    ) : (
                                        maker.alt
                                    )}
                                </Link>
                            )
                        })}
                        <Link
                            href="/logo"
                            className="maker__link"
                        >
                            <FontAwesomeIcon icon={faBars} />
                            <span className="text-xs">All Brands</span>
                        </Link>
                    </div>
                ) : (
                    <p>No makers found.</p>
                )}

            </div>

            {loadingPoster ? (<p>Loading posters...</p>) : posters.length > 0 ? (
                posters.map((poster, index) => {
                    return (
                        <Advertisement
                            key={index}
                            image={poster.feature_image_url}
                            alt={poster.title}
                            link={poster.url}
                            height={300}
                            width={300}
                        />
                    )
                })
            ) : (
                <p>No poster found.</p>
            )}

        </aside >
    )
}

export default Sidebar;