import React from 'react';

const Projects = () => {
    return (
        <section className="container mx-auto py-10 ">
            <div className=" flex justify-center">
                <div>
                    <h1
                        className=" text-center text-gray-950 text-3xl md:text-5xl font-bold font-['Montserrat'] capitalize leading-[57.60px]">SEE
                        OUR WORK
                    </h1>
                    <p
                        className="text-center text-gray-950 text-sm md:text-base font-medium font-['Montserrat'] leading-relaxed">Check
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
                        className="w-[150px] h-[50px] hover:bg-orange-500 hover:text-white rounded border"
                >
                    VIEW MORE
                </button>
            </div>
        </section>
    );
};

export default Projects;