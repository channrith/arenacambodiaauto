import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCubes, faRss, faStar, faHome, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__logo">
                    <Link href="/">
                        <Image src="https://cdn.arenacambodiaauto.com/1760172838376-299464275.png" width="160" height="40" alt="Arena Cambodia Auto" />
                    </Link>
                </div>

                <div className="footer__center">
                    <ul className="footer__nav">
                        <li><Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                        <li><Link href="/news"><FontAwesomeIcon icon={faRss} /> News</Link></li>
                        <li><Link href="/reviews"><FontAwesomeIcon icon={faStar} /> Reviews</Link></li>
                        <li><Link href="/compare"><FontAwesomeIcon icon={faCubes} /> Compare</Link></li>
                        <li><Link href="/about"><FontAwesomeIcon icon={faCircleInfo} /> About</Link></li>
                    </ul>

                    <div className="footer__links-row">
                        <div className="footer__social">
                            <a href="https://www.tiktok.com/@arenacambodiaauto?is_from_webapp=1&sender_device=pc"><FontAwesomeIcon icon={faTiktok} /> TikTok</a>
                            <a href="https://t.me/+uOfZHBWACapmYzE9"><FontAwesomeIcon icon={faTelegram} /> Telegram</a>
                            <a href="https://web.facebook.com/arenacambodiaauto"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                            <a href="https://www.youtube.com/@ArenaCambodiaAuto"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>

                            <span><FontAwesomeIcon icon={faEnvelope} /> Email: info_arenacambo@gmail.com</span>
                            <span><FontAwesomeIcon icon={faPhone} /> Phone: 096 7172 226 / 097 2000 921</span>
                        </div>
                    </div>

                    {/* <div className="footer__contact">
                        <span><FontAwesomeIcon icon={faEnvelope} /> Email: info@arenaauto.com</span>
                        <span><FontAwesomeIcon icon={faPhone} /> Phone: +855 12 345 678</span>
                    </div> */}
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; 2025 Arena Auto. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;