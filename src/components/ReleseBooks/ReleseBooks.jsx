
import { useEffect, useState } from "react";
import { IoEllipseOutline, IoEllipseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import bookApi from "../../api/bookApi";
import { BookCard } from "../UI/BookCard/BookCard";
const ReleseBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await bookApi.getAllBooks();
                setBooks(response?.data?.data);
            } catch (error) {
                console.error('Error fetching new release books:', error);
            }
        };

        fetchBooks();
    }, []);
    return (
        <div className=' border-b-2 px-[2%] py-10'>
            <div className=" container mx-auto py-9">
                <div className=" text-center space-y-3 pb-10">
                    <h2 className='text-[#173F5F] font-bold text-3xl'>New Release Books</h2>
                    <p className=' text-[#6a6a6abb]'>1000+ books are published by different authors everyday. </p>
                    <Link to="/books" className='block text-[#ED553B]'>View all products</Link>
                </div>
                <div className='grid grid-col md:grid-cols-4 gap-6 py-10'>
                    {books.slice(0, 4).map(book => (
                        <BookCard key={book._id} book={book} />
                    ))}
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
        </div>

    );
};

export default ReleseBooks;