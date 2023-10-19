import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { BrandName, photo } = brand;
    return (
        <Link to={`/brandProducts/${BrandName}`}>
            <div className="card bg-base-100 p-2 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body bg-[#F4F8F9]">
                    <h2 className="text-2xl font-bold text-center">{BrandName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;