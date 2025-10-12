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
            specs: [
                {
                    category: "LAUNCH",
                    features: {
                        Announced: "2024, December 12",
                        Status: "Coming soon. Expected release 2025",
                    },
                },
                {
                    category: "PERFORMANCE",
                    features: {
                        Power: "FWD 106 kw (144 hp)",
                        Torque: "189 Nm (139 lb-ft)",
                    },
                },
            ]
        },
    ]);

    // 🔍 Example mock data (replace later with API)
    const carDatabase = [
        {
            title: "Toyota Urban Cruiser FWD 49kWh",
            image: "/image/toyota-urban-cruiser-FWD-49kWh.jpg",
            specs: [
                {
                    category: "LAUNCH",
                    features: {
                        Announced: "2024, December 12",
                        Status: "Coming soon. Expected release 2025",
                    },
                },
                {
                    category: "PERFORMANCE",
                    features: {
                        Power: "FWD 106 kw (144 hp)",
                        Torque: "189 Nm (139 lb-ft)",
                    },
                },
            ]
        },
        {
            title: "Honda e:Ny1 68kWh",
            image: "/image/honda-eny1-68kWh.jpg",
            specs: [
                {
                    category: "LAUNCH",
                    features: {
                        Announced: "2025, February 27",
                        Status: "Coming soon. Expected release 2026",
                        "Base price": "$42,000",
                    },
                }
            ]
        },
        {
            title: "Hyundai Kona Electric 64kWh",
            image: "/image/hyundai-kona-64kWh.jpg",
            specs: [{
                category: "LAUNCH",
                features: {
                    Announced: "2023, November 15",
                    Status: "Released 2024",
                    "Base price": "$39,500",
                },
            }]
        },
    ];

    const handleSearch = (index, query) => {
        if (!query.trim()) return;

        const matchedCar = carDatabase.find((c) =>
            c.title.toLowerCase().includes(query.toLowerCase())
        );
        if (!matchedCar) return;
        // Only allow 2 cars max
        if (products.length === 1) {
            // Add new one
            setProducts((prev) => [...prev, matchedCar]);
        } else {
            setProducts((prev) => {
                const updated = [...prev];

                if (index === 0) {
                    // replace first product
                    updated[0] = matchedCar;
                } else if (index === 1) {
                    // add second product if not exist
                    if (updated.length < 2) updated.push(matchedCar);
                    else updated[1] = matchedCar;
                }

                return updated;
            });
        }
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
                        <CompareHeader
                            products={products}
                            onSearch={handleSearch}
                            carDatabase={carDatabase} />
                        <CompareFeatures products={products} />
                    </div>

                </div>
            </div>
        </main>
    );
}
