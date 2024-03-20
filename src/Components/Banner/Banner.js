import React from 'react';
import Marquee from "react-fast-marquee";

const Banner = () => {
    const banners=[1,2,3,4,5,6,7]
    return (
        <div  className="pt-[95px]">
            <Marquee>
                {
                    banners.map(banner=>{
                        return (
                            <img className="max-h-[30vh] md:max-h-[40vh] lg:max-h-[50vh] xl:max-h-[60vh]" src="/images/banner.jpg" alt=""/>
                        )
                    })
                }

            </Marquee>
        </div>
    );
};

export default Banner;