import Sidebar from "../_components/Layout/Sidebar";
import Advertisement from "../_components/Advertisement";
import Navbar from "../_components/Layout/Navbar";
import Image from "next/image";
import Hero from "../_components/Layout/Hero";
import Link from "next/link";

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

async function getCarMakers() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/vehicle/makers?service=acauto`, {
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
        return null;
    }
}

export default async function LogoPage() {
    const highlights = await getNewsHighlights();
    const special = highlights[0];

    const apiResponse = await getCarMakers();

    const carLogos = apiResponse.makers;

    return (
        <main className="main">
            <Navbar homepage="true" />
            <Hero
                src={special.featured_image.url}
                alt={special.title}
                link={special.link}
                showLink={true}
                className="banner height-500" />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Advertisement
                        image="/image/EN-Euro.gif"
                        alt="Your ad could be here!"
                    // link="https://www.khmertimeskh.com/wp-content/uploads/2025/08/EN-Euro.gif"
                    />

                    <div className="logo-page">
                        <div className="car-list-container">
                            <div className="list">
                                {carLogos.map((car, index) => (
                                    <div key={index} className="list-item">
                                        <Link
                                            href={car.link}
                                        >
                                            <Image
                                                src={car.src}
                                                alt={car.alt}
                                                width={300}
                                                height={150}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
