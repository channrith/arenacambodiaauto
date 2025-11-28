import Sidebar from "../../_components/Layout/Sidebar";
import Navbar from "../../_components/Layout/Navbar";
import NewsContent from "@/app/_components/NewsContent";
import Hero from "@/app/_components/Layout/Hero";

async function getPosters() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/posters?service=acauto`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch posters");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("❌ Error loading posters:", err);
        return [];
    }
}

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

export async function generateMetadata({ params }) {
    const { slug } = params;
    const id = slug.split('-').pop();
    const news = await getNewsById(id);
    if (!news) return { title: "Article not found | Arena Cambodia Auto" };

    return {
        title: `${news.title} | Arena Cambodia Auto`,
        description: news.excerpt || 'Arena Cambodia Auto is a website of vehicle news and knowledge',
        openGraph: {
            title: news.title,
            description: news.excerpt,
            url: `https://arenacambodiaauto.com/news/${slug}`,
            images: news.featured_image ? [news.featured_image.url] : [],
        },
        alternates: {
            canonical: `https://arenacambodiaauto.com/news/${slug}`,
        }
    };
}

export default async function New({ params }) {
    const { slug } = params;
    const id = slug.split('-').pop();
    const news = await getNewsById(id);
    const posters = await getPosters();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": news.title,
        "image": news.featured_image ? news.featured_image.url : "",
        "datePublished": news.published_at,
        "dateModified": news.updated_at || news.published_at,
        "author": {
            "@type": "Person",
            "name": news.author?.name || "Arena Cambodia Auto"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Arena Cambodia Auto",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.arenacambodiaauto.com/assets/logo.jpg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://arenacambodiaauto.com/news/${slug}`
        },
        "articleBody": news.content?.replace(/<[^>]*>/g, "") || "" // remove HTML tags for indexing
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://arenacambodiaauto.com",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "News",
                "item": `https://arenacambodiaauto.com/news/${slug}`,
            },
        ],
    };

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
                <Sidebar posters={posters?.acauto_sidebar || []} exclusive={posters?.acauto_sidebar_news || []} />
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

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                    />
                </div>
            </div>
        </main>
    );
}
