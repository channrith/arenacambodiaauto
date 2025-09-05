"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faComment, faImage } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../../_components/Layout/Sidebar";
import Navbar from "../../../_components/Layout/Navbar";

export default function Make() {
    const [activeTab, setActiveTab] = useState('opinions')
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
                    <div className="car-model">
                        <div className="tabs">
                            <ul className="tab-menu">
                                <li id="opinions" className={activeTab === 'opinions' ? 'active' : ''} data-tab="opinions" onClick={() => handleTabClick('opinions')}><FontAwesomeIcon icon={faComment} />Opinions</li>
                                <li>
                                    <Link
                                        href="/compare"
                                    >
                                        <FontAwesomeIcon icon={faCubes} />Compare
                                    </Link>
                                </li>
                                <li id="pictures" className={activeTab === 'pictures' ? 'active' : ''} data-tab="pictures" onClick={() => handleTabClick('pictures')}><FontAwesomeIcon icon={faImage} />Pictures</li>
                            </ul>

                            <div className={`tab-content tab-content-options ${activeTab === 'opinions' ? 'active' : ''}`} id="opinions">
                                <div className="compare">
                                    <div className="compare__features">
                                        <div className="feature-row">
                                            <div className="feature-col-title feature-label"><strong>LAUNCH</strong></div>
                                            <div className="feature-col"><strong>Announced</strong></div>
                                            <div className="feature-col">2024, December 12</div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Status</strong></div>
                                            <div className="feature-col">Coming soon. Expected release 2025</div>
                                        </div>
                                    </div>

                                    <div className="compare__features">
                                        <div className="feature-row">
                                            <div className="feature-col-title feature-label"><strong>PERFORMANCE</strong></div>
                                            <div className="feature-col"><strong>Power</strong></div>
                                            <div className="feature-col">FWD 106 kw (144 hp)</div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Torque</strong></div>
                                            <div className="feature-col">189 Nm (139 lb-ft)</div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Acceleration</strong></div>
                                            <div className="feature-col"></div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Max speed</strong></div>
                                            <div className="feature-col"></div>
                                        </div>
                                    </div>

                                    <div className="compare__features">
                                        <div className="feature-row">
                                            <div className="feature-col-title feature-label"><strong>LAUNCH</strong></div>
                                            <div className="feature-col"><strong>Announced</strong></div>
                                            <div className="feature-col">2024, December 12</div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Status</strong></div>
                                            <div className="feature-col">Coming soon. Expected release 2025</div>
                                        </div>
                                    </div>

                                    <div className="compare__features">
                                        <div className="feature-row">
                                            <div className="feature-col-title feature-label"><strong>PERFORMANCE</strong></div>
                                            <div className="feature-col"><strong>Power</strong></div>
                                            <div className="feature-col">FWD 106 kw (144 hp)</div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Torque</strong></div>
                                            <div className="feature-col">189 Nm (139 lb-ft)</div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Acceleration</strong></div>
                                            <div className="feature-col"></div>
                                        </div>

                                        <div className="feature-row">
                                            <div className="feature-col feature-label"></div>
                                            <div className="feature-col"><strong>Max speed</strong></div>
                                            <div className="feature-col"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-content ${activeTab === 'pictures' ? 'active' : ''}`} id="pictures">
                                <div className="car-list-container">
                                    <div className="list">
                                        <div className="list-item">
                                            <img src="/image/arenaev_0001.jpg" alt="Car 1" />
                                        </div>
                                        <div className="list-item">
                                            <img src="/image/arenaev_0002.jpg" alt="Car 2" />
                                        </div>
                                        <div className="list-item">
                                            <img src="/image/arenaev_0003.jpg" alt="Car 3" />
                                        </div>
                                    </div>

                                    <aside className="ads">
                                        <div className="ad-box">Advertisement</div>
                                    </aside>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}
