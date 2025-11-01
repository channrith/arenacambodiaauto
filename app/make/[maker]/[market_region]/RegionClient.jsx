"use client"

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/app/_components/Layout/Hero';

export default function RegionClient({ vehicles, pagination }) {
    const { maker, market_region } = useParams();

    return (
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

                </div>
            </div>
        </div>
    );
}
