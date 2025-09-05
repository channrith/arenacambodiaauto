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
        { path: "/make/ford", label: "Ford" },
        { path: "/make/honda", label: "Honda" },
        { path: "/make/chevrolet", label: "Chevrolet" },
        { path: "/make/bmw", label: "BMW" },
        { path: "/make/mercedes-benz", label: "Mercedes-Benz" },
        { path: "/make/hyundai", label: "Hyundai" },
        { path: "/make/kia", label: "Kia" },
        { path: "/make/nissan", label: "Nissan" },
        { path: "/make/volkswagen", label: "Volkswagen" },
        { path: "/make/subaru", label: "Subaru" },
        { path: "/make/mazda", label: "Mazda" },
        { path: "/make/audi", label: "Audi" },
        { path: "/make/lexus", label: "Lexus" },
        { path: "/make/jeep", label: "Jeep" },
        { path: "/make/dodge", label: "Dodge" },
        { path: "/make/volvo", label: "Volvo" },
        { path: "/make/tesla", label: "Tesla" },
        { path: "/make/peugeot", label: "Peugeot" },
        { path: "/make/fiat", label: "Fiat" },
        { path: "/make/renault", label: "Renault" },
        { path: "/make/jaguar", label: "Jaguar" },
        { path: "/make/porsche", label: "Porsche" },
        { path: "/make/land-rover", label: "Land Rover" },
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