import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
            })
    }, [])

    const { _id, image, name, price, description } = product;


    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.category.value;
        const type = form.type.value;
        const price = form.Price.value;
        const rating = document.querySelector('input[name="rating-1"]:checked').value;
        const description = form.description.value;
        const updatedProduct = { image, name, brand, type, price, rating, description };

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (

        <div className="bg-[#F4F8F9] p-24">
            <h2 className="text-3xl text-center mb-5 font-extrabold">Update: {name}</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* 1st row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label>
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* 2nd row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label>
                            <select name="category" className="select select-bordered w-full">
                                {brands.map(brand => (
                                    <option key={brand._id} value={brand.BrandName}>
                                        {brand.BrandName}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>


                    <div className="form-control md:w-1/4 md:ml-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label>
                            <select name="type" className="select select-bordered w-full">
                                <option>Men</option>
                                <option>Women</option>
                                <option>Kids</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:ml-4 md:w-1/4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input type="text" name="Price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label>
                            <div className="rating mt-2">
                                <input type="radio" name="rating-1" className="mask mask-star" value="1" />
                                <input type="radio" name="rating-1" className="mask mask-star" value="2" />
                                <input type="radio" name="rating-1" className="mask mask-star" value="3" />
                                <input type="radio" name="rating-1" className="mask mask-star" value="4" />
                                <input type="radio" name="rating-1" className="mask mask-star" value="5" />
                            </div>
                        </label>
                    </div>
                </div>

                {/* 3rd row */}

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label>
                            <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn text-white hover:text-gray-800 btn-block bg-[#F54844]" />

            </form>
        </div>
    );
};

export default UpdateProduct;