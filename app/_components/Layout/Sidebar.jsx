"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Advertisement from "../Advertisement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

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

const Sidebar = () => {
    const pathname = usePathname();
    const [makers, setMakers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cached = localStorage.getItem("carMakers");
        if (cached) {
            setMakers(JSON.parse(cached));
            setLoading(false);
        } else {
            (async () => {
                const apiResponse = await getCarMakers();
                const makersData = apiResponse.makers || [];
                setMakers(makersData);
                localStorage.setItem("carMakers", JSON.stringify(makersData));
                setLoading(false);
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

            <Advertisement
                image="/image/Oct24-Cellcard-Hero-Banner-Mobile-720-x-460-eng.jpg"
                alt="Your ad could be here!"
                link="https://arenacambodiaauto.com/promo"
                height={300}
                width={300}
            />

            <Advertisement
                image="/image/f2qy2v60cFOQIjm3DxAbrULlUgiBvdTWCGOG4WUp.jpg"
                alt="Your ad could be here!"
                link="https://arenacambodiaauto.com/promo"
                height={300}
                width={300}
            />
        </aside >
    )
}

export default Sidebar;