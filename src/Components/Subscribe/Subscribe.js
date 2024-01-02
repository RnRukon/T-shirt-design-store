import React from 'react';

const Subscribe = () => {
    return (
        <section id="contact-us" className="bg-yellow-50 py-[71px] px-5">
            <div className="max-w-[1200px] mx-auto">
                <div>
                    <h1 className=" text-center text-gray-950 text-2xl md:text-3xl font-bold font-['Montserrat'] uppercase leading-9">SUBSCRIBE
                        NOW</h1>

                    <p className=" text-center text-gray-950 text-base font-medium font-['Montserrat'] pt-5 leading-relaxed">Never
                        miss out on offers and the latest updates. Our offers are available once a week, every
                        Friday.
                    </p>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-12 gap-1  pt-[42px]">
                            <input type="email" placeholder="Email Address"
                                   className=" col-span-7 text-sm rounded border-2 border-gray-950  px-2  md:px-2"/>
                            <button type="button"
                                    className=" col-span-5 bg-orange-500  rounded border text-white text-sm md:text-base font-bold font-['Montserrat']  p-2  md:px-5 py-2">SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;