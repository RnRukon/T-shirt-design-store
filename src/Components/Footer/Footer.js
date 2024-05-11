import React from 'react';
import {socialLink} from "../Nevbar/Navbar";
import { Link} from 'react-router-dom';

const Footer = () => {

    const footerData={
                            footerLink:[
                                {
                                title:"Our Services",
                                categories:[
                                    {
                                        name:"T-shirt",
                                        path:"/#portfolio",
                                        link:"a"
                                    },{
                                        name:"POD Item",
                                        path:"/",
                                        link:"a"
                                    },{
                                        name:"Brand Identity",
                                        path:"/",
                                        link:"a"
                                    },
                                ]
                            },
                                {
                                    title:"Help",
                                    categories:[
                                        {
                                            name:"Help Center",
                                            path:"/",
                                            link:"a"
                                        },{
                                            name:"Refund Policy",
                                            path:"/",
                                            link:"a"
                                        },{
                                            name:"Vector Information",
                                            path:"/",
                                            link:"a"
                                        },
                                    ]
                                },{
                                    title:"About Us",
                                    categories:[
                                        {
                                            name:"Contact Us",
                                            path:"/#contact-us",
                                            link:"a"
                                        },{
                                            name:"Privacy Policy",
                                            path:"/privacy-policy",
                                            link:"route"
                                        },{
                                            name:"Terms & Conditions",
                                            path:"/",
                                            link:"a"
                                        },
                                    ]
                                },
                            ]
    }

    return (
        <footer>
            <div className="max-w-[1200px] mx-auto px-5 py-[120px]">
                <div className="grid md:grid-cols-12">
                    <div className="md:col-span-4">
                        <div className="flex items-center">
                        <img className="w-40" src="/logo192.png" alt="pod bulk" />
                        </div>

                        <div>
                            <div className="py-[20px]">
                                <ol className="flex items-center gap-3">
                                    {
                                        socialLink?.map((data, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={data?.link}>
                                                        <img
                                                            className="h-[30px]"
                                                            src={data?.icon}
                                                            alt={data?.title}/>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                            <p className=" text-gray-950 text-lg font-normal font-['Montserrat'] leading-7">©
                                {new Date().getFullYear()} Pod Bulk. All rights reserved.
                            </p>
                        </div>
                    </div>


                    <div className="md:col-span-8">


                        <div>

                            <ol className="grid grid-cols-2 md:grid-cols-3">
                                {
                                    footerData?.footerLink?.map((data,index) => {
                                        return (
                                            <li key={index}>
                                                <div>
                                                    <h3 className="text-gray-950 text-base font-medium font-['Montserrat'] leading-7 pt-10 md:pt-0">{data?.title}</h3>

                                                    <div className="pt-5 md:pt-[44px]">
                                                        <ol>
                                                            {
                                                                data?.categories?.map((data,index) => {

                                                                    return (
                                                                        <li key={index}>
                                                                            {
data?.link==="a"?

<a
                                                                                className=" text-gray-950 text-opacity-50 text-[15.17px] font-normal font-['Poppins'] leading-snug"
                                                                                href={data?.path}>
                                                                                {data?.name}
                                                                            </a>:



<Link
                                                                                className=" text-gray-950 text-opacity-50 text-[15.17px] font-normal font-['Poppins'] leading-snug"
                                                                                to={data?.path}>
                                                                                {data?.name}
                                                                            </Link>
                                                                            }
                                                                            
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ol>
                                                    </div>
                                                </div>

                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;