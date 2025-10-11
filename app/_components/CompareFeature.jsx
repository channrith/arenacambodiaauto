import React from "react";

const CompareFeatures = ({ products }) => {
    if (!products || products.length === 0) return null;

    const isCompareMode = products.length > 1;
    const columnCount = isCompareMode ? products.length * 2 : 2;

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gap: "1px",
        backgroundColor: "#ddd",
        marginBottom: "1px",
    };

    // 🔹 Collect all category names across all products
    const allCategories = Array.from(
        new Set(products.flatMap((p) => p.specs.map((s) => s.category)))
    );

    return (
        <div className="compare__features">
            {allCategories.map((category) => {
                // Find all unique features for this category across all products
                const categoryFeatures = Array.from(
                    new Set(
                        products.flatMap((p) => {
                            const spec = p.specs.find((s) => s.category === category);
                            return spec ? Object.keys(spec.features || {}) : [];
                        })
                    )
                );

                return (
                    <div key={category}>
                        {/* 🟦 Category Header Row */}
                        <div className="feature-row header-row" style={gridStyle}>
                            {isCompareMode ? (
                                products.map((p, i) => (
                                    <React.Fragment key={`header-${category}-${i}`}>
                                        <div className="feature-col-title feature-label">
                                            <strong>{category}</strong>
                                        </div>
                                        <div></div>
                                    </React.Fragment>
                                ))
                            ) : (
                                <div className="feature-col-title feature-label">
                                    <strong>{category}</strong>
                                </div>
                            )}
                        </div>

                        {/* 🟩 Feature Rows */}
                        {categoryFeatures.map((featureKey) => (
                            <div
                                className="feature-row"
                                style={gridStyle}
                                key={`${category}-${featureKey}`}
                            >
                                {isCompareMode ? (
                                    products.map((p, i) => {
                                        const spec = p.specs.find((s) => s.category === category);
                                        return (
                                            <React.Fragment key={`${category}-${featureKey}-${i}`}>
                                                <div className="feature-col feature-label">
                                                    <strong>{featureKey}</strong>
                                                </div>
                                                <div className="feature-col">
                                                    {spec?.features?.[featureKey] || "-"}
                                                </div>
                                            </React.Fragment>
                                        );
                                    })
                                ) : (
                                    <React.Fragment key={`${category}-${featureKey}-single`}>
                                        <div className="feature-col feature-label">
                                            <strong>{featureKey}</strong>
                                        </div>
                                        <div className="feature-col">
                                            {
                                                products[0]?.specs
                                                    .find((s) => s.category === category)
                                                    ?.features?.[featureKey] || "-"
                                            }
                                        </div>
                                    </React.Fragment>
                                )}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default CompareFeatures;
