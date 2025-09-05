import Link from "next/link";

const Navbar = ({ homepage }) => {
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/news", label: "News" },
        { path: "/reviews", label: "Reviews" },
        { path: "/compare", label: "Compare" },
        { path: "/about", label: "About" }
    ];

    return (
        <nav className={`nav ${homepage ? 'nav--homepage' : ''}`}>
            <ul className="nav__menu">
                {
                    navItems.map((item) => (
                        <li key={item.path}>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    )
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;