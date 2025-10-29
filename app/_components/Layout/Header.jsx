import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="logo">
                    <Link href="/">
                        <Image src="/image/logo/Header-Logo-AC.png" width="220" height="45" alt="Arena Cambodia Auto" />
                    </Link>
                </div>

                <div className="header-right">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="social-links">
                        <Link href="https://www.tiktok.com/@arenacambodiaauto" title="tiktok" target="_blank"><FontAwesomeIcon icon={faTiktok} size="2px" /></Link>
                        <Link href="https://t.me/+uOfZHBWACapmYzE9" title="Telegram" target="_blank"><FontAwesomeIcon icon={faTelegram} size="2px" /></Link>
                        <Link href="https://www.facebook.com/arenacambodiaauto" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2px" /></Link>
                        <Link href="https://www.youtube.com/@ArenaCambodiaAuto" title="YouTube" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2px" /></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;