import React from 'react';
const Pricing = () => {

    const pricings={
        datas:[
            {
                title: "BASIC",
                price: 10,
                features: [
                    "2x Different T-Shirt Designs With Typography Graphic",
                    "Graphic, Retro, Vector Typography",
                    "Custom T-Shirt Source File (PNG, EPS, SVG, JPG)",
                ]
            },
            {
                title: "STANDARD",
                price: 30,
                features: [
                    "10x Different T-Shirt Designs With Typography Graphic",
                    "Graphic, Retro, Vector Typography",
                    "Custom T-Shirt Source File (PNG, EPS, SVG, JPG)"
                ]
            },
            {
                title: "PREMIUM",
                price: 200,
                features: [
                    "100x Different T-Shirt Designs With Typography Graphic",
                    "Graphic, Retro, Vector Typography",
                    "Custom T-Shirt Source File (PNG, EPS, SVG, JPG)"
                ]
            }

        ],
        note:"If you are looking for bulk orders or long-term collaboration for your POD business, please contact" +
            " us. We have a great design team and offer reasonable prices."
    }


    return (
        <section className="max-w-[1200px] mx-auto px-5 py-16">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px]">

                    {
                        pricings?.datas?.map((data, index) => {

                            return (
                                <div key={index}
                                     className=" pricingCard rounded border-2 border-gray-950 py-10 px-[34px] flex flex-col justify-between"
                                >

                                    <div >
                                        <div>
                                            <h1 className="text-center text-gray-950 text-2xl md:text-3xl font-bold font-['Montserrat'] capitalize leading-[48px]">{data?.title}</h1>


                                            <div
                                                className=" rounded border-2 border-gray-950 text-gray-950 text-2xl md:text-3xl py-1 font-extrabold font-['Montserrat'] capitalize w-full my-[20px] flex justify-center ">
                                               <p> ${data?.price}</p>

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <ol >
                                            {
                                                data?.features?.map((feature, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="text-gray-950 text-base md:text-2xl font-medium font-['Montserrat'] leading-[33.60px] flex py-2.5">

                                                            <img src="/images/raphael_tshirt.png" alt=""
                                                                 className="w-[25px] h-[25px] "
                                                            /> <span>{feature}</span>

                                                        </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>

                                    <div className="flex justify-center ">
                                        <button
                                            className="w-[172px] h-11 rounded border-2 border-gray-950 text-center text-gray-950 text-base font-bold font-['Montserrat']">
                                            ORDER NOW
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="mt-[30px]"><i
                    className="text-orange-500 text-2xl font-bold font- leading-[38.40px]">Note:-</i><span
                    className="text-gray-950 text-base md:text-2xl font-medium font-['Montserrat'] text-justify leading-[38.40px]"> If you are looking for bulk orders or long-term collaboration for your POD business, please contact us. We have a great design team and offer reasonable prices.</span>
                </div>
            </div>
        </section>
    );
};

export default Pricing;