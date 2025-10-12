import Sidebar from "./../_components/Layout/Sidebar";
import Advertisement from "./../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import PostList from "../_components/PostList";
import MediaDisplay from "../_components/MediaDisplay";
import Hero from "../_components/Layout/Hero";

export default function News() {
    const posts = [
        {
            id: 1,
            published_at: "2025-10-02T09:00:00.000Z",
            title: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
            slug: "ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
            link: "/news/ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
            excerpt:
                "នៅក្នុងពេលដែលក្រុមហ៊ុនជាច្រើនក្នុងវិស័យយានយន្តអគ្គិសនីនៅតែព្យាយាមស្វែងរកវិធីសាស្រ្តដើម្បីធ្វើឲ្យរថយន្តរបស់ខ្លួនកាន់តែមានភាពទាក់ទាញ ក្រុមហ៊ុន Huawei ហាក់ដូចជាបានដើរទៅមុខមួយលានជំហានរួចទៅហើយ។",
            featured_image: {
                url: "/image/news/files-1759315271889-830589414.jpg",
                alt: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
                thumbnail: "/image/news/resized-file-1759388078259-637898202.jpg"
            },
            source: "ArenaEV",
            author: {
                id: "",
                name: "AC Auto",
                avatar: "",
                bio: "",
                slug: ""
            },
            translator: {
                type: "human",
                name: "ផាកឃឺ",
                id: "",
                verified: true
            },
        },
        {
            id: 2,
            published_at: "2025-10-02T03:00:00.000Z",
            title: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន BYD រំពឹងថាការលក់នៅក្រៅប្រទេសនឹងកើនឡើងដល់ ២០% នៃការលក់សរុបនៅឆ្នាំ ២០២៥។",
            slug: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន-byd-2",
            link: "/news/រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន-byd-2",
            excerpt:
                "នេះបើតាមការចុះផ្សាយរបស់កាសែត South China Morning Post។ គេបានប៉ាន់ប្រមាណថា ក្រុមហ៊ុនផលិតរថយន្តនេះ នឹងធ្វើការនាំចេញថយន្តចន្លោះពី ៨០ ម៉ឺន ទៅ ១ លានគ្រឿងទៅកាន់បរទេស ក្រៅពីក្នុងស្រុក នៅឆ្នាំនេះ ដែលប្រហែល ២០% នៃការលក់សរុបទូទាំងពិភពលោក ដែលបានព្យាករណ៍ទុកគឺ ៤,៦ លានគ្រឿង។",
            featured_image: {
                url: "/image/news/file-1759392271468-36349769.jpg",
                alt: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន BYD រំពឹងថាការលក់នៅក្រៅប្រទេសនឹងកើនឡើងដល់ ២០% នៃការលក់សរុបនៅឆ្នាំ ២០២៥។",
                thumbnail: "/image/news/resized-file-1759394227829-921924698.jpg"
            },
            source: "រ៉យទ័រ",
            author: {
                id: "",
                name: "AC auto",
                avatar: "",
                bio: "",
                slug: ""
            },
            translator: {
                type: "human",
                name: "ខេន ផាកឃឺ",
                id: "",
                verified: true
            },
        },
        {
            id: 3,
            published_at: "2025-10-01T03:00:00.000Z",
            title: "Mazda បង្ហាញរថយន្ត SUV អគ្គិសនី EZ-60 ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។",
            slug: "mazda-បង្ហាញរថយន្ត-suv-អគ្គិសនី-ez-60-ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។-3",
            link: "/news/mazda-បង្ហាញរថយន្ត-suv-អគ្គិសនី-ez-60-ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។-3",
            excerpt:
                "រថយន្តអគ្គិសនីស៊េរីចុងក្រោយបំផុតរបស់ក្រុមហ៊ុន Mazda គឺម៉ូដែល EZ-60 ទើបតែត្រូវបានដាក់បង្ហាញនៅប្រទេសចិន ហើយនឹងបង្ហាញខ្លួនជាសកលនៅឆ្នាំ ២០២៦ ក្រោមឈ្មោះផ្សេងគឺ Mazda CX-6e។ រថយន្ត SUV អគ្គិសនីទំហំមធ្យមនេះ និងចូលទីផ្សារប្រកួតប្រជែងយ៉ាងខ្លាំងក្លាជាមួយនឹងយុទ្ធសាស្ត្រតម្លៃដ៏ទាក់ទាញ...",
            featured_image: {
                url: "/image/news/file-1759401962173-711743282.jpg",
                alt: "Mazda បង្ហាញរថយន្ត SUV អគ្គិសនី EZ-60 ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។",
                thumbnail: "/image/news/resized-file-1759420749400-88834351.jpg"
            },
            source: "ArenaEV",
            author: {
                id: "",
                name: "AC Auto",
                avatar: "",
                bio: "Senior Software Engineer",
                slug: ""
            },
            translator: {
                type: "human",
                name: "ផាកឃឺ",
                id: "",
                verified: true
            }
        },
    ];

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
