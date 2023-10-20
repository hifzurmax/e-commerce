import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const cartItems = useLoaderData()
    const [items, setItems] = useState(cartItems)

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = items.filter(item => item._id !== _id);
                            setItems(remaining);
                        }
                    })

            }
        })
    }





    return (
        <div className="overflow-x-auto max-w-6xl mx-auto">
            <h2 className="text-center text-lg font-semibold">Total Cart Items: {cartItems.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Short Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        items.map(cartOne => <tr key={cartOne._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cartOne.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cartOne.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td> {cartOne.description}</td>
                            <td>${cartOne.price}</td>
                            <th>
                                <button onClick={() => handleDelete(cartOne._id)} className="btn btn-xs">Remove</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
            <div className="flex justify-center">
                <button className="btn text-center">Parchase Now</button>
            </div>
        </div>
    );
};

export default Cart;