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
    const { make, market_region, model } = searchParams;
    const modelId = model.split('-').pop();
    const vehicle = await getCarModelById(modelId);

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <CompareClient vehicle={vehicle} />
            </div>
        </main>
    );
}
