import { FaBlogger, FaFacebookF, FaInstagram, FaLinkedin, FaPhoneSquareAlt, FaSearch, } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";


import toast, { Toaster } from "react-hot-toast";
import logo from '../../assets/img/avater.png';
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { userInfo, isLoggedIn, handleLogout } = useAuth();
    const navigate = useNavigate();
    const handleLogoutButton = () => {
        handleLogout();
        navigate('/signin');
        toast.success('User logout successfull!');
    }
    const navLinks = <>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  pb-1 border-b  border-white  font-semibold" : ""} to="/">HOME</NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  pb-1 border-b  border-white  font-semibold" : ""} to="/about">ABOUT US</NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  pb-1 border-b  border-white  font-semibold" : ""} to="/books">BOOKS</NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  pb-1 border-b  border-white  font-semibold" : ""} to="/contract">CONTRACT US</NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  pb-1 border-b  border-white  font-semibold" : ""} to="/blogs">BLOG</NavLink>
        {
            isLoggedIn ? (
                <button type="button" onClick={handleLogoutButton} className="border-b  border-transparent font-semibold pb-1">
                    LOGOUT
                </button>
            ) : (
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "pb-1 border-b border-transparent font-semibold"
                                : ""
                    }
                    to="/signin"
                >
                    LOGIN
                </NavLink>
            )
        }

    </>

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="py-2  px-[2%]   hidden md:block">
                <div className=" container mx-auto flex justify-between items-center font-semibold py-2 border-b">
                    <div className="flex items-center">
                        <span><FaPhoneSquareAlt /></span>
                        <h2 className="ml-2">+015656582</h2>
                    </div>
                    <div className=" flex items-center space-x-4">
                        <span><FaFacebookF /></span>
                        <span><FaInstagram /></span>
                        <span><FaBlogger /></span>
                        <span><FaLinkedin /></span>
                    </div>
                </div>

                <div className="">
                    <div className=" container mx-auto">
                        <div className=" flex py-3 items-center">
                            <div className="w-3/12 flex items-center">
                                <div className="dropdown dropdown-bottom">
                                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                                        <img className="w-12 h-12 rounded-full" src={userInfo ? userInfo?.profileImage : logo} alt="avatar" />
                                        <p className="ml-2 font-semibold">{userInfo ? `${userInfo?.firstName} ${userInfo?.lastName}` : ''}</p>
                                    </div>
                                    {
                                        isLoggedIn ? <>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to="/profile">Profile</Link></li>
                                                <li><Link to="/dashboard">Dashboard</Link></li>
                                                <li><button type="button" onClick={handleLogoutButton}>Logout</button></li>
                                            </ul>
                                        </> : ""
                                    }
                                </div>
                            </div>
                            <div className="w-6/12 ">
                                <div className="w-3/4 relative">
                                    <input className=" bg-[#f5f1f1a4] outline-0 border-none px-4 py-2 w-full rounded-full" type="text" placeholder="Search books" />
                                    <span className=" absolute right-4 top-3 text-[#6a6a6a]"><FaSearch /></span>
                                </div>
                            </div>
                            <div className="w-3/12 flex justify-end space-x-3">
                                <div className="flex items-center pr-2 border-r">
                                    <span><VscAccount /></span>
                                    <h2 className=" ml-2 font-semibold">ACCOUND</h2>
                                </div>
                                <div className="flex items-center pr-2 border-r">
                                    <span><RiShoppingBagLine /></span>
                                    <h2 className=" ml-2 font-semibold">CART</h2>
                                </div>
                                <div className="flex items-center ">
                                    <span><MdOutlineFavoriteBorder /></span>
                                    <h2 className=" ml-2 font-semibold">WISHLIST</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-success">
                <div className="navbar md:text-white  container mx-auto  px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-96  leading-7 h-48">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-9 font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Header;