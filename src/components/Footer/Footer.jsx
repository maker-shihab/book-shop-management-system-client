import { FaBlogger, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
const Footer = () => {
    return (
        <div className="bg-[#dbebfd]">
            <footer className="footer p-10 text-base-content container mx-auto">
                <aside className=" space-y-3">
                    <img className=" w-12" src={logo} alt="" />
                    <p className=" text-black">Nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat. </p>
                    <div className=" flex items-center space-x-5 text-white">
                        <span className=" text-black p-3 rounded-full"><FaFacebookF /></span>
                        <span className=" text-black p-3 rounded-full"><FaInstagram /></span>
                        <span className=" text-black p-3 rounded-full"><FaLinkedin /></span>
                        <span className=" text-black p-3 rounded-full"><FaBlogger /></span>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-black">Services</h6>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link  className="link link-hover">Design</Link>
                    <Link to="/"  className="link link-hover">Marketing</Link>
                    <Link to="/"  className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-black">Company</h6>
                    <Link to="/"  className="link link-hover">About us</Link>
                    <Link to="/"  className="link link-hover">Contact</Link>
                    <Link to="/"  className="link link-hover">Jobs</Link>
                    <Link to="/"  className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-black">Legal</h6>
                    <Link to="/"  className="link link-hover">Terms of use</Link>
                    <Link to="/"  className="link link-hover">Privacy policy</Link>
                    <Link to="/"  className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
            <aside className="pb-8 text-center">
                <p>Copyright © 2024 - All right reserved by <Link to='/' className="font-semibold hover:underline">Books Nooks</Link></p>
            </aside>
        </div>
    );
};

export default Footer;