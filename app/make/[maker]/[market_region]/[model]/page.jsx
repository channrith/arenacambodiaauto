import Sidebar from "../../../../_components/Layout/Sidebar";
import Navbar from "../../../../_components/Layout/Navbar";
import ModelClient from './ModelClient';

async function getCarModelById(modelId) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/vehicle/model/${modelId}?service=acauto`, {
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

export default async function Make({ params }) {
    const posters = await getPosters();
    const { model } = params;
    const id = model.split('-').pop();

    const carData = await getCarModelById(id);
    const defaultCarData = {
        name: "Toyota Urban Cruiser FWD 49kWh",
        year_start: 2024,
        year_end: null,
        image: "/image/01_ZEVConcpt_FR_Global.jpg",
        features: {
            colors: [
                {
                    name: "Calestite",
                    code: "#585f70",
                    image: "/image/01_ZEVConcpt_FR_Global.jpg"
                },
            ],
            images: [
                { url: "/image/arenaev_0001.jpg", alt: "Toyota Arena EV in Cambodia" },
                { url: "/image/arenaev_0002.jpg", alt: "Toyota Arena EV in Cambodia" },
                { url: "/image/arenaev_0003.jpg", alt: "Toyota Arena EV in Cambodia" },
            ]
        },
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


    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar posters={posters?.acauto_sidebar || []} exclusive={[]} />
                <ModelClient carData={carData || defaultCarData} />
            </div>
        </main >
    );
}
