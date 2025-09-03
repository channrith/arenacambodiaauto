import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCubes, faRss, faStar, faHome, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__logo">Logo</div>

                <ul className="footer__nav">
                    <li><a href="#"><FontAwesomeIcon icon={faHome} /> Home</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faRss} /> News</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faStar} /> Reviews</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faCubes} /> Compare</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faCircleInfo} /> About</a></li>
                </ul>

                <div className="footer__right">
                    <div className="footer__social">
                        <div><a href="#"><FontAwesomeIcon icon={faTiktok} /> TikTok</a></div>
                        <div><a href="#"><FontAwesomeIcon icon={faTelegram} /> Telegram</a></div>
                        <div><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></div>
                        <div><a href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></div>
                    </div>
                    <div className="footer__contact">
                        <div><FontAwesomeIcon icon={faEnvelope} /> Email: info@arenaauto.com</div>
                        <div><FontAwesomeIcon icon={faPhone} /> Phone: +855 12 345 678</div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; 2025 Arena Auto. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;