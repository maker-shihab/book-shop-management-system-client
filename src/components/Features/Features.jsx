import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaLongArrowAltRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import bookApi from "../../api/bookApi";
const Features = () => {
    const [featuredBooks, setFeaturedBooks] = useState([]);
    useEffect(() => {
        const fetchFeaturedBooks = async () => {
            try {
                const featuresBook = await bookApi.getFeaturedBook();
                setFeaturedBooks(featuresBook?.data?.data);
            } catch (error) {
                toast.error("Error fetching featured book");
                console.error(error);
            }
        }
        fetchFeaturedBooks();
    }, []);
    return (
        <div className=" container mx-auto py-9 px-[2%] ">
            {
                featuredBooks && (
                    <div className=" flex flex-col md:flex-row items-center justify-between">
                        <div className=" w-full md:w-5/12">
                            <img className=" w-full md:w-10/12" src={featuredBooks[0]?.bookCover} alt="bookCover" />
                        </div>
                        <div className="w-full md:w-7/12 space-y-5 md:pr-[10%]">
                            <p className="text-[#6a6a6abb]  font-semibold  text-xl">Featured Book of the week</p>
                            <h4 className="text-[#173F5F] font-bold text-4xl">{featuredBooks[0]?.title}</h4>
                            <div className="rating text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                     
                            <p className="text-[#6a6a6abb] py-2 text-xl ">Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>
                            <div className=" py-11">
                                <Link to="/books" className=' btn  btn-outline '>View more <span><FaLongArrowAltRight /></span></Link>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Features;