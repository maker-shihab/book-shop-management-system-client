import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import girlTwo from './../../assets/img/articla2.png';

const BlogCard = () => {
  return (
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

  )
}

export default BlogCard