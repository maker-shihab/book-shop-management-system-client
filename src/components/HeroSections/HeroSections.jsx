import './heroSection.css'
import heroImg from "./../../assets/img/heroImg.png"
const HeroSections = () => {
    return (
        <div className=" py-9 px-[2%] " >
            <div className="flex flex-col md:flex-row items-center  heroBg ">
                <div className=" w-full md:w-5/12">
                    <img className=' w-full' src={heroImg} alt="" />
                </div>
                <div className=" w-full md:w-7/12 px-[5%] space-y-4 py-3">
                    <h2 className='text-[#173F5F] font-bold text-3xl py-2'>Get over a 100 free books</h2>
                    <p className='text-[#393280be] leading-6 md:pr-[25%]'>Lorem ipsum dolor sit amet consectetur, Sunt officia quae assumenda quibusdam sint nemo harum ea Sunt officia quae assumenda quibusdam sint nemo harum ea adipisicing elit. Sunt officia quae assumenda quibusdam sint nemo harum ea  Sunt officia quae assumenda quibusdam sint nemo harum ea Sunt officia quae assumenda quibusdam sint nemo harum ea</p>

                </div>

            </div>
        </div>
    );
};

export default HeroSections;