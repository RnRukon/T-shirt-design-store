import React from 'react';

const OutTeam = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="max-w-[777px] text-center ">
                        <h1 className=" text-gray-950 text-5xl font-bold font-['Montserrat'] uppercase leading-[57.60px]">MEET
                            OUR TEAM</h1>
                        <p
                            className=" text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">We’re
                            a growing team of graphic design experts and thought leaders - full of personality minus the
                            ego.
                            We’re the wearer of many hats dedicated to helping companies like your grow.
                        </p>
                    </div>
                </div>


                <div className="grid md:grid-cols-3 grid-cols-2 py-16 gap-5">
                    <div className="rounded border-2 border-gray-950 p-10">
                        <div className="-mt-16 flex justify-center">
                            <img src="/images/team1.png" alt=""/>
                        </div>
                        <div>
                            <h4 className="text-center pt-[30px] text-gray-950 text-2xl font-bold font-['Montserrat'] capitalize leading-[28.80px]">Rubel
                                Ahamed</h4>
                            <p className="text-center pt-2 text-orange-500 text-base font-medium font-['Montserrat'] leading-relaxed">POD
                                Expert Designer </p>
                        </div>
                    </div>
                    <div className="rounded border-2 border-gray-950 p-10">
                        <div className="-mt-16 flex justify-center">
                            <img src="/images/team1.png" alt=""/>
                        </div>
                        <div>
                            <h4 className="text-center pt-[30px] text-gray-950 text-2xl font-bold font-['Montserrat'] capitalize leading-[28.80px]">Rubel
                                Ahamed</h4>
                            <p className="text-center pt-2 text-orange-500 text-base font-medium font-['Montserrat'] leading-relaxed">POD
                                Expert Designer </p>
                        </div>
                    </div>
                    <div className="rounded border-2 border-gray-950 p-10">
                        <div className="-mt-16 flex justify-center">
                            <img src="/images/team1.png" alt=""/>
                        </div>
                        <div>
                            <h4 className="text-center pt-[30px] text-gray-950 text-2xl font-bold font-['Montserrat'] capitalize leading-[28.80px]">Rubel
                                Ahamed</h4>
                            <p className="text-center pt-2 text-orange-500 text-base font-medium font-['Montserrat'] leading-relaxed">POD
                                Expert Designer </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutTeam;