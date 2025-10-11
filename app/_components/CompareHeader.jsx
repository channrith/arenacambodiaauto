import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const CompareHeader = ({ products, onSearch }) => {
    const displayCards = [products[0], products[1] || { title: "", image: "" }];

    // Keep local input state for each card
    const [searchInputs, setSearchInputs] = useState(["", ""]);

    const handleKeyDown = (index, e) => {
        if (e.key === "Enter") {
            onSearch(index, searchInputs[index]);
        }
    };

    const handleChange = (index, value) => {
        const updatedInputs = [...searchInputs];
        updatedInputs[index] = value;
        setSearchInputs(updatedInputs);
    };

    return (
        <div className="compare__header">
            {products.map((product, index) => (
                <div className="card" key={index}>
                    <h3>COMPARE WITH</h3>

                    <input
                        type="text"
                        placeholder="Search car..."
                        value={searchInputs[index]}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                    />

                    <p className="card__note">
                        <FontAwesomeIcon icon={faCircleInfo} />
                        Please enter model name or part of it
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
