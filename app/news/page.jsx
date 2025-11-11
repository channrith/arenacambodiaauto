export const metadata = {
    title: "Latest News",
    description: "Arena Cambodia Auto is a website of vehicle news and knowledge.",
    alternates: {
        canonical: "https://arenacambodiaauto.com/news",
    },
};

import Sidebar from "./../_components/Layout/Sidebar";
import Advertisement from "./../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import PostList from "../_components/PostList";
import MediaDisplay from "../_components/MediaDisplay";
import Hero from "../_components/Layout/Hero";
import Pagination from "../_components/Pagination";

async function getNews(page = 1) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/news?page=${page}`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("❌ Error loading news:", err);
        return [];
    }
}

async function getFeatured() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/news?page=1`,
            {
                headers: {
                    "Content-Type": "application/json",
                    token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "",
                },
                next: { revalidate: 60 },
            }
        );
        if (!res.ok) throw new Error("Failed to fetch featured news");
        const data = await res.json();
        return data.posts || [];
    } catch (err) {
        console.error("❌ Error loading featured news:", err);
        return [];
    }
}

export default async function News({ searchParams }) {
    const page = Number(searchParams?.page) || 1;
    const [featuredPosts, paginatedData] = await Promise.all([
        getFeatured(),
        getNews(page),
    ]);
    const { posts, current_page, total, per_page } = paginatedData;

    const itemListJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Arena Cambodia Auto News",
        "itemListElement": posts.map((post, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://arenacambodiaauto.com/news/${post.slug}`,
            "name": post.title,
            "image": post.featured_image.url
        }))
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
                "item": "https://arenacambodiaauto.com/news",
            },
        ],
    };

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                    />
                    {featuredPosts.length >= 3 && (
                        <div className="featured-grid">
                            <Hero
                                src={featuredPosts[0].featured_image.url}
                                showLink={true}
                                link={featuredPosts[0].link}
                                alt={featuredPosts[0].title} />
                            <div className="small-gid">
                                <MediaDisplay
                                    src={featuredPosts[1].featured_image.url}
                                    showLink={true}
                                    link={featuredPosts[1].link}
                                    alt={featuredPosts[1].title} />
                                <MediaDisplay
                                    showLink={true}
                                    src={featuredPosts[2].featured_image.url}
                                    link={featuredPosts[2].link}
                                    alt={featuredPosts[2].title} />
                            </div>
                        </div>
                    )}
                    <Advertisement
                        image="/image/Ads-Poster-800x150px.jpg"
                        alt="Your ad could be here!"
                    // link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
                    />
                    <PostList posts={posts} />

                    <Pagination
                        currentPage={current_page}
                        totalItems={total}
                        perPage={per_page}
                        basePath="/news"
                    />
                </div>
            </div>
        </main>
    );
}
