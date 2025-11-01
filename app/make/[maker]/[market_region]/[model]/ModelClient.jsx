"use client"

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faComment, faImage } from "@fortawesome/free-solid-svg-icons";
import Hero from '@/app/_components/Layout/Hero';
import { groupSpecsByLabel } from '@/app/utils/common';

export default function ModelClient({ carData }) {
    const [activeTab, setActiveTab] = useState('opinions');
    const [selectedColor, setSelectedColor] = useState({});
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const { model, maker, market_region } = useParams();

    return (
        <div className="content">
            <Hero
                type='featured-image'
                alt={selectedColor.name || carData.name}
                src={`${selectedColor.image || carData.image}`} />

            {activeTab === 'pictures' && <div className="color-buttons-wrapper">
                {carData.features.colors.map((color) => {
                    return (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            className={`color-button ${selectedColor.name === color.name ? 'selected' : ''}`}
                            style={{ backgroundColor: color.code }}
                            aria-label={color.name}
                            title={color.name}
                        >
                            {selectedColor.name === color.name && (
                                <span className="checkmark">
                                    <svg
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>}
            <div className="car-model">
                <div className="tabs">
                    <ul className="tab-menu">
                        <li id="opinions" className={activeTab === 'opinions' ? 'active' : ''} data-tab="opinions" onClick={() => handleTabClick('opinions')}><FontAwesomeIcon icon={faComment} />Opinions</li>
                        <li>
                            <Link
                                href={`/compare?make=${maker}&market_region=${market_region}&model=${model}`}
                            >
                                <FontAwesomeIcon icon={faCubes} />Compare
                            </Link>
                        </li>
                        <li
                            id="pictures"
                            className={activeTab === 'pictures' ? 'active' : ''}
                            data-tab="pictures"
                            onClick={() => handleTabClick('pictures')}
                        ><FontAwesomeIcon icon={faImage} />Pictures</li>
                    </ul>

                    <div className={`tab-content tab-content-options ${activeTab === 'opinions' ? 'active' : ''}`} id="opinions">
                        <div className="compare">
                            {carData.options.map((group) => {
                                const groupedSpecs = groupSpecsByLabel(group.specs);

                                return (
                                    <div key={group.category} className="compare__features">
                                        {groupedSpecs.map((spec, index) => {
                                            const validValues = spec.values.filter(Boolean);
                                            return (
                                                <div key={index} className="feature-row">
                                                    <div className="feature-col-title feature-label">
                                                        {index === 0 && <strong>{group.category}</strong>}
                                                    </div>
                                                    <div className="feature-col">
                                                        <strong>{spec.label}</strong>
                                                    </div>
                                                    <div className="feature-col">
                                                        {validValues.length === 0 && <span className="text-muted">-</span>}

                                                        {validValues.length === 1 && <span>{validValues[0]}</span>}

                                                        {validValues.length > 1 && (
                                                            <ul className="feature-values">
                                                                {validValues.map((val, i) => (
                                                                    <li key={i}>{val}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={`tab-content ${activeTab === 'pictures' ? 'active' : ''}`} id="pictures">
                        <div className="car-list-container">
                            <div className="list">
                                {carData.features.images.map((image, index) => (
                                    <div key={index} className="list-item">
                                        <img src={image.url} alt={image.alt || carData.name} />
                                    </div>
                                ))}
                            </div>

                            <aside className="ads">
                                <div className="ad-box">Advertisement</div>
                            </aside>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
