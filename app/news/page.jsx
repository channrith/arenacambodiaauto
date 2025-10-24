import Sidebar from "./../_components/Layout/Sidebar";
import Advertisement from "./../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import PostList from "../_components/PostList";
import MediaDisplay from "../_components/MediaDisplay";
import Hero from "../_components/Layout/Hero";

async function getNews() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/news`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        return data.posts || [];
    } catch (err) {
        console.error("❌ Error loading news:", err);
        return [];
    }
}

export default async function News() {
    const posts = await getNews();

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <div className="featured-grid">
                        <Hero
                            src={posts[0].featured_image.url}
                            showLink={true}
                            link={posts[0].link}
                            alt={posts[0].title} />
                        <div className="small-gid">
                            <MediaDisplay
                                src={posts[1].featured_image.url}
                                showLink={true}
                                link={posts[1].link}
                                alt={posts[1].title} />
                            <MediaDisplay
                                showLink={true}
                                src={posts[2].featured_image.url}
                                link={posts[2].link}
                                alt={posts[2].title} />
                        </div>
                    </div>
                    <Advertisement
                        image="/image/Ads-Poster-800x150px.jpg"
                        alt="Your ad could be here!"
                    // link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
                    />
                    <PostList posts={posts} />
                </div>
            </div>
        </main>
    );
}
