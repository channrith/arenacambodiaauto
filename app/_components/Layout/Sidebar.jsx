"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Advertisement from "../Advertisement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const pathname = usePathname();
    const makers = [
        { path: "/make/toyota", label: "Toyota" },
        { path: "/make/ssangYong", label: "SsangYong" },
        { path: "/make/mitsubishi", label: "Mitsubishi" },
        { path: "/make/ford", label: "Ford" },
        { path: "/make/greely", label: "Greely" },
        { path: "/make/aiqar", label: "AIQAR" },
        { path: "/make/nissan", label: "Nissan" },
        { path: "/make/chang-an", label: "Chang an" },
        { path: "/make/peugeot", label: "Peugeot" },
        { path: "/make/isuzu", label: "Isuzu" },
        { path: "/make/jeep", label: "Jeep" },
        { path: "/make/gac", label: "GAC" },
        { path: "/make/hyundai", label: "Hyundai" },
        { path: "/make/range-rover", label: "Range Rover" },
        { path: "/make/chevrolet", label: "Chevrolet" },
        { path: "/make/kia", label: "KIA" },
        { path: "/make/mazda", label: "Mazda" },
        { path: "/make/honda", label: "Honda" },
        { path: "/make/suzuki", label: "Suzuki" },
        { path: "/make/jmc", label: "JMC" },
        { path: "/make/mercedes", label: "Mercedes" },
        { path: "/make/mg", label: "MG" },
        { path: "/make/gtv", label: "GTV" },
        { path: "/make/bmw", label: "BMW" },
        { path: "/logo", label: "All Brands" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <h3>Car Producers</h3>

                <div className="maker">
                    {makers.map((maker, index) => {
                        const isActive = pathname === maker.path || pathname.startsWith(`${maker.path}/`);
                        return (
                            <Link
                                key={index}
                                href={maker.path}
                                className={`maker__link ${isActive ? 'active' : ''}`}
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
                image="/image/Oct24-Cellcard-Hero-Banner-Mobile-720-x-460-eng.png"
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