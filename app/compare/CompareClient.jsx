"use client";

import { useMemo, useState } from "react";
import CompareFeatures from "../_components/CompareFeature";
import CompareHeader from "../_components/CompareHeader";
import Hero from "../_components/Layout/Hero";
import MediaDisplay from "../_components/MediaDisplay";

export default function CompareClient({ vehicle }) {
    const [products, setProducts] = useState([vehicle]);

    const handleSearch = async (index, query) => {
        if (!query) return;
        const matchedCar = query;

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

    const structuredData = useMemo(() => {
        const productList = products.map((p) => ({
            "@type": "Product",
            name: p.name,
            image: p.image,
            brand: { "@type": "Brand", name: p.brand },
        }));

        return {
            "@context": "https://schema.org",
            "@type": "ProductComparison",
            name: "Car Comparison",
            description: "Arena Cambodia Auto is a website of vehicle news and knowledge.",
            url: "https://arenacambodiaauto.com/compare",
            productList,
        };
    }, [products]);

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://arenacambodiaauto.com",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://arenacambodiaauto.com/compare",
            },
        ],
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="content">
                <div className="featured-grid">
                    <Hero
                        type="youtube"
                        src="https://www.youtube.com/watch?v=A424QQnQUh8" />
                    <div className="small-gid">
                        <MediaDisplay
                            type="ads"
                            src="/image/Oct24-Cellcard-Hero-Banner-Mobile-720-x-460-eng.jpg"
                            link="https://arenacambodiaauto.com/promo"
                            alt="Your ad could be here!" />
                        <MediaDisplay
                            type="ads"
                            src="/image/f2qy2v60cFOQIjm3DxAbrULlUgiBvdTWCGOG4WUp.jpg"
                            link="https://arenacambodiaauto.com/promo"
                            alt="Your ad could be here!" />
                    </div>
                </div>
                <div className="compare">
                    <CompareHeader
                        products={products}
                        onSearch={handleSearch} />
                    <CompareFeatures products={products} />
                </div>
            </div>
        </>
    );
}
