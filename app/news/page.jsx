import Sidebar from "./../_components/Layout/Sidebar";
import Advertisement from "./../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import PostList from "../_components/PostList";
import Hero from "../_components/Layout/Hero";

export default function News() {
    const posts = [
        {
            id: 1,
            title: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
            slug: "ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
            excerpt:
                "នៅក្នុងពេលដែលក្រុមហ៊ុនជាច្រើនក្នុងវិស័យយានយន្តអគ្គិសនីនៅតែព្យាយាមស្វែងរកវិធីសាស្រ្តដើម្បីធ្វើឲ្យរថយន្តរបស់ខ្លួនកាន់តែមានភាពទាក់ទាញ ក្រុមហ៊ុន Huawei ហាក់ដូចជាបានដើរទៅមុខមួយលានជំហានរួចទៅហើយ។",
            featured_image: {
                url: "/image/news/files-1759315271889-830589414.jpg",
                alt: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
                thumbnail: "/image/news/resized-file-1759388078259-637898202.jpg"
            }
        },
        {
            id: 2,
            title: "Another exciting EV announcement",
            slug: "another-exciting-ev-announcement",
            excerpt:
                "Car makers continue to push EV innovation with new models and battery technology improvements.",
            featured_image: {
                url: "/image/arenaev_001.jpg",
                alt: "Another exciting EV announcement",
                thumbnail: "/image/arenaev_001.jpg"
            }
        },
        {
            id: 3,
            title: "Tesla updates Model S",
            slug: "tesla-updates-model-s",
            excerpt:
                "Tesla introduces performance and interior upgrades to keep the Model S competitive in the luxury EV market.",
            featured_image: {
                url: "/image/arenaev_001.jpg",
                alt: "Tesla updates Model S",
                thumbnail: "/image/arenaev_001.jpg"
            }
        },
        {
            id: 4,
            title: "Hyundai Ioniq 6 gains traction",
            slug: "hyundai-ioniq-6-gains-traction",
            excerpt:
                "Hyundai's Ioniq 6 is praised for its design and range, strengthening the brand’s EV portfolio.",
            featured_image: {
                url: "/image/arenaev_001.jpg",
                alt: "Hyundai Ioniq 6 gains traction",
                thumbnail: "/image/arenaev_001.jpg"
            }
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
