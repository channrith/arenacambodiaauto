import Sidebar from "../_components/Layout/Sidebar";
import Navbar from "../_components/Layout/Navbar";
import Hero from "../_components/Layout/Hero";

export default function About() {
    const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ", "cW56AuNHLag", "lMo3Cd7rdnY", "xUkPbfherCY"];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero />

                    <div className="about">
                        <div class="about-text">
                            <h2>About Us</h2>
                            <p>Arena Cambodia Auto is dedicated to delivering the latest automotive news, reviews, and comparisons for car enthusiasts in Cambodia and beyond.</p>
                            <p>We strive to keep our readers informed with accurate, up-to-date content, covering everything from the newest models to in-depth technical insights.</p>
                            <p>Our mission is to create a community for auto lovers where knowledge and passion for cars meet.</p>
                        </div>

                        <div class="contact-section">
                            <h3>Contact Us</h3>
                            <p>Please send us an email if you have a suggestion about our site content or functionality.</p>
                            <p>Email: <a href="mailto:info@arenaauto.com">info@arenaauto.com</a></p>
                        </div>

                        <div class="three-image-layout">
                            <div class="top-images">
                                <img src="./image/about1.png" alt="Small Image 1" />
                                <img src="./image/cameraman.jpg" alt="Small Image 2" />
                            </div>
                            <div class="bottom-image">
                                <img src="./image/types of meetings-blog-post-header_1920x1080.jpg" alt="Large Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
