import React, {useState} from 'react';


const Carousel = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

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
            <button className="arrow prev" onClick={goToPrevSlide}>
                &lt;
            </button>
            <button className="arrow next" onClick={goToNextSlide}>
                &gt;
            </button>

            <div className="flex justify-center">
                <div className=" justify-center items-center inline-flex">

                    <button className="w-12 h-12" onClick={goToPrevSlide}>
                        <img className="h-10"  src="/images/Arrow-LeftCircle.png" alt=""/>
                    </button>
                    <button className="w-12 h-12 p-1 " onClick={goToNextSlide}>
                        <img className="h-10" src="/images/Arrow-Right-Circle.png" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;