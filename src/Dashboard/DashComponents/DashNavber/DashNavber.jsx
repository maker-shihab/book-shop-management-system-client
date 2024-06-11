import toast from "react-hot-toast";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DashNavber = () => {
    const navigate = useNavigate();
    const { userInfo, handleLogout } = useAuth();

    const handleLogoutButton = () => {
        handleLogout();
        navigate('/signin');
        toast.success('User logout successfull!');
    }
    return (
        <div className="bg-[#262E3B] text-white border-b  border-[#485975]">
            <div className="navbar px-[2%] ">
                <div className="flex-1">
                    <Link to="/" className="text-xl font-bold">Book Shop</Link>
                </div>
                <div className="flex-none">
                    <div className="pr-6">
                        <button type="button">
                            <div className="indicator">
                                <span className="text-xl"><TiShoppingCart /></span>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </button>
                    </div>

                    <div className=" flex  items-center">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 rounded-full">
                                    <img alt="avater" src={userInfo?.profileImage} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#262E3B] border border-[#485975]">
                                <li>
                                    <Link to={`/profile`} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="#">Settings</Link></li>
                                <li><button type="button" onClick={handleLogoutButton}>Logout</button></li>
                            </ul>
                        </div>
                        <strong className="pl-2">{userInfo?.firstName} {userInfo?.lastName}</strong>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashNavber;