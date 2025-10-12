import Sidebar from "../_components/Layout/Sidebar";
import Advertisement from "../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import VideoList from "../_components/VideoList";
import Hero from "../_components/Layout/Hero";

export default function Review() {
    const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ", "cW56AuNHLag", "lMo3Cd7rdnY", "xUkPbfherCY"];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero type="youtube"
                        src="https://www.youtube.com/watch?v=abQ3z3uCauo" />
                    <Advertisement
                        image="/image/EN-Euro.gif"
                        alt="Your ad could be here!"
                        link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
                    />
                    <VideoList videos={videos} />
                </div>
            </div>
        </main>
    );
}
