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
                        <Image src="/image/logo/Header.png" width="220" height="45" alt="Arena Cambodia Auto" />
                    </Link>
                </div>

                <div className="header-right">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="social-links">
                        <a href="https://www.tiktok.com/@arenacambodiaauto?is_from_webapp=1&sender_device=pc" title="TikTok"><FontAwesomeIcon icon={faTiktok} size="2px" /></a>
                        <a href="https://t.me/+uOfZHBWACapmYzE9" title="Telegram"><FontAwesomeIcon icon={faTelegram} size="2px" /></a>
                        <a href="https://web.facebook.com/arenacambodiaauto" title="Facebook"><FontAwesomeIcon icon={faFacebook} size="2px" /></a>
                        <a href="https://www.youtube.com/@ArenaCambodiaAuto" title="YouTube"><FontAwesomeIcon icon={faYoutube} size="2px" /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;