import React, {useEffect, useState} from 'react';



const projects=[
    {"title": "Love for Mom", "image": "/products/Mothers day T-shirt design-01.jpg"},
    {"title": "Beer Lover's Brew", "image": "/products/Beer_T-shirt_ design_.jpg"},
    {"title": "Galloping Glory", "image": "/products/Horse_T_shirt_design_01.jpg"},
    {"title": "Paws & Play", "image": "/products/Dog_T_shirt_design_01.jpg"},
    {"title": "Puppy Pals", "image": "/products/Dog_T_shirt_design_02_01.jpg"},
    {"title": "Sunny Days", "image": "/products/Summer T-shirt design-01.jpg"},
    {"title": "Feline Finesse", "image": "/products/Cat T-shirt design-01.jpg"},
    {"title": "Game On!", "image": "/products/Gaming T-shirt design-01.jpg"},
    {"title": "Adventure Awaits", "image": "/products/Camping_T_shirt_design_01.jpg"},
    {"title": "Reel 'Em In", "image": "/products/Fishing_T_shirt_design_01.jpg"},
    {"title": "Hunt & Gather", "image": "/products/Hunting_T_shirt_design_01.jpg"},
    {"title": "Healing Hands", "image": "/products/Nurse_T_shirt_design_01.jpg"},
    {"title": "Pedal Power", "image": "/products/Cycling T-shirt design-01.jpg"},
    {"title": "Super Dad", "image": "/products/Father T-shirt design-01.jpg"},
    {"title": "Salute to Service", "image": "/products/Military T-shirt design-01.jpg"},
    {"title": "Super Mom", "image": "/products/Mother T-shirt design-01.jpg"},
    {"title": "Trendy Vibes", "image": "/products/Popular T-shirt design-01.jpg"},
    {"title": "Taco Time", "image": "/products/Tacos T-shirt design-01.jpg"},
    {"title": "Typography Trendsetter", "image": "/products/Typography day T-shirt design-01.jpg"},
    {"title": "Zen Zone", "image": "/products/Yoga T-shirt design-01.jpg"}
]

const Projects = () => {
    const [currentItem, setCurrentItem] = useState(8);
    const [isLoading, setIsLoading] = useState(false);
    const [newProjects,setNewProjects]=useState([]);

     useEffect(() => {
           setNewProjects(state=>[...projects.slice(0, currentItem)])
    }, [currentItem]);

    const handleViewMore =  () => {
        setIsLoading(true);
        setTimeout(() => {
            setCurrentItem(prevItem => prevItem + 8);
            setIsLoading(false);
        }, 1000);
    };


    return (
        <section id="portfolio" className="max-w-[1200px] mx-auto py-10 px-5">
            <div className=" flex justify-center">
                <div className="max-w-[770px]">
                    <h1
                        className=" text-center text-gray-950 text-2xl md:text-[64px] font-bold font-['Montserrat'] capitalize leading-[57.60px]">SEE
                        OUR WORK
                    </h1>
                    <p
                        className="text-center pt-5 text-gray-950 text-sm md:text-base font-medium font-['Montserrat'] leading-relaxed">Check out our portfolio to see what we've done. It's a visual display of our best work, showcasing your skills and commitment to excellence.
                    </p>
                </div>


            </div>

            <div className="grid grid-cols-2  md:grid-cols-4  gap-5 pt-10">

                {
                    newProjects?.map((data,index)=>{
                        return (
                            <div key={index}>
                                <img src={data?.image} alt=""/>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex justify-center pt-[42px]">
                <button
                    onClick={handleViewMore}
                    disabled={projects.length===newProjects.length||isLoading}
                    type="button"
                        className={`w-[172px] h-[50px]  text-white rounded-lg border text-base font-bold font-['Montserrat'] ${isLoading?"bg-orange-300":"bg-orange-500"} ${projects.length===newProjects.length&&"bg-orange-300"}`}
                >
                    {
                       ( projects.length===newProjects.length&&"Product End")||(isLoading? "Loading...": "VIEW MORE")
                    }
                </button>
            </div>
        </section>
    );
};

export default Projects;