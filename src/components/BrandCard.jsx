import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { BrandName, photo } = brand;
    return (
        <Link to={`/brandProducts/${BrandName}`}>

            <div className="rounded-sm relative overflow-hidden">
                <img className="w-full" src={photo} alt="brand-name" />
                <div className="absolute inset-0 bg-slate-800 opacity-70 flex items-center justify-center ">
                    <h2 className="text-2xl font-bold text-white">{BrandName}</h2>
                </div>
            </div>

        </Link>
    );
};

export default BrandCard;