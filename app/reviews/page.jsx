import Sidebar from "../_components/Layout/Sidebar";
import Advertisement from "../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import VideoList from "../_components/VideoList";
import Hero from "../_components/Layout/Hero";

export const metadata = {
    title: "Car Reviews",
    description: "More Video on new models vehicle and service knowledge in Arena Cambodia Auto.",
    alternates: {
        canonical: "https://arenacambodiaauto.com/reviews",
    },
};

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
        return data.acauto_video || [];
    } catch (err) {
        console.error("❌ Error loading posters:", err);
        return [];
    }
}

export default async function Review() {
    const posters = await getPosters();
    const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ", "cW56AuNHLag", "lMo3Cd7rdnY", "xUkPbfherCY"];

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Car Reviews - Arena Cambodia Auto",
        "url": "https://arenacambodiaauto.com/reviews",
        "description": "Arena Cambodia Auto is a website of vehicle news and knowledge. All new models you can visit on this page or website as link as below",
        "publisher": {
            "@type": "Organization",
            "name": "Arena Cambodia Auto",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.arenacambodiaauto.com/assets/logo.jpg",
            },
        },
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
                "name": "Reviews",
                "item": "https://arenacambodiaauto.com/reviews",
            },
        ],
    };

    const videoObjects = videos.map((id) => ({
        "@type": "VideoObject",
        "name": "Car Review Video",
        "description": "Watch our car review and test drive video on Arena Cambodia Auto.",
        "thumbnailUrl": `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        //"uploadDate": "2025-10-01", // optional, can be dynamic if you have data
        "embedUrl": `https://www.youtube.com/embed/${id}`,
        "publisher": {
            "@type": "Organization",
            "name": "Arena Cambodia Auto",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.arenacambodiaauto.com/assets/logo.jpg",
            },
        },
    }));

    const videoJsonLd = {
        "@context": "https://schema.org",
        "@graph": videoObjects,
    };

    return (
        <main className="main">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />


            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero type="youtube"
                        src="https://www.youtube.com/watch?v=abQ3z3uCauo" />
                    <Advertisement
                        image={posters[0].feature_image_url}
                        alt={posters[0].title}
                    // link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
                    />
                    <VideoList videos={videos} />
                </div>
            </div>
        </main>
    );
}
