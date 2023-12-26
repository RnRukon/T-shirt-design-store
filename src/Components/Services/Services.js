import React from 'react';

const Services = () => {
    const servicesData=[
        "Extra Fast Delivery.",
        "Fast Communication.",
        "Best Buyer Experience.",
        "High Resolution 300 DPI T-Shirt file.",
        "Editable Source File (Ai or PSD)",
        "100% Money Back Guarantee.",
        "4500x5400px PNG Size",
        "Ai, Eps, PSD, and Png Format",
        "Print-Ready File With Transparent Bg",
        "High-quality and Professionalism Design",
        "Unlimited Revisions Until You are Satisfied.",
        "Trending Design According to Your Request"
    ]

    return (
        <section id="custom-t-shirt">
            <div className="container mx-auto  px-5">
                <div className="flex justify-center">
                    <div className="max-w-[777px] text-center">
                        <h1 className=" text-gray-950 text-2xl md:text-3xl font-bold font-['Montserrat'] uppercase leading-[57.60px]">CUSTOM T-SHIRT</h1>
                        <p
                            className="pt-5 text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">Searching for that perfect T-shirt to rock on Amazon, Etsy, Shopify, and more? Look no further! We specialize in creating custom, awesome T-shirt designs tailored to your ideas, or we can provide our own.
                        </p>
                    </div>
                </div>
            </div>


            <div className="pt-10 bg-yellow-50 mt-10  px-5">
                <div className=" container  mx-auto">
                    <div className="flex justify-center pt-5">
                        <h1
                            className="text-center text-orange-500 text-2xl md:text-3xl font-semibold font-['Montserrat'] uppercase md:leading-[48px]">My
                            services details and you will get
                        </h1>
                    </div>

                    <div className="py-10">
                        <ol className="grid grid-cols-1 md:grid-cols-2 ">
                            {
                                servicesData?.map((data, index) => {
                                    return (
                                        <li key={index}
                                            className="text-gray-950 text-lg md:text-2xl font-medium font-['Montserrat'] leading-8 md:leading-[52px] "
                                        >
                                            <p className="flex gap-2 items-start sm:items-center "><img className="w-[25px] h-[25px]" src="/images/raphael_tshirt.png" alt=""/> {data}</p>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;