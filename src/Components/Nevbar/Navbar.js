import React from 'react';

const Navbar = () => {
    const navLink=[
        {
            title:"HOME",
            path:"/#home"
        },
        {
            title:"CUSTOM T-SHIRT",
            path:"/#custom-t-shirt"
        },
        {
            title:"PORTFOLIO",
            path:"/#portfolio"
        },
        {
            title:"CONTACT US",
            path:"/#contact-us"
        }
    ];

    const socialLink=[
        {
            title:"Facebook",
            icon:"/images/facebook.png",
            link:""
        },
        {
            title:"Twitter",
            icon:"/images/twitter.png",
            link: ""
        },
        {
            title:"Instagram",
            icon:"/images/instagram.png",
            link: ""
        }
    ]





    return (
        <nav  className="shadow flex justify-between items-center md:px-20 px-5 fixed z-10 h-[100px] w-full bg-white top-0">

                <h1 className="text-center text-gray-950 text-[30px] font-black font-['Montserrat']"><span
                    className="text-gray-950 text-3xl font-bold font-['Montserrat'] leading-9">Pod</span><span
                    className="text-orange-500 text-3xl font-bold font-['Montserrat'] leading-9">Bulk</span>
                </h1>

            <div className=" hidden lg:block">
                <div className=" flex items-center gap-5">
                    <ol className="flex items-center gap-5">
                        {
                            navLink?.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <a href={data?.path}
                                           className={`text-gray-950 text-base font-bold font-['Montserrat'] px-3  ${data?.title==="CUSTOM T-SHIRT"?"bg-orange-500 text-white rounded   py-[12px]":"hover:border-b-orange-500 hover:border-b-4 transition-all hover:transition-all "}  `}
                                        >{data?.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <ol className="flex items-center gap-3">
                        {
                            socialLink?.map((data,index) => {
                                return (
                                    <li key={index}>
                                        <a href={data?.link}>
                                            <img
                                                className="h-5"
                                                src={data?.icon}
                                                alt={data?.title}/>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>

            <div className="lg:hidden block">
                <button type="button">
                    <img src="/images/threeLine.png" alt=""/>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;