import React from 'react';
import  "./style.css"
import ReviewCard from "./ReviewCard";
import Carousel from "./Carousel";

const Reviews = () => {

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <div>
                    <h1 className=" text-center text-gray-950 text-5xl font-bold font-['Montserrat'] uppercase ]"> OUR
                        CUSTOMER REVIEWS</h1>
                    <p
                        className="text-center text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">Discover
                        what our valued customers have to say about their experiences with us. <br/> Read these genuine
                        reviews to
                        get a glimpse into the <br/> satisfaction and trust we've earned.
                    </p>
                </div>

               <Carousel>
                   <ReviewCard/>
               </Carousel>

            </div>


        </section>
    );
};

export default Reviews;