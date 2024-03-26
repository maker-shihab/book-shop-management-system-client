import { Link, useNavigate } from 'react-router-dom';
import './cards.css';
const Cards = () => {
    const navigate = useNavigate();
    const handleRouteChange = () => {
        navigate('/books');
    }
    return (
        <div className=" py-12 grid grid-col md:grid-cols-3 gap-6 container mx-auto px-[2%] ">
            
            <div onClick={handleRouteChange} className="cursor-pointer w-full h-72  card-one rounded-md relative">
                <div className='absolute w-full bottom-9'>
                    <h2 className='  text-white text-2xl font-bold  text-center '>Higher Education</h2>
                </div>
            </div>

            <div onClick={handleRouteChange} className=" w-full h-72  border border-[#6a6a6a] rounded-md relative">
                <div className='absolute w-full bottom-12'>
                    <h2 className='  text-[#173F5F] text-4xl font-bold  text-center px-[4%]'>Explore our Top Categories</h2>
                    <div className='text-center py-5 mt-3'>
                        <Link to="/books" className=' bg-[#ED553B] py-3 px-6 rounded-md text-white font-bold text-center'>View All</Link>
                    </div>
                </div>
            </div>

            <div onClick={handleRouteChange} className="cursor-pointer w-full h-72  card-three rounded-md relative">
                <div className='absolute w-full bottom-9'>
                    <h2 className='  text-white text-2xl font-bold  text-center '>Management Books</h2>
                </div>
            </div>

            <div onClick={handleRouteChange} className="cursor-pointer w-full h-72  card-four rounded-md relative">
                <div className='absolute w-full bottom-9'>
                    <h2 className='  text-white text-2xl font-bold  text-center '>Finance Books</h2>
                </div>
            </div>

            <div onClick={handleRouteChange} className="cursor-pointer w-full h-72  card-five rounded-md relative">
                <div className='absolute w-full bottom-9'>
                    <h2 className='  text-white text-2xl font-bold  text-center '>Engineering Books</h2>
                </div>
            </div>

            <div onClick={handleRouteChange} className="cursor-pointer w-full h-72  card-six rounded-md relative">
                <div className='absolute w-full bottom-9'>
                    <h2 className='  text-white text-2xl font-bold  text-center '>Commerce books</h2>
                </div>
            </div>
            
        </div>
    );
};

export default Cards;