"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ homepage }) => {
    const pathname = usePathname();

    const navItems = [
        { path: "/", label: "ទំព័រមុខ" },
        { path: "/news", label: "ព័ត៍មាន" },
        { path: "/reviews", label: "វីឌីអូរ" },
        { path: "/compare", label: "ការប្រៀបធៀប" },
        { path: "/about", label: "អំពីយើង" }
    ];

    return (
        <nav className={`nav ${homepage ? 'nav--homepage' : ''}`}>
            <ul className="nav__menu">
                {
                    navItems.map((item) => {
                        const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
                        return (
                            <li key={item.path}>
                                <Link href={item.path} className={isActive ? 'active' : ''}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;