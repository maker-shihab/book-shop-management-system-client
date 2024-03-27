import { FaLongArrowAltRight } from "react-icons/fa";
import { IoEllipseOutline, IoEllipseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import bannerImg from '../../assets/img/banner-img.png';
import './banner.css';


const Banner = () => {
    return (
        <div className=" bannerBg px-[2%] py-[4%]  md:py-[3%]">
            <div className=" container mx-auto">
                <div className=' flex flex-col md:flex-row items-center md:justify-between'>
                    <div className='w-full md:w-7/12 order-2 md:order-1'>
                        <div className='w-full md:w-3/4 space-y-3'>
                            <h2 className='text-[#173F5F] font-bold text-6xl pb-2'>Discover New Reads</h2>
                            <p className='text-[#173F5F pb-6 text-2xl'>Dive into our collection of captivating books. From bestsellers to hidden gems, find your next adventure, mystery, or romance waiting to be explored.</p>
                            <Link to="/books" className=' btn  btn-outline'>Browse Now <span><FaLongArrowAltRight /></span></Link>
                            <div className='flex space-x-1 pt-3'>
                                <span><IoEllipseOutline /></span>
                                <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                                <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                                <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full md:w-4/12 order-1 md:order-2'>
                        <img src={bannerImg} alt="banner" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;