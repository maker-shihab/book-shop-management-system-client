import { FaBlogger, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content container mx-auto">
            <aside className=" space-y-3">
                <img className=" w-12" src={logo} alt="" />
                <p className=" text-[#6a6a6a]">Nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat. </p>
                <div className=" flex items-center space-x-5 text-white">
                        <span className=" bg-[#ED553B] p-3 rounded-full"><FaFacebookF /></span>
                        <span className=" bg-[#ED553B] p-3 rounded-full"><FaInstagram /></span>
                        <span className=" bg-[#ED553B] p-3 rounded-full"><FaLinkedin /></span>
                        <span className=" bg-[#eb4c30] p-3 rounded-full"><FaBlogger /></span>
                    </div> 
            </aside> 
            <nav>
                <h6 className="footer-title text-[#ED553B]">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-[#ED553B]">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-[#ED553B]">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;