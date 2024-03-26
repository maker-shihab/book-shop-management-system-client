import { FaLongArrowAltRight } from "react-icons/fa";
import { IoEllipseOutline, IoEllipseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import newsImg from './../../assets/img/newleter-img.png';
import './newsleter.css';

const Newleter = () => {
    return (
        <div>        
            <div className="newsBg container mx-auto py-6 px-[2%] md:px-[0%]">
                <div className=" flex flex-col md:flex-row items-center">
                    <div className=" w-full md:w-8/12 py-3">
                        <div className=' w-full md:w-5/12 md:ml-[40%]  text-center  space-y-3  py-3'>
                            <h2 className='text-[#173F5F] font-bold text-3xl'>New Release Books</h2>
                            <p className='text-[#393280be] leading-6 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt officia quae assumenda quibusdam sint nemo harum ea</p>
                            <Link to="/books" className=' btn  btn-outline'>Read more <span><FaLongArrowAltRight /></span></Link>
                        </div>
                    </div>
                    <div className=" w-full md:w-4/12">
                        <img src={newsImg} alt="" />
                    </div>
                </div>
            </div>

            <div className=' flex justify-center'>
                    <div className='flex space-x-1 pt-3'>
                        <span><IoEllipseOutline /></span>
                        <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                        <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                        <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                    </div>
                </div>
        </div>

    );
};

export default Newleter;