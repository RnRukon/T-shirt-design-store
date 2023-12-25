import React from 'react';

const Subscribe = () => {
    return (
        <section className="bg-yellow-50 py-[71px]">
            <div className="container mx-auto">
                <div className=" mx-w-[485px]">
                    <h1 className=" text-center text-gray-950 text-3xl font-bold font-['Montserrat'] uppercase leading-9">SUBSCRIBE
                        NOW</h1>

                    <p className=" text-center text-gray-950 text-base font-medium font-['Montserrat'] pt-5 leading-relaxed">Never
                        miss out on offers and the latest updates. Our offers<br/>are available once a week, every
                        Friday.
                    </p>

                    <div className="flex justify-center">
                        <div className="flex gap-5  pt-[42px]">
                            <input type="email" placeholder="Email Address"
                                   className=" rounded border-2 border-gray-950  w-[315px] h-11 px-5"/>
                            <button type="button"
                                    className="bg-orange-500 rounded border text-white text-base font-bold font-['Montserrat'] w-[150px] h-11  px-5 py-1">SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;