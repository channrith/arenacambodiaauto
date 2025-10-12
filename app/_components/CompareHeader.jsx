import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const CompareHeader = ({ products, onSearch, carDatabase }) => {
    const displayCards = [products[0], products[1] || { title: "", image: "" }];

    // Keep local input state for each card
    const [searchInputs, setSearchInputs] = useState(["", ""]);

    const [suggestions, setSuggestions] = useState([[], []]); // store suggestions for both inputs
    const [showSuggestions, setShowSuggestions] = useState([false, false]);

    const handleChange = (index, value) => {
        const updatedInputs = [...searchInputs];
        updatedInputs[index] = value;
        setSearchInputs(updatedInputs);

        // filter database for matches
        if (value.trim() === "") {
            setSuggestions((prev) => {
                const updated = [...prev];
                updated[index] = [];
                return updated;
            });
            setShowSuggestions((prev) => {
                const updated = [...prev];
                updated[index] = false;
                return updated;
            });
            return;
        }

        const matches = carDatabase.filter((car) =>
            car.title.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions((prev) => {
            const updated = [...prev];
            updated[index] = matches;
            return updated;
        });

        setShowSuggestions((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const firstSuggestion = suggestions[index][0];
            if (firstSuggestion) {
                selectCar(index, firstSuggestion);
            }
        }
    };

    const selectCar = (index, car) => {
        onSearch(index, car.title); // reuse your existing search logic
        setSearchInputs((prev) => {
            const updated = [...prev];
            updated[index] = car.title;
            return updated;
        });

        // hide suggestions after selection
        setShowSuggestions((prev) => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
        });
    };

    return (
        <div className="compare__header">
            {displayCards.map((product, index) => (
                <div className="card" key={index}>
                    <h3>COMPARE WITH</h3>
                    <div className="car-searchbox" style={{ position: "relative" }}>
                        <input
                            type="text"
                            placeholder="Search car..."
                            value={searchInputs[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onFocus={() =>
                                setShowSuggestions((prev) => {
                                    const updated = [...prev];
                                    updated[index] = suggestions[index].length > 0;
                                    return updated;
                                })
                            }
                            onBlur={() =>
                                setTimeout(() => {
                                    setShowSuggestions((prev) => {
                                        const updated = [...prev];
                                        updated[index] = false;
                                        return updated;
                                    });
                                }, 200) // small delay so click can register
                            }
                        />

                        {/* 🔽 Suggestion Dropdown */}
                        {showSuggestions[index] && suggestions[index].length > 0 && (
                            <ul className="search-suggestions">
                                {suggestions[index].map((car) => (
                                    <li key={car.title} onClick={() => selectCar(index, car)}>
                                        <img src={car.image} alt={car.title} />
                                        <span>{car.title}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <p className="card__note">
                        <i className="fas fa-info-circle"></i> Please enter model name or part of it
                    </p>

                    {product.title && (
                        <>
                            <h4 className="card__title">{product.title}</h4>
                            <div className="card__image">
                                <img src={product.image} alt={product.title} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CompareHeader;
