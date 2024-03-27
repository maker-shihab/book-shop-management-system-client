import { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BookCardTwo from "../UI/BookCardTwo/BookCardTwo";

const Profile = () => {
  const { userInfo } = useAuth();
  const authorId = userInfo?._id;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getAllBooksBySeller(authorId);
        setBooks(response?.data?.data);
      } catch (error) {
        console.error('Error fetching new release books:', error);
      }
    };
    fetchBooks();
  }, [authorId]);
  return (
    <div className="">
      <Header />
      <div className="container mx-auto mt-8 py-20">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-center">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={userInfo?.profileImage}
                alt={userInfo?.firstName}
              />
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-center capitalize">{`${userInfo?.firstName} ${userInfo?.lastName}`}</h2>
            <p className="mt-2 text-sm text-gray-600 text-center">{userInfo?.email}</p>
            <div className="mt-2">
              <p className="mt-2 text-gray-600 text-center max-w-md mx-auto pb-4">{userInfo?.bio}</p>
            </div>
            <div>

            </div>
            <div className="mt-2">
              <p className="mt-2 text-gray-600 text-center">
                {userInfo?.address},
              </p>
              <p className="mt-2 text-gray-600 text-center">
                {userInfo?.city}, / {userInfo?.state}, / {userInfo?.zipCode}
              </p>
            </div>
          </div>
        </div>
        {
          (userInfo?.role === "seller" || userInfo?.role === "donar") && (
            <div className="pt-10">
              <h2 className="text-black font-semibold text-4xl p-6">My Books 📚</h2>
              <div>
                <div className='grid grid-col md:grid-cols-4 gap-6 py-10'>
                  {books?.map(book => (
                    <BookCardTwo key={book._id} book={book} />
                  ))}
                </div>
              </div>
            </div>
          )
        }
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
