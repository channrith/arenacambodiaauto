import Sidebar from "./../_components/Layout/Sidebar";
import Advertisement from "./../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import PostList from "../_components/PostList";
import Hero from "../_components/Layout/Hero";

export default function Home() {
    const posts = [
        {
            id: 1,
            title: "Volkswagen confirms electric GTI details",
            excerpt:
                "Volkswagen plans to launch a family of electric GTI models, starting with the ID.2 GTI and a future electric Golf GTI.",
            image: "/image/arenaev_001.jpg",
        },
        {
            id: 2,
            title: "Another exciting EV announcement",
            excerpt:
                "Car makers continue to push EV innovation with new models and battery technology improvements.",
            image: "/image/arenaev_001.jpg",
        },
        {
            id: 3,
            title: "Tesla updates Model S",
            excerpt:
                "Tesla introduces performance and interior upgrades to keep the Model S competitive in the luxury EV market.",
            image: "/image/arenaev_001.jpg",
        },
        {
            id: 4,
            title: "Hyundai Ioniq 6 gains traction",
            excerpt:
                "Hyundai's Ioniq 6 is praised for its design and range, strengthening the brand’s EV portfolio.",
            image: "/image/arenaev_001.jpg",
        },
    ];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero />
                    <Advertisement
                        image="/image/EN-Euro.gif"
                        alt="Your ad could be here!"
                        link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
                    />
                    <PostList posts={posts} />
                </div>
            </div>
        </main>
    );
}
