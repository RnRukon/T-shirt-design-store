import React from 'react';
import Marquee from "react-fast-marquee";
const OutTeam = () => {
    const teams=[
        {
            name:"Abir Chowdhury",
            image:"/TeamMember/Abir_Chowdhury.jpg",
            position:"Professional Graphic Designer"
        },
        {
            name:"Rubel Ahamed",
            image:"/TeamMember/Rubel_Ahamed.jpg",
            position:"POD Expert Designer"
        },
        {
            name:"Onima Islam",
            image:"/TeamMember/Onima_Islam.jpg",
            position:"POD Expert Designer"
        },
        {
            name:"Abbas Ahmed Shamim",
            image:"/TeamMember/AbbasAhmedShamim.jpg",
            position:"Young Graphic Designer"
        },
        {
            name:"Nadia Islam",
            image:"/TeamMember/NadiaIslam.jpg",
            position:"Content Writer & SEO Expert"
        },
        {
            name:"Rukon Uddin",
            image:"/TeamMember/RukonUddin.jpeg",
            position:"Professional Web Developeryarn"
        },
    ]
    return (
        <section>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-center">
                    <div className="max-w-[770px] text-center px-5">
                        <h1 className=" text-gray-950 text-2xl md:text-[64px] font-bold font-['Montserrat'] uppercase leading-[57.60px]">MEET
                            OUR TEAM</h1>
                        <p
                            className="pt-5 text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">We’re
                            a growing team of graphic design experts and thought leaders - full of personality minus the
                            ego.
                            We’re the wearer of many hats dedicated to helping companies like your grow.
                        </p>
                    </div>
                </div>


                <Marquee
                    speed={150}
                    className=" py-16  ">
                    {
                        teams.map(team=>{
                            return (
                                <div
                                    className="rounded border-2 md:px-5 border-gray-950 p-5 md:p-10 w-[230px]  md:w-[370px] mx-3 ">
                                    <div className="-mt-12 md:-mt-16 flex justify-center">
                                        <img className="w-full h-full object-contain rounded" src={team.image} alt={team.name}/>
                                    </div>
                                    <div>
                                        <h4 className="text-center pt-[30px] text-gray-950 md:text-2xl font-bold font-['Montserrat'] capitalize leading-[28.80px]">{team.name}</h4>
                                        <p className="text-center pt-2 text-orange-500 text-sm md:text-base font-medium font-['Montserrat'] md:leading-relaxed">{team.position} </p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </Marquee>
            </div>
        </section>
    );
};

export default OutTeam;