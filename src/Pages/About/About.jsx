import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto min-h-screen py-20">
                <div className="text-center max-w-2xl mx-auto pb-10">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    {/* Dummy content */}
                    <p>
                        We are the students of <span className="font-semibold">European University of Bangladesh</span>, working on an <span className="font-semibold">Advanced OOP</span> project. Our course teacher is <span className="font-semibold">Tahfimuzzaman</span>, who is a Lecturer at the university. This project is created for educational purposes, aiming to develop practical skills in object-oriented programming. The project focuses on the real-life application of book trading, including <span className="font-semibold">buying, selling, and donation.</span>
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                        <div></div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://eub.edu.bd/wp-content/uploads/2023/12/MD-TAHFIMUZZAMAN.jpeg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Tahfimuzzaman</h2>
                                <h4 className=""><span className="font-semibold">Position:</span> Lecturer</h4>
                                <p>Click the button to watch on Jetflix app.</p>
                                {/* <h4 className=""><span className="font-semibold">Email:</span><Link to="/about">md.tahfimuzzaman@g.bracu.ac.bd</Link></h4> */}
                                <div className="card-actions justify-end">
                                    <button className="btn">View Profile</button>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold my-4">Our Team</h2>
                    {/* Team section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                        {/* Team member card 1 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://i.ibb.co/2sqRVMm/profile.png" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Maker Shihab</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">View Profile</button>
                                </div>
                            </div>
                        </div>

                        {/* Team member card 2 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://i.ibb.co/Hp1F9cq/350114412-817067836018364-5485198509355432945-n.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Tariful Islam</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn ">View Profile</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://i.ibb.co/GTgCQgW/Whats-App-Image-2024-03-24-at-05-31-06-8e49c96b.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Nizam Ohahed</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn ">View Profile</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://i.ibb.co/XXRjhST/JUBLI.png" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Jubli Rahman</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn ">View Profile</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://i.ibb.co/CzffRwC/Whats-App-Image-2024-03-24-at-05-27-27-843f54ae.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Rejouanul Kabir</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn ">View Profile</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://i.ibb.co/vZ9jrfX/Whats-App-Image-2024-03-24-at-11-13-05-7c736ecc.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Sultana Kamrunnahar</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn ">View Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;