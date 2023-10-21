import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-lap4jd2li-hifzur-rahmans-projects.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
            })
    }, [])
    console.log('brands', brands);

    return (
        <>
            <div className=" mt-24 mb-10">
                <h2 className="text-4xl text-center font-bold">EXCLUSIVE BRANDS</h2>
                <p className="text-center mt-4 text-lg font-light">Shop by your favorite brands</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 mb-20 gap-4 max-w-6xl mx-auto">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
        </>
    );
};


export default Brands;