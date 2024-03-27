import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import bookApi from "../../../api/bookApi";
import useAuth from "../../../hooks/useAuth";

const DashAddProduct = () => {
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    const handleUploadBook = async (e) => {
        e.preventDefault();
        const author = userInfo._id;
        const form = e.target;
        const isDonated = form.isDonated.checked;
        const title = form.title.value;
        const writter = form.writter.value;
        const inStock = form.inStock.value;
        const price = form.price.value;
        const publicCationDate = form.publicCationDate.value;
        const bookCover = form.bookCover.value;
        const bookCondition = form.bookCondition.value;
        const category = form.category.value;
        const description = form.description.value;

        const newBook = { author, isDonated, title, writter, inStock, price, bookCondition, publicCationDate, bookCover, category, description }
        try {
            const response = await bookApi.addBook(newBook);
            const result = response?.data.success;
            if(result){
                toast.success("Book Created successfully");
                navigate('/books/all');
            }
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className=" bg-[#262e3bf6]  min-h-screen">
            <div>
                <h2 className=" text-white text-2xl text-center py-3">Add New Book</h2>
                <div className=" w-9/12 mx-auto">
                    <form onSubmit={handleUploadBook} className=" space-y-3 py-3">
                        <div className="form-control w-1/4 text-center">
                            <label className="label font-bold" htmlFor="isDonated">
                                <span className="label-text text-slate-300">Is it Donated</span>
                            </label>
                            <input type="checkbox" name="isDonated" className="checkbox checkbox-success checkbox-md" id="isDonated" />
                        </div>
                        <div className=" flex gap-4">
                            <div className="form-control w-2/4">
                                <label className="label font-bold ">
                                    <span className="label-text text-slate-300 ">Book Title</span>
                                </label>
                                <input type="text" placeholder="Book Title" name="title" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-2/4">
                                <label className="label font-bold ">
                                    <span className="label-text text-slate-300">Book Writter Name</span>
                                </label>
                                <input type="text" placeholder="Book Writter" name="writter" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className=" flex gap-4">
                            <div className="form-control w-2/4">
                                <label className="label font-bold ">
                                    <span className="label-text text-slate-300 ">Book Stocks</span>
                                </label>
                                <input type="number" placeholder="20" name="inStock" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-2/4">
                                <label className="label font-bold  ">
                                    <span className="label-text text-slate-300">Price</span>
                                </label>
                                <input type="number" placeholder="450" name="price" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="form-control w-2/4">
                                <label className="label font-bold ">
                                    <span className="label-text text-slate-300 ">Book Conditions</span>
                                </label>
                                <select className=" input input-bordered" name="bookCondition" id="">
                                    <option value="New">New</option>
                                    <option value="SecondHand">Used</option>
                                </select>
                            </div>

                            <div className="form-control w-2/4">
                                <label className="label font-bold ">
                                    <span className="label-text text-slate-300 ">Book Catagory</span>
                                </label>
                                <select className=" input input-bordered" name="category" id="">
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Science Fiction">Science Fiction</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="Mystery">Mystery</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Romance">Romance</option>
                                    <option value="History">History</option>
                                </select>
                            </div>
                        </div>
                        <div className="gap-4 grid grid-cols-2">
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text text-slate-300 ">Publication Date</span>
                                </label>
                                <input type="date" name="publicCationDate" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold  ">
                                    <span className="label-text text-slate-300 ">Book Cover URL</span>
                                </label>
                                <input type="text" placeholder="Book Cover URL" name="bookCover" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control pb-8">
                            <label className="label font-bold ">
                                <span className="label-text  text-slate-300 ">Description</span>
                            </label>
                            <textarea className=" rounded-md p-2" name="description" cols="10" rows="5" placeholder="Description"></textarea>
                        </div>

                        <div className="form-control">
                            <button type="submit" className="btn btn-success text-white">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashAddProduct;