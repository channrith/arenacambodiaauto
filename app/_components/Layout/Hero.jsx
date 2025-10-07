import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const posts = [
        {
            id: 1,
            title: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
            slug: "ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
            link: "/news/ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1",
            image: "/image/news/resized-file-1759388940032-139973166.jpg",
        },
        {
            id: 2,
            title: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន BYD រំពឹងថាការលក់នៅក្រៅប្រទេសនឹងកើនឡើងដល់ ២០% នៃការលក់សរុបនៅឆ្នាំ ២០២៥។",
            slug: "រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន-byd-រំពឹងថាការលក់នៅក្រៅប្រទេសនឹងកើនឡើងដល់-២០%-នៃការលក់សរុបនៅឆ្នាំ-២០២៥។-2",
            link: "/news/រថយន្តអគ្គិសនីរបស់ក្រុមហ៊ុន-byd-2",
            image: "/image/news/resized-file-1759394227829-921924698.jpg",
        },
        {
            id: 3,
            title: "Mazda បង្ហាញរថយន្ត SUV អគ្គិសនី EZ-60 ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។",
            slug: "mazda-បង្ហាញរថយន្ត-suv-អគ្គិសនី-ez-60-ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។-3",
            link: "/news/mazda-បង្ហាញរថយន្ត-suv-អគ្គិសនី-ez-60-ជាមួយនឹងជម្រើសម៉ាស៊ីនពីរប្រភេទ។-3",
            image: "/image/news/file-1759401962173-711743282.jpg",
        }
    ];

    return (
        <div className="image-grid">
            <div className="large-image hero-item">
                <Image
                    src={posts[0].image}
                    alt="Large"
                    width="800"
                    height="400"
                    priority
                />
                <div className="banner__title"><Link href={posts[0].link}>{posts[0].title}</Link></div>
            </div>
            <div className="small-images">
                <div className="hero-item">
                    <Image
                        src={posts[1].image}
                        alt="Top Small"
                        width="800"
                        height="400"
                        priority
                    />
                    <div className="banner__title font-size-18"><Link href={posts[1].link}>{posts[1].title}</Link></div>
                </div>
                <div className="hero-item">
                    <Image
                        src={posts[2].image}
                        alt="Bottom Small"
                        width="800"
                        height="400"
                        priority
                    />
                    <div className="banner__title font-size-18"><Link href={posts[2].link}>{posts[2].title}</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
