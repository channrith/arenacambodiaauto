"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = ({ homepage }) => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { path: "/", label: "ទំព័រមុខ" },
        { path: "/news", label: "ព័ត៍មាន" },
        { path: "/reviews", label: "វីឌីអូរ" },
        { path: "/compare", label: "ការប្រៀបធៀប" },
        { path: "/about", label: "អំពីយើង" },
    ];

    return (
        <nav className={`nav ${homepage ? "nav--homepage" : ""}`}>
            <button
                className="nav__toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            <ul className={`nav__menu ${menuOpen ? "nav__menu--open" : ""}`}>
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.path || pathname.startsWith(`${item.path}/`);
                    return (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={isActive ? "active" : ""}
                                onClick={() => setMenuOpen(false)} // Close on click
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
