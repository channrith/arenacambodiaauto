import Sidebar from "../_components/Layout/Sidebar";
import Navbar from "../_components/Layout/Navbar";
import Hero from "../_components/Layout/Hero";
import MediaDisplay from "../_components/MediaDisplay";

export const metadata = {
    title: "About Us",
    description: "We are warming welcome all our Customers to Arena Cambodia Auto.",
    alternates: {
        canonical: "https://arenacambodiaauto.com/about",
    },
};

async function getBannerVideos() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/videos/banner?service=acauto`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch videos");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("❌ Error loading videos:", err);
        return [];
    }
}

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

export default async function About() {
    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "About Arena Cambodia Auto",
        "url": "https://arenacambodiaauto.com/about",
        "description":
            "Arena Cambodia Auto is a website of vehicle news and knowledge. All new models you can visit on this page or website as link as below",
        "publisher": {
            "@type": "Organization",
            "name": "Arena Cambodia Auto",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.arenacambodiaauto.com/assets/logo.jpg",
            },
        },
    };

    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Arena Cambodia Auto",
        "url": "https://arenacambodiaauto.com",
        "logo": "https://cdn.arenacambodiaauto.com/assets/logo.jpg",
        "email": "info_arenacambo@gmail.com",
        "telephone": "+855967172226",
        "sameAs": [
            "https://www.facebook.com/arenacambodiaauto",
            "https://www.youtube.com/@ArenaCambodiaAuto",
            "https://t.me/+uOfZHBWACapmYzE9",
            "https://www.tiktok.com/@arenacambodiaauto",
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Phnom Penh",
            "addressCountry": "Cambodia",
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
                "name": "About Us",
                "item": "https://arenacambodiaauto.com/about",
            },
        ],
    };

    const bannerVideos = await getBannerVideos();
    const posters = await getPosters();

    return (
        <main className="main">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <Navbar />
            <div className="main__container">
                <Sidebar posters={posters?.acauto_sidebar || []} exclusive={posters?.acauto_sidebar_about || []} />
                <div className="content">
                    <div className="featured-grid">
                        <Hero
                            type="youtube"
                            src={`https://www.youtube.com/watch?v=${bannerVideos[2]}`} />
                        <div className="small-gid">
                            <MediaDisplay
                                type="ads"
                                src="/image/f2qy2v60cFOQIjm3DxAbrULlUgiBvdTWCGOG4WUp.jpg"
                                link="https://arenacambodiaauto.com/promo"
                                alt="Your ad could be here!" />
                            <MediaDisplay
                                type="ads"
                                src="/image/Oct24-Cellcard-Hero-Banner-Mobile-720-x-460-eng.jpg"
                                link="https://arenacambodiaauto.com/promo"
                                alt="Your ad could be here!" />
                        </div>
                    </div>

                    <div className="about">
                        <div class="about-text">
                            <h3>អំពីយើង</h3>
                            <p>អេរិនណា ខេមបូឌាអូតូ (Arena Cambodia Auto) គឺជាគេហទំព័រ ដែលនិយាយ ឬ ផ្សព្វផ្សាយអំពី ឧស្សារហកម្ម រថយន្ត ក្នុងស្រុក និង ក្រៅស្រុក និង ផ្តល់ចំណេះដឹងដែលទាក់ទងអំពីវិស័យរថយន្តនៅក្នុងប្រទេសកម្ពុជា ក៏ដូចជាក្រៅបទេសផងដែរ។ មិនត្រឹមតែប៉ុណ្ណោះពួកយើងមានគោលបំណងនិងផ្តល់ ព័ត៌មានដែលមានប្រភពច្បាស់លាស់ដែលទាក់ទងទៅនិងវិស័យរថយន្ត ក៏ដូចជាចំណេះដឹងអំពីការថែទាំរថយន្ត និង អំពីច្បាប់ចរាចរណ៏ជាដើម។ល។</p>
                        </div>

                        <div class="about-text">
                            <h3>បេសកកម្មរបស់យើង:</h3>
                            <p>បេសកកម្មរបស់យើងគឺដើម្បីផ្តល់ព័ត៌មាន និង ចំណេះដឹងដ៏ទូលំទូលាយទៅអតិថិជនដែលមានតម្រូវការយានយន្តទាំងអស់នៅក្នុងប្រទេសកម្ពុជា ចាប់ពីការស្វែងរករថយន្តថ្មីដែលស័ក្តិសមបំផុតសម្រាប់អ្នក និងក្រុមគ្រួសាររបស់អ្នកក្នុងតម្លៃសមរម្យ និងឆាប់រហ័ស។</p>
                        </div>

                        <div class="about-text">
                            <h3>អ្វីដែលយើងផ្តល់ជូន:</h3>
                            <p><strong>ទីផ្សារដ៏ធំទូលាយ:</strong> អ្នកអាចស្វែងរកយានយន្តជាច្រើនប្រភេទ រាប់ចាប់ពីឡានគ្រួសារ រហូតដល់រថយន្តស្ព័រទំនើប តាមក្រុមហ៊ុននានា និងឃ្លាំងលក់រថយន្តដែលគួរឱ្យទុកចិត្តនៅទូទាំងប្រទេសកម្ពុជា។</p>
                            <p><strong>ការស្វែងរកដ៏ឆ្លាតវៃ:</strong> គេហទំព័រ នេះ ជាប្រព័ន្ធស្វែងរកដ៏ទំនើបរបស់យើងអនុញ្ញាតឱ្យអ្នកស្វែងរករថយន្តយ៉ាងងាយស្រួលដោយផ្អែកលើម៉ាក ម៉ូដែល ឆ្នាំ តម្លៃ និងលក្ខណៈពិសេសផ្សេងទៀតដែលអ្នកចង់បាន។</p>
                            <p><strong>ធនធាន និងព័ត៌មាន:</strong> ពួកយើងមានក្រុមការងារដែលមានបទពិសោធន៏ ដែលអាចផ្តល់ព័ត៌មានរថយន្ត និង ចំណេះដឹងផ្សេងៗពាក់ព័ន្ធនិងវិស័យរថយន្ត។</p>
                        </div>

                        <div class="contact-section">
                            <h3>ទំនាក់ទំនងមកកាន់ពួកយើង៖</h3>
                            <p>អ៊ីម៉ែល៖ <a href="mailto:info_arenacambo@gmail.com">info_arenacambo@gmail.com</a></p>
                            <p>ទូរស័ព្ទ៖ (855) 096 7172 226, (855) 097 2000 921</p>
                        </div>

                        <div class="three-image-layout">
                            <div class="top-images">
                                <img src="./image/about1.jpg" alt="Small Image 1" />
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
