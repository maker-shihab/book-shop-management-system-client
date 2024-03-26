import { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BookCardTwo from "../../components/UI/BookCardTwo/BookCardTwo";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getAllbooks = async () => {
            const response = await bookApi.getAllBooks();
            if (response.data.success) {
                setBooks(response.data.data);
            }
        }
        getAllbooks();
    }, []);
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto min-h-screen py-20">
                <div className="flex gap-8">
                    <div className="w-1/4">
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
                                    <input type="radio" name="radio-1" className="radio" id="newReleased" />
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
                            <input type="checkbox" defaultChecked className="checkbox" id="inStock" name="inStock" />
                            <label htmlFor="inStock" className="cursor-pointer font-semibold select-none">In Stock</label>
                        </div>
                        <div className="rounded-lg border border-gray-300 mb-4 shadow-sm">
                            <div className="p-4 border-b border-gray-400">
                                <h2 className="card-title">Filter</h2>
                            </div>
                            <div className="py-2">
                                <h3 className="menu-title">Writers</h3>
                                <div className="px-4">
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Who shot first?</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="py-4">
                                <h3 className="menu-title">Price</h3>
                                <div className="px-4 pt-2">
                                    <input type="range" min={0} max="100" value="25" className="range" step="25" />
                                    <div className="w-full flex justify-between text-xs px-2">
                                        <span>100</span>
                                        <span>200</span>
                                        <span>300</span>
                                        <span>400</span>
                                        <span>500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
                            {
                                books.map((bookItem) => (
                                    <BookCardTwo key={bookItem.id} bookItem={bookItem} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Books;