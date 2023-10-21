import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, image, name, brand, type, price, rating, description } = product;
    return (
        <>

            {/* <div className="card bg-base-100 shadow-xl">
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
                    <div className="space-x-1">
                        <div className="badge badge-outline">Brand: {brand}</div>
                        <div className="badge badge-outline">Price: ${price}</div>
                        <Link to={`/details/${_id}`}><div className="badge badge-outline"><button>Details</button></div></Link>
                        <Link to={`/singleproduct/${_id}`}><div className="badge badge-outline"><button>Update</button></div></Link>
                    </div>

                </div>
            </div> */}




            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary bg-main">{type}</div>
                    </h2>
                    <p>{description}</p>
                    <h2 className="text-main card-title">${price}</h2>
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
                    <div className="card-actions justify-end">
                        <Link><div className="badge badge-outline">Brand: {brand}</div></Link>
                        <Link to={`/singleproduct/${_id}`}><div className="badge badge-outline"><button>Update</button></div></Link>
                    </div>
                </div>
                <button className="flex justify-center w-full bg-main gap-2 py-2 text-base font-bold text-white items-center"><Link to={`/details/${_id}`}><div><button>VIEW THE PRODUCT</button></div></Link></button>
            </div>

        </>


    );
};

export default ProductCard;