import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
    const [formData, setFormData] = useState({});
    const [inputError, setInputError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setInputError("Passwords do not match");
            toast.error("Passwords do not match");
            return false;
        }

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.role || !formData.userName) {
            toast.error("Please fill in all required fields");
            return false;
        }

        else {
            const response = await authApi.signup(formData);
            if (response.data.success) {
                toast.success("User signup successfull!");
                navigate('/signin');
                return true;
            } else {
                toast.error("Please fill in all required fields");
            }

        }
    };
    return (
        <div>
            <Header />
            <div className="">
                <Toaster position="top-center" />
                <div className="container mx-auto min-h-screen py-9 px-[10%]">
                    <div className=" flex flex-col md:flex-row  justify-between items-center">
                        <div className="w-full md:w-3/4 p-12 rounded-md border mx-auto">
                            <h1 className="text-4xl font-bold py-6 text-center">Sign Up</h1>

                            <form className=" space-y-3" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Select Role<small className="text-red-500">*</small></span>
                                    </label>
                                    <div className="join gap-4">
                                        <div className="form-control">
                                            <label className="label font-bold">
                                                <span className="label-text">Customer</span>
                                            </label>
                                            <div className="text-center">
                                                <input type="radio" name="role" className="radio radio-success" aria-label="general" value="general" onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label font-bold">
                                                <span className="label-text">Seller</span>
                                            </label>
                                            <div className="text-center">
                                                <input type="radio" name="role" className="radio radio-success" aria-label="seller" value="seller" onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label font-bold">
                                                <span className="label-text">Donar</span>
                                            </label>
                                            <div className="text-center">
                                                <input type="radio" name="role" className="radio radio-success" aria-label="donar" value="donar" onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label font-bold">
                                            <span className="label-text">First Name <small className="text-red-500">*</small></span>
                                        </label>
                                        <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label font-bold">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" value={formData.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">User Name <small className="text-red-500">*</small></span>
                                    </label>
                                    <input type="text" placeholder="User Name" name="userName" className="input input-bordered" value={formData.userName} onChange={handleChange} required />
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Email <small className="text-red-500">*</small></span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label font-bold">
                                            <span className="label-text">Password <small className="text-red-500">*</small></span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 px-3 py-2"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label font-bold">
                                            <span className="label-text">Confirm Password <small className="text-red-500">*</small></span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="input input-bordered"
                                            required
                                        />
                                        {inputError && <p className="text-red-500">{inputError}</p>}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" name="phone" className="input input-bordered" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Profile Image</span>
                                    </label>
                                    <input type="text" placeholder="Profile Image Url" name="profileImage" className="input input-bordered" value={formData.profileImage} onChange={handleChange} />
                                </div>

                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Bio</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="123 Main St" name="address" className="input input-bordered" value={formData.address} onChange={handleChange} />
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4">
                                    <div className="form-control">
                                        <label className="label font-bold">
                                            <span className="label-text">City</span>
                                        </label>
                                        <input type="text" placeholder="Dhaka" name="city" className="input input-bordered" value={formData.city} onChange={handleChange} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label font-bold">
                                            <span className="label-text">Zip Code</span>
                                        </label>
                                        <input type="text" placeholder="1204" name="zipCode" className="input input-bordered" value={formData.zipCode} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-success text-white">Sign in</button>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <h4 className=" py-3 font-semibold text-base">Have an account? <Link to='/signin' className=" text-red-600 px-1">log In</Link> </h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;