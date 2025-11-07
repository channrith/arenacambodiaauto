import React, { useEffect, useRef, useState } from "react";

const CompareHeader = ({ products, onSearch }) => {
    const debounceTimers = useRef({});
    const displayCards = [products[0], products[1] || { name: "", image: "" }];

    // Keep local input state for each card
    const [searchInputs, setSearchInputs] = useState(["", ""]);

    const [suggestions, setSuggestions] = useState([[], []]); // store suggestions for both inputs
    const [showSuggestions, setShowSuggestions] = useState([false, false]);

    const handleChange = (index, value) => {
        const updatedInputs = [...searchInputs];
        updatedInputs[index] = value;
        setSearchInputs(updatedInputs);

        // Clear suggestions if input is empty
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

        // Debounce API call
        debounceTimers.current[index] = setTimeout(async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/vehicle/search?service=acauto&q=${encodeURIComponent(value)}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN || "",
                        },
                    }
                );

                if (!response.ok) throw new Error("Failed to fetch vehicle data");

                const data = await response.json();

                // Update suggestions with API results
                setSuggestions((prev) => {
                    const updated = [...prev];
                    updated[index] = data; // Adjust based on your API response structure
                    return updated;
                });

                setShowSuggestions((prev) => {
                    const updated = [...prev];
                    updated[index] = data.length > 0;
                    return updated;
                });

            } catch (error) {
                console.error("Error fetching vehicle suggestions:", error);

                // Handle error - clear suggestions
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
            }
        }, 300); // Wait 300ms after user stops typing
    };

    // Clean up timers on unmount
    useEffect(() => {
        return () => {
            Object.values(debounceTimers.current).forEach(clearTimeout);
        };
    }, []);

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
        onSearch(index, car); // reuse your existing search logic
        setSearchInputs((prev) => {
            const updated = [...prev];
            updated[index] = car.name;
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
                                    <li key={`${car.name}-${car.id}`} onClick={() => selectCar(index, car)}>
                                        <img src={car.image} alt={car.name} />
                                        <span>{car.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <p className="card__note">
                        <i className="fas fa-info-circle"></i> Please enter model name or part of it
                    </p>

                    {product.name && (
                        <>
                            <h4 className="card__name">{product.name}</h4>
                            <div className="card__image">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CompareHeader;
