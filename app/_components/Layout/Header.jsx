import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="logo">Logo</div>

                <div className="header-right">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="social-links">
                        <a href="#" title="TikTok"><FontAwesomeIcon icon={faTiktok} size="2px" /></a>
                        <a href="#" title="Telegram"><FontAwesomeIcon icon={faTelegram} size="2px" /></a>
                        <a href="#" title="Facebook"><FontAwesomeIcon icon={faFacebook} size="2px" /></a>
                        <a href="#" title="YouTube"><FontAwesomeIcon icon={faYoutube} size="2px" /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;