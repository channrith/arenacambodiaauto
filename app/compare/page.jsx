import Sidebar from "../_components/Layout/Sidebar";
import Navbar from "../_components/Layout/Navbar";
import CompareClient from "./CompareClient";

export const metadata = {
    title: "Car Comparison",
    description: "Arena Cambodia Auto is a website of vehicle news and knowledge.",
    alternates: {
        canonical: "https://arenacambodiaauto.com/compare",
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

async function getCarModelById(modelId) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/vehicle/model/${modelId}?service=acauto`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch vehicle data");
        const data = await res.json();

        return data;
    } catch (err) {
        console.error("❌ Error loading vehicle data:", err);
        return null;
    }
}

export default async function ComparePage({ searchParams }) {
    const bannerVideos = await getBannerVideos();
    const { make, market_region, model } = searchParams;
    let vehicle = {
        name: "Toyota Urban Cruiser FWD 49kWh",
        year_start: 2024,
        year_end: null,
        image: "/image/01_ZEVConcpt_FR_Global.jpg",
        options: [
            {
                category: "LAUNCH",
                specs: [
                    { label: "Announced", value: "2024, December 12" },
                    { label: "Status", value: "Coming soon. Expected release 2025" },
                ],
            },
            {
                category: "PERFORMANCE",
                specs: [
                    { label: "Power", value: "FWD 106 kW (144 hp)" },
                    { label: "Torque", value: "189 Nm (139 lb-ft)" },
                    { label: "Acceleration", value: "" },
                    { label: "Max speed", value: "" },
                ],
            },
        ],
    };

    if (model !== undefined) {
        const modelId = model.split('-').pop();
        vehicle = await getCarModelById(modelId);
    }

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <CompareClient vehicle={vehicle} youtubeId={bannerVideos[1]} />
            </div>
        </main>
    );
}
