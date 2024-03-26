
const Faq = () => {
    return (
        <div className=" container mx-auto py-9 px-[2%] md:px-[0%]">
            <div className=" text-center space-y-4 md:w-6/12 mx-auto">
                <h2 className='text-[#173F5F] font-bold text-3xl'>Books Store Faqs</h2>
                <p className='text-[#393280be] leading-6 '>Jump start your book reading by quickly check through the  quickly check through quickly check through popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>
            </div>
            <div className="max-w-2xl mx-auto pt-10">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;