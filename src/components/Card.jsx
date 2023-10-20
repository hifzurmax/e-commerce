
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
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Price: {price}</div>
                    <div className="badge badge-outline">Add to Cart</div>
                </div>
            </div>
        </div>
    );
};

export default Card;