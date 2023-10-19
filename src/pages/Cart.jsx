import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const cartItems = useLoaderData()
    console.log('cart items',cartItems);
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
                        cartItems.map(cartOne => <tr key={cartOne._id}>
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
                                <button className="btn btn-xs">Buy Now</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Cart;