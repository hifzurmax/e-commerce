import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const product = useLoaderData();
    const { image, name, brand, type, price, description } = product;
    console.log(product);

    const handleAddToCart = e => {
        e.preventDefault();
        const addToCart = { image, name, brand, type, price, description }

        fetch('http://localhost:5000/cart', {
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
                    <button onClick={handleAddToCart} className="btn block mt-10 btn-primary">Add to Cart</button>
                </div>
               
            </div>
        </div>
    );
};

export default ProductDetails;