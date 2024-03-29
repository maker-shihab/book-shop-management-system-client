import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import authApi from "../../api/authApi";
import sidePhoto from "../../assets/img/typeing.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
    const navigate = useNavigate();
    const { handleLoginSuccess, isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);


    const [identifier, setIdentifier] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await authApi.login({ identifier, password }, {
                withCredentials: true
            });

            if (response?.data?.success) {
                handleLoginSuccess({ accessToken: response?.data?.data.accessToken });
                navigate('/');
                toast.success('User login successfull!');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Header />
            <div className="">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="container mx-auto min-h-screen py-9 px-[10%]">
                    <div className=" flex flex-col md:flex-row  justify-between items-center">
                        <div className=" hidden md:block  w-full md:w-2/4 pr-12" >
                            <img className="  lg:ml-[10%] " src={sidePhoto} alt="thumb" />
                        </div>
                        <div className=" w-full md:w-2/4 p-12 rounded-md border">
                            <h1 className="text-4xl font-bold py-6 text-center">Login now!</h1>

                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Email or UserName:</span>
                                    </label>
                                    <input type="text" placeholder="Email or UserName" name="text" className="input input-bordered" required onChange={(e) => setIdentifier(e.target.value)} />
                                </div>

                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required onChange={(e) => setPassword(e.target.value)} />
                                    <label className="label">
                                        <p className="label-text-alt link link-hover">Forgot password?</p>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-success text-white">Login</button>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <h4 className=" py-3 font-semibold text-base">create an account?  <Link to='/signup' className=" text-red-600 px-1">Sign Up</Link> </h4>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;