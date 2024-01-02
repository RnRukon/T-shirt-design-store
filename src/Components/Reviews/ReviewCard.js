import React from 'react';


const massage="Obsessed\n" +
    "                with my new jacket design from Pod Bulk! They captured my vision perfectly,\n" +
    "                blending vibrant colors & unique details into a total stunner. Communication was\n" +
    "                A+, always open to feedback & keeping me in the loop. If you need a design\n" +
    "                genius, look no further! 10/10, recommend without a doubt!"
const ReviewCard = () => {
    return (
        <div className="review-card w-[300px] lg:w-[370px] rounded border-2 border-gray-950 p-3 ">
            <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-3">
                    <img  src="/images/rukon.jpeg" alt=""
                         className="rounded-full object-cover"
                    />
                </div>
                <div className="col-span-9">
                    <h1 className=" text-lg lg:text-2xl font-bold font-['Montserrat'] capitalize">Rukon
                        Uddin</h1>
                    <div className="flex  gap-5 items-center ">
                        <p className="text-base font-medium font-['Montserrat'] leading-relaxed">United States </p>
                    </div>

                    <div >
                        <div className="flex  gap-2 items-center">
                            <img src="/images/star-group.svg" className="h-4" alt=""/>

                            <p
                                className=" text-sm font-medium font-['Montserrat'] leading-relaxed"> | 2
                                Days ago
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div
                className="  text-base font-medium font-['Montserrat'] leading-relaxed pt-3">
                <p>
                    {massage?.slice(0, 350)}...
                </p>

            </div>

        </div>
    );
};

export default ReviewCard;