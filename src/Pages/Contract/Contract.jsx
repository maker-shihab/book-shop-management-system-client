import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contract = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to handle form submission, such as sending an email or saving to a database
        console.log(formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto py-20">
                <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 font-medium text-gray-800">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="form-input w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-800">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="form-input w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 font-medium text-gray-800">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="6"
                            className="form-textarea w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contract;