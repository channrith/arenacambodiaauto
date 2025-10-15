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

    // 🔹 Get all unique category names across all products
    const allCategories = Array.from(
        new Set(products.flatMap((p) => p.options.map((s) => s.category)))
    );

    return (
        <div className="compare__features">
            {allCategories.map((category) => {
                // 🔹 Collect all unique labels in this category across all products
                const categoryFeatures = Array.from(
                    new Set(
                        products.flatMap((p) => {
                            const option = p.options.find((s) => s.category === category);
                            return option ? option.specs.map((spec) => spec.label) : [];
                        })
                    )
                );

                return (
                    <div key={category}>
                        {/* 🟦 Category Header */}
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
                                <>
                                    <div className="feature-col-title feature-label">
                                        <strong>{category}</strong>
                                    </div>
                                    <div></div>
                                </>
                            )}
                        </div>

                        {/* 🟩 Feature Rows */}
                        {categoryFeatures.map((label) => (
                            <div
                                className="feature-row"
                                style={gridStyle}
                                key={`${category}-${label}`}
                            >
                                {isCompareMode ? (
                                    products.map((p, i) => {
                                        const option = p.options.find((s) => s.category === category);
                                        const spec = option?.specs.find((s) => s.label === label);
                                        return (
                                            <React.Fragment key={`${category}-${label}-${i}`}>
                                                <div className="feature-col feature-label">
                                                    <strong>{label}</strong>
                                                </div>
                                                <div className="feature-col">
                                                    {spec?.value || "-"}
                                                </div>
                                            </React.Fragment>
                                        );
                                    })
                                ) : (
                                    <>
                                        <div className="feature-col feature-label">
                                            <strong>{label}</strong>
                                        </div>
                                        <div className="feature-col">
                                            {
                                                products[0]?.options
                                                    .find((s) => s.category === category)
                                                    ?.specs.find((s) => s.label === label)?.value || "-"
                                            }
                                        </div>
                                    </>
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
