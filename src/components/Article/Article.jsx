import { FaFacebookF, FaInstagram, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import girlOne from './../../assets/img/articla1.png';
import girlTwo from './../../assets/img/articla2.png';
import girlThree from './../../assets/img/articla3.png';
import './article.css';
const Article = () => {
    return (
        <div className=" container mx-auto py-9 px-[2%] ">
            <div>
                <p className="text-[#6a6a6abb] py-2 text-center">Read our articles</p>
            </div>
            <div className=" grid grid-cols-3 gap-6 items-center py-5">
                <div  className=" w-full divHeight bg-[#6a6a6abd]">
                </div>
                <div>
                    <h2 className='text-[#173F5F] font-bold text-3xl py-2 text-center'>Latest Articles</h2>
                </div>
                <div  className=" w-full divHeight bg-[#6a6a6abd]">
                </div>
            </div>

            <div className='grid grid-col md:grid-cols-3 gap-6'>
                
                <div className=' w-full'>
                    <img className=' w-full' src={girlOne} alt="" />
                    <div className=' border-b-2 py-3'>
                        <p>2 aug, 2021</p>
                        <h2 className=' font-semibold text-xl text-[#173F5F]'>Reading books always makes the moments happy</h2>
                    </div>
            
                    <div className=" flex justify-end items-center space-x-4 py-2">
                        <span><FaFacebookF /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                    </div> 
                </div>

                <div className=' w-full'>
                    <img className=' w-full' src={girlTwo} alt="" />
                    <div className=' border-b-2 py-3'>
                        <p>2 aug, 2021</p>
                        <h2 className=' font-semibold text-xl text-[#173F5F]'>Reading books always makes the moments happy</h2>
                    </div>
            
                    <div className=" flex justify-end items-center space-x-4 py-2">
                        <span><FaFacebookF /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                    </div> 
                </div>

                <div className=' w-full'>
                    <img className=' w-full' src={girlThree} alt="" />
                    <div className=' border-b-2 py-3'>
                        <p>2 aug, 2021</p>
                        <h2 className=' font-semibold text-xl text-[#173F5F]'>Reading books always makes the moments happy</h2>
                    </div>
            
                    <div className=" flex justify-end items-center space-x-4 py-2">
                        <span><FaFacebookF /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                    </div> 
                </div>
            </div>
            <div className=' text-center py-6'>
            <Link to="/blog" className=' btn  btn-outline'>Read all articles <span><FaLongArrowAltRight /></span></Link>
            </div>
             
        </div>
    );
};

export default Article;