import React from 'react';

const Counter = () => {

    const counterData=[
        {
            number:560,
            title:"CLIENTS",
            icon:"/images/people.png"
        },{
            number:900,
            title:"COMPLETE PROJECT",
            icon:"/images/project-icon.png"
        },{
            number:6,
            title:"TEAM MEMBER",
            icon:"/images/team-icon.png"
        },{
            number:5,
            title:"YEARS EXPERIENCE",
            icon:"/images/experience-icon.png"
        },
    ]
    return (
        <section className="w-full bg-yellow-50">

            <div className="max-w-[1200px] mx-auto py-16 px-5  md:px-0">
                <div className="grid md:grid-cols-4 grid-cols-2   gap-8 ">

                    {
                        counterData?.map((data,index)=>{
                            return (
                                <div key={index} className="flex justify-center">
                                    <div
                                        className="relative w-[206px] h-[151px] flex justify-center items-center rounded border-2 border-dashed border-gray-950">
                                        <div>
                                            <div className=" flex justify-center ">
                                                <div
                                                    className="-mt-16 w-[70px] h-[70px] bg-gray-950 rounded flex justify-center items-center">
                                                    <img src={data?.icon} alt=""/>
                                                </div>
                                            </div>
                                            <h1 className="text-center text-gray-950 text-[40px] font-extrabold font-['Montserrat']">{data?.number}+
                                            </h1>
                                            <p className="text-center text-gray-950 text-base font-bold font-['Montserrat']">{data?.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    );
};

export default Counter;