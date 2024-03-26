import { FaLongArrowAltRight } from "react-icons/fa";
import { IoEllipseOutline, IoEllipseSharp } from "react-icons/io5";
import bannerImg from '../../assets/img/banner-img.png';
import './banner.css';


const Banner = () => {
    return (
        <div className=" bannerBg px-[2%] py-[4%]  md:py-[0%]">
            <div className=" container mx-auto">
                <div className=' flex flex-col md:flex-row items-center md:justify-between'>
                    <div className='w-full md:w-7/12 order-2 md:order-1'>
                        <div className='w-full md:w-2/4 space-y-3'>
                            <h2 className='text-[#173F5F] font-bold text-4xl'>Ipsum dolor Si</h2>
                            <p className='text-[#173F5F] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
                            <button className=' btn  btn-outline'>Read more <span><FaLongArrowAltRight /></span></button>
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