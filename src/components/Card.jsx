import { FaCartArrowDown } from "react-icons/fa6";

const Card = ({ card }) => {
    const { image, name, price, description } = card;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary bg-main">SALE</div>
                </h2>
                <p>{description}</p>
                <h2 className="text-main card-title">${price}</h2>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <button className="flex justify-center w-full bg-main gap-2 py-2 text-base font-bold text-white items-center"><FaCartArrowDown></FaCartArrowDown> ADD TO CART</button>
        </div>
    );
};

export default Card;