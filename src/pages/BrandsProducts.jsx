import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";

const BrandsProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <Slider></Slider>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 max-w-7xl mx-auto">
                {
                    products.length !== 0 ?
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}></ProductCard>)
                        :
                        <>
                            <div></div>
                            <h2 className="text-4xl font-bold text-center">There is no avilable products on this brand right now</h2>
                            <div></div>
                        </>
                }
            </div>
        </div>
    );
};

export default BrandsProducts;