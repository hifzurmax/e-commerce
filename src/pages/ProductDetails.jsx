import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCartArrowDown } from "react-icons/fa6";

const ProductDetails = () => {
    const product = useLoaderData();
    const { image, name, brand, type, price, description } = product;
    console.log(product);

    const handleAddToCart = e => {
        e.preventDefault();
        const addToCart = { image, name, brand, type, price, description }

        fetch('https://brand-shop-server-lap4jd2li-hifzur-rahmans-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToCart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added to the cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm shadow-xl" />
                <div className="ml-16">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    
                    <div className="stats shadow">
                        <div className="stat place-items-center">
                            <div className="stat-title">Brand</div>
                            <div className="stat-value text-2xl ">{brand}</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Type</div>
                            <div className="stat-value text-2xl text-secondary">{type}</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Price</div>
                            <div className="stat-value text-2xl">${price}</div>
                        </div>
                    </div>
                    
                    <button onClick={handleAddToCart} className="flex justify-center w-full bg-main mt-6 gap-2 py-2 text-base font-bold text-white items-center"><FaCartArrowDown></FaCartArrowDown> ADD TO CART</button>
                </div>
               
            </div>
        </div>
    );
};

export default ProductDetails;