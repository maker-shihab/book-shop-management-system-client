
const DashAddProduct = () => {

    const handleUploadBook = e =>{
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookname.value;
        const price = form.price.value;
        const availablebook = form.bookname.value;
        const photourl = form.bookname.value;
        const bookcondition = form.bookcondition.value;
        const catagory = form.catagory.value;
        const date = form.date.value;
        const description = form.description.value;
        const newBook= {bookName, price, availablebook, photourl, bookcondition, catagory, date, description}
        console.log(newBook);

          
    }
    return (
        <div className=" bg-[#262e3bf6]  min-h-screen">
            <div>
                <h2 className=" text-white text-2xl text-center py-3">Update New Book</h2>
                <div className=" w-9/12 mx-auto"> 
                <form onSubmit={handleUploadBook} className=" space-y-3 py-3">
                    <div className=" flex gap-4">
                        <div className="form-control w-2/4">
                            <label className="label font-bold ">
                                <span className="label-text text-slate-300 ">Book Name</span>
                            </label>
                            <input type="text" placeholder="Book Name" name="bookname" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-2/4">
                            <label className="label font-bold  ">
                                <span className="label-text text-slate-300 ">Price</span>
                            </label>
                            <input type="number" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className=" flex gap-4">
                        <div className="form-control w-2/4">
                            <label className="label font-bold ">
                                <span className="label-text text-slate-300 ">Available Book</span>
                            </label>
                            <input type="number" placeholder="available book" name="availablebook" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-2/4">
                            <label className="label font-bold  ">
                                <span className="label-text text-slate-300 ">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photourl" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className=" flex gap-4">
                        <div className="form-control w-2/4">
                            <label className="label font-bold ">
                                <span className="label-text text-slate-300 ">Book Conditions</span>
                            </label>
                            <select className=" input input-bordered" name="bookcondition" id="">
                                <option value="new">New</option>
                                <option value="used">Used</option>
                            </select>
                        </div>

                        <div className="form-control w-2/4">
                            <label className="label font-bold ">
                                <span className="label-text text-slate-300 ">Book Catagory</span>
                            </label>
                            <select className=" input input-bordered" name="catagory" id="">
                                <option value="horer">Horer</option>
                                <option value="cartoon">Cartoon</option>
                                <option value="history">History</option>
                                <option value="advencer">Advancer</option>
                            </select>
                        </div>
                    </div>






                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text text-slate-300 ">Publication Date</span>
                                </label>
                                   <input type="date"name="date" className="input input-bordered " required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold ">
                                    <span className="label-text  text-slate-300 ">Description</span>
                                </label>
                                <textarea className=" rounded-md p-2" name="description" cols="10" rows="5" placeholder="description"></textarea>
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-secondary">Update</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default DashAddProduct;