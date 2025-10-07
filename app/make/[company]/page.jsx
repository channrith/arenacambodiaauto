"use client"

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from "../../_components/Layout/Sidebar";
import Navbar from "../../_components/Layout/Navbar";

export default function Make() {
    const [activeTab, setActiveTab] = useState('local')
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <div className="banner">
                        <img src="/image/01_ZEVConcpt_FR_Global.jpg" alt="Banner" />
                        <div className="banner__title">Toyota electric vehicles</div>
                    </div>
                    <div className="car-maker">
                        <div className="tabs">
                            <ul className="tab-menu">
                                <li id="local" className={activeTab === 'local' ? 'active' : ''} data-tab="local" onClick={() => handleTabClick('local')}>ក្នុងស្រុក </li>
                                <li id="global" className={activeTab === 'global' ? 'active' : ''} data-tab="global" onClick={() => handleTabClick('global')}>ក្រៅស្រុក</li>
                            </ul>

                            <div className={`tab-content ${activeTab === 'local' ? 'active' : ''}`} id="local">
                                <div className="list">
                                    <div className="list-item">
                                        <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car 1" />
                                        <div className="list-info">
                                            <h4>
                                                <Link
                                                    href="/make/toyota/urban-cruiser-FWD-49kWh"
                                                >
                                                    Urban Cruiser FWD 49kWh
                                                </Link>
                                            </h4>
                                            <p>2024 -</p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car 2" />
                                        <div className="list-info">
                                            <h4>
                                                <Link
                                                    href="/make/toyota/urban-cruiser-FWD-49kWh"
                                                >
                                                    Urban Cruiser FWD 49kWh
                                                </Link>
                                            </h4>
                                            <p>2024 -</p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car 3" />
                                        <div className="list-info">
                                            <h4>
                                                <Link
                                                    href="/make/toyota/urban-cruiser-FWD-49kWh"
                                                >
                                                    Urban Cruiser FWD 49kWh
                                                </Link>
                                            </h4>
                                            <p>2024 -</p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car 4" />
                                        <div className="list-info">
                                            <h4>
                                                <Link
                                                    href="/make/toyota/urban-cruiser-FWD-49kWh"
                                                >
                                                    Urban Cruiser FWD 49kWh
                                                </Link>
                                            </h4>
                                            <p>2024 -</p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car 5" />
                                        <div className="list-info">
                                            <h4>
                                                <Link
                                                    href="/make/toyota/urban-cruiser-FWD-49kWh"
                                                >
                                                    Urban Cruiser FWD 49kWh
                                                </Link>
                                            </h4>
                                            <p>2024 -</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`tab-content ${activeTab === 'global' ? 'active' : ''}`} id="global">
                                <div className="list">
                                    <div className="list-item">
                                        <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car 1" />
                                        <div className="list-info">
                                            <h4>
                                                <Link
                                                    href="/make/toyota/urban-cruiser-FWD-49kWh"
                                                >
                                                    Urban Cruiser FWD 49kWh
                                                </Link>
                                            </h4>
                                            <p>2024 -</p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car 2" />
                                        <div className="list-info">
                                            <h4>
                                                <Link
                                                    href="/make/toyota/urban-cruiser-FWD-49kWh"
                                                >
                                                    Urban Cruiser FWD 49kWh
                                                </Link>
                                            </h4>
                                            <p>2024 -</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}
