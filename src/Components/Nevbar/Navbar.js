import React from 'react';

const Navbar = () => {

    const navLink=[
        {
            title:"HOME",
            path:"/"
        },
        {
            title:"CUSTOM T-SHIRT",
            path:"/custom-t-shirt"
        },
        {
            title:"PORTFOLIO",
            path:"/portfolio"
        },
        {
            title:"CONTACT US",
            path:"/contact-us"
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
        <nav className=" bg-white shadow flex justify-between items-center md:px-20 px-5">
            <div className="text-center text-gray-950 text-[64px] font-black font-['Montserrat']">PB</div>

            <div className=" hidden lg:block">
                <div className=" flex items-center gap-5">
                    <ol className="flex items-center gap-5">
                        {
                            navLink?.map((data,index) => {
                                return (
                                    <li key={index}>
                                        <a href={data?.path}
                                           className="text-gray-950 text-base font-bold font-['Montserrat'] rounded px-[15px] py-[12px] hover:bg-orange-500 hover:text-white transition hover:transition "
                                        >{data?.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <ol className="flex items-center gap-2">
                        {
                            socialLink?.map((data,index) => {
                                return (
                                    <li key={index}>
                                        <a href={data?.link}>
                                            <img
                                                src={data?.icon}
                                                height={30}
                                                width={30}
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
                <a href="/">
                    <img src="/images/threeLine.png" alt=""/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;