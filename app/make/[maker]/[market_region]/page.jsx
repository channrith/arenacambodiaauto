import Sidebar from "../../../_components/Layout/Sidebar";
import Navbar from "../../../_components/Layout/Navbar";
import RegionClient from './RegionClient';

async function getVehicleModel({ region, maker }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/vehicle/model?global=${region}&maker=${maker}&service=acauto`, {
            headers: {
                "Content-Type": "application/json",
                token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "", // optional token if your gateway requires it
            },
            next: { revalidate: 60 }, // ISR: cache for 1 minute
        });

        if (!res.ok) throw new Error("Failed to fetch vehicles");
        const data = await res.json();

        return data;
    } catch (err) {
        console.error("❌ Error loading vehicles:", err);
        return [];
    }
}

export default async function Make({ params }) {
    const { maker, market_region } = params;
    const region = market_region === 'global' ? 1 : 0;
    const apiResponse = await getVehicleModel({ region, maker });
    // Fallback data in case API returns empty
    const vehicleData = apiResponse.vehicles.length ? apiResponse.vehicles : [
        {
            name: "Urban Cruiser FWD 49kWh",
            slug: "urban-cruiser-FWD-49kWh",
            year_start: 2024,
            image: "/image/toyota-urban-cruiser-FWD-49kWh.jpg",
        },
    ];
    const pageData = {
        currentPage: apiResponse.current_page,
        total: apiResponse.total,
        perPage: apiResponse.per_page,
    };

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <RegionClient vehicles={vehicleData} pagination={pageData} />
            </div>
        </main >
    );
}
