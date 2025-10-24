"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Advertisement from "../Advertisement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const pathname = usePathname();
    const makers = [
        { brand: "toyota", path: "/make/toyota/local", label: "Toyota" },
        { brand: "ssangyong", path: "/make/ssangyong/local", label: "SsangYong" },
        { brand: "mitsubishi", path: "/make/mitsubishi/local", label: "Mitsubishi" },
        { brand: "ford", path: "/make/ford/local", label: "Ford" },
        { brand: "greely", path: "/make/greely/local", label: "Greely" },
        { brand: "aiqar", path: "/make/aiqar/local", label: "AIQAR" },
        { brand: "nissan", path: "/make/nissan/local", label: "Nissan" },
        { brand: "chang-an", path: "/make/chang-an/local", label: "Chang an" },
        { brand: "peugeot", path: "/make/peugeot/local", label: "Peugeot" },
        { brand: "isuzu", path: "/make/isuzu/local", label: "Isuzu" },
        { brand: "jeep", path: "/make/jeep/local", label: "Jeep" },
        { brand: "gac", path: "/make/gac/local", label: "GAC" },
        { brand: "hyundai", path: "/make/hyundai/local", label: "Hyundai" },
        { brand: "range-rover", path: "/make/range-rover/local", label: "Range Rover" },
        { brand: "chevrolet", path: "/make/chevrolet/local", label: "Chevrolet" },
        { brand: "kia", path: "/make/kia/local", label: "KIA" },
        { brand: "mazda", path: "/make/mazda/local", label: "Mazda" },
        { brand: "honda", path: "/make/honda/local", label: "Honda" },
        { brand: "suzuki", path: "/make/suzuki/local", label: "Suzuki" },
        { brand: "jmc", path: "/make/jmc/local", label: "JMC" },
        { brand: "mercedes", path: "/make/mercedes/local", label: "Mercedes" },
        { brand: "mg", path: "/make/mg/local", label: "MG" },
        { brand: "gtv", path: "/make/gtv/local", label: "GTV" },
        { brand: "bmw", path: "/make/bmw/local", label: "BMW" },
        { brand: "", path: "/logo", label: "All Brands" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <h3>Car Producers</h3>

                <div className="maker">
                    {makers.map(maker => {
                        const activeMaker = makers.find(maker => pathname.includes(`/${maker.brand}/`));
                        return (
                            <Link
                                key={maker.brand}
                                href={maker.path}
                                className={`maker__link ${activeMaker?.brand === maker.brand ? 'active' : ''}`}
                            >
                                {maker.path === "/logo" ? (
                                    <>
                                        <FontAwesomeIcon icon={faBars} /> {maker.label}
                                    </>
                                ) : (
                                    maker.label
                                )}
                            </Link>
                        )
                    })}
                </div>
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