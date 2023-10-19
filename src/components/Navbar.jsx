import { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }
    const navLink = <>

        <li className="mr-10 font-bold">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="mr-10 font-bold">
            <NavLink
                to="/addproducts"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                Add Products
            </NavLink>
        </li>
        <li className="mr-10 font-bold">
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                Contact
            </NavLink>
        </li>

        <li className="mr-10 font-bold">
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-main underline" : ""
                }
            >
                Register
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar max-w-7xl mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className='h-9' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="md:navbar-end justify-center w-full md:w-1/2">
                {
                    user ?
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        :
                        null
                }
                {
                    user ?
                        <>
                            <h2>{user.displayName}</h2>
                            <button onClick={handleSignOut} className="px-4 py-2 my-3 mx-2">Sign Out</button>
                        </>
                        :
                        <Link to="/login">
                            <button className="px-4 py-2 my-3 mx-2">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;