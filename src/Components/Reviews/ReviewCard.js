import React from 'react';

const ReviewCard = () => {
    return (
        <div className=" w-full  h-full  rounded border-2 border-gray-950 p-5">
            <div className="flex gap-5 ">
                <div>
                    <img src="/images/rukon.jpeg" alt=""
                         className="w-20 h-20 rounded-full"
                    />
                </div>
                <div>
                    <h1 className="text-gray-950 text-2xl font-bold font-['Montserrat'] capitalize">Rukon
                        Uddin</h1>
                    <div className="flex  gap-5 items-center ">
                        <p className="text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">United
                            States </p>
                        <img
                            src="/images/Line-1.png" alt="" className="w-[80px] h-[2px]"/>
                    </div>
                </div>

            </div>

            <div className="flex gap-5 items-center">
                <img src="/images/star-group.svg" alt="" className="w-[113px] h-[16.14px]"/>
                <img src="/images/Line-2.png" alt=""/>
                <p
                    className="text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">2
                    Days ago
                </p>

            </div>

            <div
                className=" text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">Obsessed
                with my new jacket design from Pod Bulk! They captured my vision perfectly,
                blending vibrant colors & unique details into a total stunner. Communication was
                A+, always open to feedback & keeping me in the loop. If you need a design
                genius, look no further! 10/10, recommend without a doubt!
            </div>

        </div>
    );
};

export default ReviewCard;