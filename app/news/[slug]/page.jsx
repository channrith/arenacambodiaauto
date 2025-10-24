import Sidebar from "../../_components/Layout/Sidebar";
import Navbar from "../../_components/Layout/Navbar";
import NewsContent from "@/app/_components/NewsContent";
import Hero from "@/app/_components/Layout/Hero";

async function getNewsById(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/news/${id}`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "",
            },
            cache: "no-store", // 🚀 disable caching
        });

        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("❌ Error loading news:", err);
        return [];
    }
}

export default async function New({ params }) {
    const { slug } = params;
    const lastSegment = slug.split('-').pop();
    const news = await getNewsById(lastSegment);

    const getTimeAgo = (date) => {
        const now = new Date();
        const postDate = new Date(date);
        const diffInMs = now - postDate;
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

        if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
        } else {
            const day = postDate.toLocaleDateString('en-US', {
                timeZone: 'Asia/Phnom_Penh',
                day: '2-digit'
            });

            const month = postDate.toLocaleDateString('en-US', {
                timeZone: 'Asia/Phnom_Penh',
                month: 'long'
            });

            const year = postDate.toLocaleDateString('en-US', {
                timeZone: 'Asia/Phnom_Penh',
                year: 'numeric'
            });

            return `${day} ${month} ${year}`;
        }
    };

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero type="featured-image" src={news?.featured_image ? news.featured_image.url : ""} alt={news ? news.title : ""} />
                    {/* <img src={news?.featured_image ? news.featured_image.url : ""} alt={news?.featured_image ? news.featured_image.alt : ""} className="full-width-image" />
                    <h2 className="full-width-title">{news ? news.title : ""}</h2> */}
                    <p style={{ fontSize: "14px" }}><span><strong>{news?.author.name && news.author.name}</strong></span>, <span><strong>{getTimeAgo(news.published_at)}</strong></span></p>
                    <NewsContent content={news ? news.content : "<p>News article not found.</p>"} />

                    {/* <div className="two-images">
                        <img src="/image/arenaev_0001.jpg" alt="Image 1" />
                        <img src="/image/arenaev_0002.jpg" alt="Image 2" />
                    </div> */}

                    <p style={{ margin: "0" }}><span>ប្រភព៖</span> <span>{news.source || ""}</span></p>
                    <p><span>ប្រែសំរួល៖</span> <span>{news?.translator ? news.translator.name : ""}</span></p>
                </div>
            </div>
        </main>
    );
}
