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
      link: "/news/ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
      excerpt:
        "នៅក្នុងពេលដែលក្រុមហ៊ុនជាច្រើនក្នុងវិស័យយានយន្តអគ្គិសនីនៅតែព្យាយាមស្វែងរកវិធីសាស្រ្តដើម្បីធ្វើឲ្យរថយន្តរបស់ខ្លួនកាន់តែមានភាពទាក់ទាញ ក្រុមហ៊ុន Huawei ហាក់ដូចជាបានដើរទៅមុខមួយលានជំហានរួចទៅហើយ។",
      featured_image: {
        url: "/image/news/resized-file-1759387627398-74463161.jpg",
        alt: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
        thumbnail: "/image/news/resized-file-1759388078259-637898202.jpg"
      }
    },
    {
      id: 2,
      title: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន BYD រំពឹងថាការលក់នៅក្រៅប្រទេសនឹងកើនឡើងដល់ ២០% នៃការលក់សរុបនៅឆ្នាំ ២០២៥។",
      slug: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន-byd-រំពឹងថាការលក់នៅក្រៅប្រទេសនឹងកើនឡើងដល់-២០%-នៃការលក់សរុបនៅឆ្នាំ-២០២៥។-2",
      link: "/news/រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន-byd-2",
      excerpt:
        "នេះបើតាមការចុះផ្សាយរបស់កាសែត South China Morning Post។ គេបានប៉ាន់ប្រមាណថា ក្រុមហ៊ុនផលិតរថយន្តនេះ នឹងធ្វើការនាំចេញថយន្តចន្លោះពី ៨០ ម៉ឺន ទៅ ១ លានគ្រឿងទៅកាន់បរទេស ក្រៅពីក្នុងស្រុក នៅឆ្នាំនេះ ដែលប្រហែល ២០% នៃការលក់សរុបទូទាំងពិភពលោក ដែលបានព្យាករណ៍ទុកគឺ ៤,៦ លានគ្រឿង។",
      featured_image: {
        url: "/image/news/file-1759392271468-36349769.jpg",
        alt: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន BYD រំពឹងថាការលក់នៅក្រៅប្រទេសនឹងកើនឡើងដល់ ២០% នៃការលក់សរុបនៅឆ្នាំ ២០២៥។",
        thumbnail: "/image/news/resized-file-1759393685889-250336739.jpg"
      },
    },
    {
      id: 3,
      title: "Mazda បង្ហាញរថយន្ត SUV អគ្គិសនី EZ-60 ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។",
      slug: "mazda-បង្ហាញរថយន្ត-suv-អគ្គិសនី-ez-60-ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។-3",
      link: "/news/mazda-បង្ហាញរថយន្ត-suv-អគ្គិសនី-ez-60-ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។-3",
      excerpt:
        "រថយន្តអគ្គិសនីស៊េរីចុងក្រោយបំផុតរបស់ក្រុមហ៊ុន Mazda គឺម៉ូដែល EZ-60 ទើបតែត្រូវបានដាក់បង្ហាញនៅប្រទេសចិន ហើយនឹងបង្ហាញខ្លួនជាសកលនៅឆ្នាំ ២០២៦ ក្រោមឈ្មោះផ្សេងគឺ Mazda CX-6e។ រថយន្ត SUV អគ្គិសនីទំហំមធ្យមនេះ និងចូលទីផ្សារប្រកួតប្រជែងយ៉ាងខ្លាំងក្លាជាមួយនឹងយុទ្ធសាស្ត្រតម្លៃដ៏ទាក់ទាញ ជាមួយនិងជម្រើសប្រភេទម៉ាស៊ីនពីរផ្សេងគ្នា ដែលផ្តល់ជម្រើសទៅដល់អ្នកទិញដែលជាគូប្រកួតប្រជែងជាច្រើនគ្មានដូច។",
      featured_image: {
        url: "/image/news/file-1759401962173-711743282.jpg",
        alt: "Mazda បង្ហាញរថយន្ត SUV អគ្គិសនី EZ-60 ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។",
        thumbnail: "/image/news/resized-file-1759420749400-88834351.jpg"
      }
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
