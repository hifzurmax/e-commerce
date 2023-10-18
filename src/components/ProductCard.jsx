
const ProductCard = ({ product }) => {
    const { image, name, brand, type, price, rating, description } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{type}</div>
                </h2>
                <div className="rating mt-2">
                    {rating !== null ? (
                        <>
                            {Array.from({ length: rating }, (_, i) => (
                                <input
                                    key={i}
                                    type="radio"
                                    name={`rating-${i}`}
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            ))}
                        </>
                    ) : (
                        <p>Loading rating...</p>
                    )}
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Brand: {brand}</div>
                    <div className="badge badge-outline">Price: ${price}</div>
                    <div className="badge badge-outline"><button>Details</button></div>
                    <div className="badge badge-outline"><button>Update</button></div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;