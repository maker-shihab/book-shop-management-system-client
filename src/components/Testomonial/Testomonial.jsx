import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import validator from 'validator';
import subscriptionRequest from '../../services/subscription';
import bannerImg from './../../assets/img/girl.png';
import './testimonial.css';
const Testomonial = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = async () => {
        try {
            if (!email || !email.trim()) {
                toast.error('Email address is required');
                return;
            }
            if (!validator.isEmail(email)) {
                toast.error('Invalid email address');
            } else {
                await subscriptionRequest(email);
                setEmail("");
                toast.success('Thank you ✅');
            }

        } catch (error) {
            console.error('Subscription failed');
        }
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubscribe();
    };
    return (
        <div className=" bannerBg px-[2%] py-[4%]   md:py-[2%] shadow-md">
            <Toaster position='top-center' />
            <div className=" container mx-auto">
                <div className=' flex flex-col md:flex-row items-center md:justify-between'>
                    <div className='w-full md:w-8/12 order-2 md:order-1'>
                        <div className='w-full md:w-2/4 space-y-1'>
                            <div className='flex items-center gap-2'>
                                <div style={{ height: "2px", backgroundColor: "#ED553B" }} className=' w-6 h-1  bg-black'></div>
                                <p className=' text-[#ED553B]'>ebook</p>
                            </div>
                            <h2 className='text-[#173F5F] font-bold text-3xl pb-4'> Access, Read, Practice & Engage with Digital Content (eBook) </h2>
                            <p className='text-[#393280be] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <form onSubmit={handleFormSubmit}>
                                <div className="join w-full py-4">
                                    <input
                                        type="email"
                                        name="email"
                                        className='input input-bordered join-item'
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="submit" className="btn btn-neutral join-item rounded-r-xl">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=' w-full md:w-4/12 order-1 md:order-2'>
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testomonial;