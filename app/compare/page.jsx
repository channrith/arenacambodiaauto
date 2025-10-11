"use client";

import { useState } from "react";
import Sidebar from "../_components/Layout/Sidebar";
import Navbar from "../_components/Layout/Navbar";
import Hero from "../_components/Layout/Hero";
import CompareFeatures from "../_components/CompareFeature";
import CompareHeader from "../_components/CompareHeader";

export default function Compare() {
    const [products, setProducts] = useState([
        {
            title: "Toyota Urban Cruiser FWD 49kWh",
            image: "/image/toyota-urban-cruiser-FWD-49kWh.jpg",
            features: {
                Announced: "2024, December 12",
                Status: "Coming soon. Expected release 2025",
            },
        },
    ]);

    const handleSearch = (index, query) => {
        // 🔍 You can implement car search logic here later (API, etc.)
        console.log("Search for product", index, ":", query);
        const updated = [...products];
        updated[index].search = query;
        setProducts(updated);
    };

    const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ", "cW56AuNHLag", "lMo3Cd7rdnY", "xUkPbfherCY"];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero />

                    <div className="compare">
                        <CompareHeader products={products} onSearch={handleSearch} />

                        <CompareFeatures products={[
                            {
                                category: "LAUNCH",
                                features: {
                                    Announced: "2024, December 12",
                                    Status: "Coming soon. Expected release 2025",
                                    "Base price": "$32,000",
                                },
                            },
                            {
                                category: "LAUNCH",
                                features: {
                                    Announced: "2025, February 27",
                                    Status: "Coming soon. Expected release 2026",
                                },
                            },
                        ]} />

                        <CompareFeatures products={[
                            {
                                category: "PERFORMANCE",
                                features: {
                                    Power: "FWD 106 kw (144 hp)",
                                    Torque: "189 Nm (139 lb-ft)",
                                },
                            },
                            {},
                        ]} />
                    </div>

                </div>
            </div>
        </main>
    );
}
