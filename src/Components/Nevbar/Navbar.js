import React, {useState} from 'react';

const Navbar = () => {
    const [mobile,setMobile]=useState(false);

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


console.log(mobile)


    return (
        <nav
            className={`shadow flex  ${!mobile ? "   justify-between   flex-col" : "h-screen lg:h-fit py-[30px]" +
                " flex-row " +
                " flex-col"}  py-[30px]  lg:px-20 px-5 fixed z-10  w-full bg-white top-0`}>

            <div className="flex justify-between">
                <h1 className=" text-gray-950 text-[30px] font-black font-['Montserrat']"><span
                    className="text-gray-950 text-3xl font-bold font-['Montserrat'] leading-9">Pod</span><span
                    className="text-orange-500 text-3xl font-bold font-['Montserrat'] leading-9">Bulk</span>
                </h1>

                <div className="lg:hidden block">
                    <button
                        onClick={() => setMobile(!mobile)}
                        type="button"
                    >
                        <img className="h-7" src={`${!mobile ? "/images/threeLine.png" : "/images/close.png"}`} alt=""/>
                    </button>
                </div>

                <div className={`hidden lg:block  text-center pt-20 lg:pt-0`}>
                    <div className={` flex items-center gap-5`}>
                        <ol className={`flex ${!mobile ? "flex-row items-center" : "flex-col"}   gap-5`}>
                            {
                                navLink?.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={data?.path}
                                               className={`text-gray-950 text-base font-bold font-['Montserrat'] px-3  block ${data?.title === "CUSTOM T-SHIRT" ? "bg-orange-500 text-white rounded   py-[12px]" : "hover:border-b-orange-500 hover:border-b-4 transition-all hover:transition-all "}  `}
                                            >{data?.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                        <div className="flex justify-center pt-20 lg:pt-0">
                            <ol className="flex items-center gap-3 ">
                                {
                                    socialLink?.map((data, index) => {
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
                </div>
            </div>


            <div className={`${!mobile ? "hidden lg:hidden" : "block lg:hidden"}  text-center pt-20 lg:pt-0`}>
                <div className={`${!mobile ? "flex" : "flex-none"} items-center gap-5 max-w-[300px] mx-auto`}>
                    <ol className={`flex ${!mobile ? "flex-row items-center" : "flex-col"}   gap-5`}>
                        {
                            navLink?.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <a href={data?.path}
                                           className={`text-gray-950 text-base font-bold font-['Montserrat'] px-3  block ${data?.title === "CUSTOM T-SHIRT" ? "bg-orange-500 text-white rounded   py-[12px]" : "hover:border-b-orange-500 hover:border-b-4 transition-all hover:transition-all "}  `}
                                        >{data?.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <div className="flex justify-center pt-20 lg:pt-0">
                        <ol className="flex items-center gap-3 ">
                            {
                                socialLink?.map((data, index) => {
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
            </div>

        </nav>
    );
};

export default Navbar;