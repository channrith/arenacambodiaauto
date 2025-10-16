"use client"

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Sidebar from "../../../_components/Layout/Sidebar";
import Navbar from "../../../_components/Layout/Navbar";
import Hero from '@/app/_components/Layout/Hero';

export default function Make() {
    const { maker, market_region } = useParams();

    const getCarModels = {
        'local': [
            {
                name: "Urban Cruiser FWD 49kWh",
                slug: "urban-cruiser-FWD-49kWh",
                year_start: 2024,
                image: "/image/toyota-urban-cruiser-FWD-49kWh.jpg",
            },
        ],
        'global': [
            {
                name: "TOYOTA Corolla LE 2026 ",
                slug: "toyota-corolla-le-2026",
                year_start: 2024,
                image: "/image/vehicles/20251015/Corolla-LE-2026/Size-600px-x-320px-(Corolla-LE-2026).png",
            },
        ]
    };

    const carModels = getCarModels[market_region];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero
                        type='featured-image'
                        alt='Toyota electric vehicles'
                        src="/image/01_ZEVConcpt_FR_Global.jpg" />
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
                                {carModels.map((model) => (
                                    <div key={model.slug} className="car-item">
                                        <img src={model.image} alt={model.name} />
                                        <div className="car-info">
                                            <h4 className='car-model-name'>
                                                <Link href={`/make/${maker}/${market_region}/${model.slug}`}>{model.name}</Link>
                                            </h4>
                                            <p className='car-year'>{model.year_start} -</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}
