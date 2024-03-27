
const Faq = () => {
    return (
        <div className=" container mx-auto py-14 px-[2%] md:px-[0%]">
            <div className=" text-center space-y-4 md:w-6/12 mx-auto">
                <h2 className='text-[#173F5F] font-bold text-3xl'>Books Store Faqs</h2>
                <p className='text-[#393280be] leading-6 '>Jump start your book reading by quickly check through the  quickly check through quickly check through popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>
            </div>
            <div className="max-w-2xl mx-auto pt-10">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                        How can I place an order for books?
                        </div>
                        <div className="collapse-content">
                            <p>You can easily place an order through our website by browsing our collection, selecting the desired books, and proceeding to the checkout page.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What payment methods do you accept?
                        </div>
                        <div className="collapse-content">
                            <p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers, to provide flexibility for our customers.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How long does it take for orders to be delivered?
                        </div>
                        <div className="collapse-content">
                            <p>Delivery times may vary depending on your location and the shipping method chosen. Typically, orders are processed and shipped within 2 business days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;