import React from "react";

const CompareFeatures = ({ products }) => {
    // Collect all unique feature keys from all products
    const allFeatures = Array.from(
        new Set(products.flatMap(p => Object.keys(p.features || {})))
    );

    const isCompareMode = products.length > 1; // true when comparing

    // Dynamic column count
    const columnCount = isCompareMode ? products.length * 2 : 2;

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gap: "1px",
        backgroundColor: "#ddd",
        marginBottom: "1px",
    };

    return (
        <div className="compare__features">
            <div className="feature-row header-row" style={gridStyle}>
                {isCompareMode ? (
                    products.map((p, i) => (
                        <React.Fragment key={`header-${i}`}>
                            <div className="feature-col-title feature-label">
                                <strong>{p.category || ""}</strong>
                            </div>
                            <div></div>
                        </React.Fragment>
                    ))
                ) : (
                    <div className="feature-col-title feature-label">
                        <strong>{products[0]?.category || ""}</strong>
                    </div>
                )}
            </div>

            {allFeatures.map(featureKey => (
                <div className="feature-row" style={gridStyle} key={featureKey}>
                    {isCompareMode ? (
                        products.map((p, i) => (
                            <React.Fragment key={`${featureKey}-${i}`}>
                                <div className="feature-col feature-label">
                                    <strong>{featureKey}</strong>
                                </div>
                                <div className="feature-col">
                                    {p.features?.[featureKey] || "-"}
                                </div>
                            </React.Fragment>
                        ))
                    ) : (
                        <React.Fragment key={`${featureKey}-single`}>
                            <div className="feature-col feature-label">
                                <strong>{featureKey}</strong>
                            </div>
                            <div className="feature-col">
                                {products[0]?.features?.[featureKey] || "-"}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CompareFeatures;
