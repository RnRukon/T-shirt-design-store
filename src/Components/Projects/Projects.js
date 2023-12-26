import React from 'react';

const Projects = () => {
    return (
        <section id="portfolio" className="container mx-auto py-10 px-5">
            <div className=" flex justify-center">
                <div className="max-w-[591px]">
                    <h1
                        className=" text-center text-gray-950 text-2xl md:text-3xl font-bold font-['Montserrat'] capitalize leading-[57.60px]">SEE
                        OUR WORK
                    </h1>
                    <p
                        className="text-center pt-5 text-gray-950 text-sm md:text-base font-medium font-['Montserrat'] leading-relaxed">Check
                        out our portfolio to see what we've done. It's a visual display of our best work, showcasing
                        your
                        skills and commitment to excellence.
                    </p>
                </div>


            </div>

            <div className="grid grid-cols-2  md:grid-cols-4  gap-5 pt-10">
                <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div> <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div> <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div> <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div> <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div> <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div> <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div> <div>
                    <img src="/images/t-shirt.jpg" alt=""/>
                </div>
            </div>

            <div className="flex justify-center mt-[15px]">
                <button type="button"
                        className="w-[150px] h-[50px] bg-orange-500 text-white rounded-lg border"
                >
                    VIEW MORE
                </button>
            </div>
        </section>
    );
};

export default Projects;