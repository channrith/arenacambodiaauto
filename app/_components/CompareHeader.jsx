import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const CompareHeader = ({ products, onSearch }) => {
    return (
        <div className="compare__header">
            {products.map((product, index) => (
                <div className="card" key={index}>
                    <h3>COMPARE WITH</h3>

                    <input
                        type="text"
                        placeholder="Search car..."
                        value={product.search || ""}
                        onChange={(e) => onSearch(index, e.target.value)}
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

export default CompareHeader ;
