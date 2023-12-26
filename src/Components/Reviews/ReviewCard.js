import React from 'react';


const massage="Obsessed\n" +
    "                with my new jacket design from Pod Bulk! They captured my vision perfectly,\n" +
    "                blending vibrant colors & unique details into a total stunner. Communication was\n" +
    "                A+, always open to feedback & keeping me in the loop. If you need a design\n" +
    "                genius, look no further! 10/10, recommend without a doubt!"
const ReviewCard = () => {
    return (
        <div className="review-card w-[300px] lg:w-[470px] rounded border-2 border-gray-950 p-5 ">
            <div className="flex gap-5 ">
                <div>
                    <img  src="/images/rukon.jpeg" alt=""
                         className="w-20 h-20 rounded-full "
                    />
                </div>
                <div>
                    <h1 className=" text-2xl font-bold font-['Montserrat'] capitalize">Rukon
                        Uddin</h1>
                    <div className="flex  gap-5 items-center ">
                        <p className="text-base font-medium font-['Montserrat'] leading-relaxed">United
                            States </p>
                       -------------------
                    </div>
                </div>

            </div>

            <div className="flex gap-5 items-center">
                <img src="/images/star-group.svg" alt="" className="w-[113px] h-[16.14px]"/>
                |
                <p
                    className=" text-base font-medium font-['Montserrat'] leading-relaxed">2
                    Days ago
                </p>

            </div>

            <div
                className="  text-base font-medium font-['Montserrat'] leading-relaxed">
<p>
    {massage?.slice(0,350)}...
</p>

            </div>

        </div>
    );
};

export default ReviewCard;