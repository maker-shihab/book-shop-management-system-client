import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BookCard } from "../../components/UI/BookCard/BookCard";
import { useBooks } from "../../contexts/BooksContext";

const Books = () => {
    const { books, loading, error } = useBooks();
    
    const handleSubmit = async (e) => {
        console.log(e);
    }

    const uniqueWriter = new Set();

    const limitedUniqueWriters = books.reduce((acc, book) => {
        if(uniqueWriter.size < 6){
            uniqueWriter.add(book.writter);
            acc.push(book.writter);
        }
        return acc;
    }, []);

    if(loading) return <div>Loading...</div>;
    if(error) return <div>{error}</div>;

    return (
        <div>
            <Header></Header>
            <div className="container mx-auto min-h-screen py-20">
                <div className="flex gap-8">
                    <div className="w-1/4">
                        <form onSubmit={handleSubmit}>
                            <div className="rounded-lg border border-gray-300 mb-4 shadow-sm">
                                <div className="p-4 border-b border-gray-400">
                                    <h2 className="card-title">Sort</h2>
                                </div>
                                <div className="p-4 pt-6">
                                    <div className="form-control flex-row gap-2 mb-4">
                                        <input type="radio" name="radio-1" className="radio" id="bestSeller" />
                                        <label htmlFor="bestSeller" className="cursor-pointer select-none">Best Seller</label>
                                    </div>
                                    <div className="form-control flex-row gap-2 mb-4">
                                        <input type="radio" name="radio-1" defaultChecked className="radio" id="newReleased" />
                                        <label htmlFor="newReleased" className="cursor-pointer select-none">New Released</label>
                                    </div>
                                    <div className="form-control flex-row gap-2 mb-4">
                                        <input type="radio" name="radio-1" className="radio" id="priceLowToHigh" />
                                        <label htmlFor="priceLowToHigh" className="cursor-pointer select-none">Price - Low to High</label>
                                    </div>
                                    <div className="form-control flex-row gap-2 mb-4">
                                        <input type="radio" name="radio-1" className="radio" id="priceHighToLow" />
                                        <label htmlFor="priceHighToLow" className="cursor-pointer select-none">Price - High to Low</label>
                                    </div>
                                    <div className="form-control flex-row gap-2 mb-4">
                                        <input type="radio" name="radio-1" className="radio" id="discountLowToHigh" />
                                        <label htmlFor="discountLowToHigh" className="cursor-pointer select-none">Discount - Low to High</label>
                                    </div>
                                    <div className="form-control flex-row gap-2 mb-4">
                                        <input type="radio" name="radio-1" className="radio" id="discountHighToLow" />
                                        <label htmlFor="discountHighToLow" className="cursor-pointer select-none">Discount - High to Low</label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 rounded-lg border border-gray-300 flex gap-2 items-center mb-4 shadow-sm">
                                <input type="checkbox" className="checkbox" id="inStock" name="inStock" />
                                <label htmlFor="inStock" className="cursor-pointer font-semibold select-none">In Stock</label>
                            </div>
                            <div className="p-4 rounded-lg border border-gray-300 flex gap-2 items-center mb-4 shadow-sm">
                                <input type="checkbox" className="checkbox" id="donated" name="inDonated" />
                                <label htmlFor="donated" className="cursor-pointer font-semibold select-none">Donated</label>
                            </div>
                            <div className="rounded-lg border border-gray-300 mb-4 shadow-sm">
                                <div className="p-4 border-b border-gray-400">
                                    <h2 className="card-title">Filter</h2>
                                </div>
                                <div className="py-2">
                                    <h3 className="menu-title">Writers</h3>
                                    <div className="px-4">
                                        <select className="select select-bordered w-full max-w-xs">
                                            <option disabled defaultChecked>Select Base on Writer</option>
                                            {
                                                limitedUniqueWriters.map((writter, index) => (
                                                    <option key={index}>{writter}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <h3 className="menu-title">Price</h3>
                                    <div className="px-4 pt-2">
                                        <input type="range" min={0} max="2000" className="range" step="50" />
                                        <div className="w-full flex justify-between text-xs px-1">
                                            <span>50</span>
                                            <span>300</span>
                                            <span>400</span>
                                            <span>500</span>
                                            <span>1000</span>
                                            <span>2000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-3/4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
                            {
                                books.map((book) => (
                                    <BookCard key={book._id} book={book} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Books;