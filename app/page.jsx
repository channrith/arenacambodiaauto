export const metadata = {
  title: "Arena Cambodia Auto",
  description: "All new models vehicle you can find on Arena Cambodia Auto.",
  alternates: {
    canonical: "https://arenacambodiaauto.com",
  },
};

import VideoList from "./_components/VideoList";
import Advertisement from "./_components/Advertisement";
import PostList from "./_components/PostList";
import Sidebar from "./_components/Layout/Sidebar";
import Navbar from "./_components/Layout/Navbar";
import Hero from "./_components/Layout/Hero";

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

async function getNewsHighlights() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/highlights`, {
      headers: {
        "Content-Type": "application/json",
        token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
      },
      next: { revalidate: 60 }, // ISR: cache for 1 minute
    });

    if (!res.ok) throw new Error("Failed to fetch highlight");
    const data = await res.json();
    return data || [];
  } catch (err) {
    console.error("❌ Error loading highlight:", err);
    return [];
  }
}

export default async function Home() {
  const posts = await getNews();
  const highlights = await getNewsHighlights();
  const special = highlights[0];

  const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ"];

  // Organization Schema
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arena Cambodia Auto",
    "url": "https://arenacambodiaauto.com",
    "logo": "https://cdn.arenacambodiaauto.com/assets/logo.jpg",
    "sameAs": [
      "https://www.facebook.com/arenacambodiaauto",
    ]
  };

  // WebSite Search Box Schema
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arena Cambodia Auto",
    "url": "https://arenacambodiaauto.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://arenacambodiaauto.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Homepage Article List Schema
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": posts.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      "url": `https://arenacambodiaauto.com/news/${item.slug}`,
    }))
  };

  return (
    <main className="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <Navbar homepage="true" />
      <Hero
        src={special.featured_image.url}
        alt={special.title}
        link={special.link}
        showLink={true}
        className="height-500" />
      <div className="main__container">
        <Sidebar />
        <div className="content">
          <VideoList videos={videos} />
          <Advertisement
            image="/image/EN-Euro.gif"
            alt="Your ad could be here!"
          // link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
          />
          <PostList posts={posts} />
        </div>
      </div>
    </main>
  );
}
