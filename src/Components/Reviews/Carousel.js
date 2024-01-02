import React, {useState} from 'react';


const Carousel = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const images =[1,2,3,4,6,7,8,3,4]
    return (
        <div className="carousel pt-10">
            <div className="slides-container" style={{transform: `translateX(-${currentSlide * 33.33}%)`}}>
                {images.map((item, index) => (
                    <div className="slide" key={index}>
                        {children}
                    </div>
                ))}
            </div>

            <div className="flex justify-center pt-5">
                <div className=" flex justify-center items-center  gap-5">


                    <button className=" rounded-full h-12 w-12 bg-gray-950 hover:bg-orange-500 hover:text-white flex justify-center items-center p-2  hover:border-orange-500 border-2 border-black"
                            onClick={goToPrevSlide}>
                        <img   src="/images/back-right.png" alt=""/>

                    </button><button className=" rounded-full h-12 w-12 bg-gray-950 hover:bg-orange-500 hover:text-white flex justify-center items-center p-2  hover:border-orange-500 border-2 border-black"
                            onClick={goToNextSlide}>
                        <img   src="/images/back-left.png" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;