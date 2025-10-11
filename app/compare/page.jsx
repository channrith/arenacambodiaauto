import Sidebar from "../_components/Layout/Sidebar";
import Navbar from "../_components/Layout/Navbar";
import Hero from "../_components/Layout/Hero";

export default function Compare() {
    const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ", "cW56AuNHLag", "lMo3Cd7rdnY", "xUkPbfherCY"];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero />

                    <div className="compare">
                        <div className="compare__header">
                            <div className="card">
                                <h3>COMPARE WITH</h3>
                                <input type="text" placeholder="Search car..." />
                                <p className="card__note"><i className="fas fa-info-circle"></i>Please enter model name or part of it</p>
                                <h4 className="card__title">Toyota Urban Cruiser FWD 49kWh</h4>
                                <div className="card__image">
                                    <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car" />
                                </div>
                            </div>

                            <div className="card">
                                <h3>COMPARE WITH</h3>
                                <input type="text" placeholder="Search car..." />
                                <p className="card__note"><i className="fas fa-info-circle"></i>Please enter model name or part of it</p>
                                <h4 className="card__title">Toyota Urban Cruiser FWD 49kWh</h4>
                                <div className="card__image">
                                    <img src="/image/toyota-urban-cruiser-FWD-49kWh.jpg" alt="Car" />
                                </div>
                            </div>
                        </div>

                        <div className="compare__features">
                            <div className="feature-row header-row">
                                <div className="feature-col-title feature-label"><strong>LAUNCH</strong></div>
                                <div></div>
                                <div className="feature-col-title feature-label"><strong>LAUNCH</strong></div>
                            </div>

                            <div className="feature-row">
                                <div className="feature-col feature-label"><strong>Announced</strong></div>
                                <div className="feature-col">2024, December 12</div>
                                <div className="feature-col feature-label"><strong>Announced</strong></div>
                                <div className="feature-col">2025, February 27</div>
                            </div>

                            <div className="feature-row">
                                <div className="feature-col feature-label"><strong>Status</strong></div>
                                <div className="feature-col">Coming soon. Expected release 2025</div>
                                <div className="feature-col feature-label"><strong>Status</strong></div>
                                <div className="feature-col">Coming soon. Expected release 2026</div>
                            </div>
                        </div>

                        <div className="compare__features">
                            <div className="feature-row header-row">
                                <div className="feature-col-title feature-label"><strong>PERFORMANCE</strong></div>
                                <div></div>
                                <div className="feature-col-title feature-label"><strong>PERFORMANCE</strong></div>
                            </div>

                            <div className="feature-row">
                                <div className="feature-col feature-label"><strong>Power</strong></div>
                                <div className="feature-col">FWD 106 kw (144 hp)</div>
                                <div className="feature-col feature-label"><strong>Power</strong></div>
                                <div className="feature-col">FWD 150 kw (204 hp)</div>
                            </div>

                            <div className="feature-row">
                                <div className="feature-col feature-label"><strong>Torque</strong></div>
                                <div className="feature-col">189 Nm (139 lb-ft)</div>
                                <div className="feature-col feature-label"><strong>Torque</strong></div>
                                <div className="feature-col"></div>
                            </div>

                            <div className="feature-row">
                                <div className="feature-col feature-label"><strong>Acceleration</strong></div>
                                <div className="feature-col"></div>
                                <div className="feature-col feature-label"><strong>Acceleration</strong></div>
                                <div className="feature-col">7.4 sec 0-100 km/h</div>
                            </div>

                            <div className="feature-row">
                                <div className="feature-col feature-label"><strong>Max speed</strong></div>
                                <div className="feature-col"></div>
                                <div className="feature-col feature-label"><strong>Max speed</strong></div>
                                <div className="feature-col">170 km/h (160 mph)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
