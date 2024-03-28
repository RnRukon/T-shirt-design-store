import React from 'react';
import Marquee from "react-fast-marquee";

const Banner = () => {
    const banners=["/images/banner1.jpg","/images/banner2.jpg","/images/banner1.jpg","/images/banner2.jpg","/images/banner1.jpg","/images/banner2.jpg","/images/banner1.jpg","/images/banner2.jpg"];

    return (
        <div  className="pt-[95px]">
            <Marquee>
                {
                    banners.map((banner,index)=>{
                        return (
                            <img key={index} className="max-h-[30vh] md:max-h-[40vh] lg:max-h-[50vh] xl:max-h-[60vh]" src={banner} alt=""/>
                        )
                    })
                }

            </Marquee>
        </div>
    );
};

export default Banner;