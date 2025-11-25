"use client"

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/app/_components/Layout/Hero';
import Pagination from '@/app/_components/Pagination';

export default function RegionClient({ data, posters }) {
    const { maker, market_region } = useParams();

    // Fallback data in case API returns empty
    const vehicles = data.vehicles.length ? data.vehicles : [
        {
            name: "Urban Cruiser FWD 49kWh",
            slug: "urban-cruiser-FWD-49kWh",
            year_start: 2024,
            image: "/image/toyota-urban-cruiser-FWD-49kWh.jpg",
        },
    ];

    const { current_page, total, per_page } = data;

    return (
        <div className="content">
            <Hero
                type='featured-image'
                alt={posters.description}
                src={posters.image_url} />
            <div className="car-maker">
                <div className="tabs">
                    <ul className="tab-menu">
                        <li className={market_region === 'local' ? 'active' : ''}>
                            <Link href={`/make/${maker}/local`}>ក្នុងស្រុក</Link>
                        </li>
                        <li className={market_region === 'global' ? 'active' : ''}>
                            <Link href={`/make/${maker}/global`}>ក្រៅស្រុក</Link>
                        </li>
                    </ul>

                    <div className="car-list">
                        {vehicles.map((model) => (
                            <div key={model.slug} className="car-item">
                                <img src={model.image} alt={model.name} />
                                <div className="car-info">
                                    <h4 className='car-model-name'>
                                        <Link href={`/make/${maker}/${market_region}/${model.slug}`}>{model.name}</Link>
                                    </h4>
                                    {/* <p className='car-year'>{model.year_start} -</p> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Pagination
                        currentPage={current_page}
                        totalItems={total}
                        perPage={per_page}
                        basePath={`/make/${maker}/${market_region}`}
                    />

                </div>
            </div>
        </div>
    );
}
