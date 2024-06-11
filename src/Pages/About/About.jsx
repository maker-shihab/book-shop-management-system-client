import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto min-h-screen py-20">
                <div className="text-center max-w-2xl mx-auto pb-10">
                    <h1 className="text-4xl font-bold mb-4 pb-4">About Us</h1>
                    {/* Dummy content */}
                    <p className="text-xl">
                        We are the students of <span className="font-semibold">European University of Bangladesh</span>, working on an <span className="font-semibold">Advanced OOP</span> project. Our course teacher is <span className="font-semibold">Tahfimuzzaman</span>, who is a Lecturer at the university. This project is created for educational purposes, aiming to develop practical skills in object-oriented programming. The project focuses on the real-life application of book trading, including <span className="font-semibold">buying, selling, and donation.</span>
                    </p>
                </div>
                <div className="pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                        <div></div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="max-w-60 w-full h-full"><img className="w-full h-full" src="https://eub.edu.bd/wp-content/uploads/2023/12/MD-TAHFIMUZZAMAN.jpeg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Tahfimuzzaman</h2>
                                <h4 className=""><span className="font-semibold">Position:</span> Lecturer</h4>
                                <span className="font-semibold text-sm pt-2">European University of Bangladesh</span> 
                                <p className="text-sm"><span className="font-semibold">Email:</span><br /> <small>md.tahfimuzzaman@g.bracu.ac.bd</small></p>
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
                                <p className=""><span className="font-semibold">ID:</span> 220322055</p>
                                <span className="font-semibold text-sm pt-2">European University of Bangladesh</span> 
                                <p className="text-sm"><span className="font-semibold">Email:</span><br /> <small>shihabud696@gmail.com</small></p>
                                <div className="card-actions justify-end">
                                    <button className="btn">View Profile</button>
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