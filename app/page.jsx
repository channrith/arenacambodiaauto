import VideoList from "./_components/VideoList";
import Advertisement from "./_components/Advertisement";
import PostList from "./_components/PostList";
import Sidebar from "./_components/Layout/Sidebar";
import Link from "next/link";
import Navbar from "./_components/Layout/Navbar";
import Image from "next/image";

export default function Home() {
  const special = {
    id: 1,
    title: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
    link: "/news/ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
    image: "/image/news/files-1759315271889-830589414.jpg",
  };

  const posts = [
    {
      id: 1,
      title: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
      slug: "ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
      excerpt:
        "នៅក្នុងពេលដែលក្រុមហ៊ុនជាច្រើនក្នុងវិស័យយានយន្តអគ្គិសនីនៅតែព្យាយាមស្វែងរកវិធីសាស្រ្តដើម្បីធ្វើឲ្យរថយន្តរបស់ខ្លួនកាន់តែមានភាពទាក់ទាញ ក្រុមហ៊ុន Huawei ហាក់ដូចជាបានដើរទៅមុខមួយលានជំហានរួចទៅហើយ។",
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

  const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ"];

  return (
    <main className="main">
      <Navbar homepage="true" />
      <div className="banner height-500">
        <Image
          src={special.image}
          alt={special.title}
          fill
          className="banner__image"
          priority
        />
        <div className="banner__title"><Link href={special.link}>{special.title}</Link></div>
      </div>
      <div className="main__container">
        <Sidebar />
        <div className="content">
          <VideoList videos={videos} />
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
