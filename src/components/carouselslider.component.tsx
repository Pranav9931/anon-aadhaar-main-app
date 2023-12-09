import React, { useRef, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import "./slick.css"
import "./slick-theme.css"

interface CarouselProps {
    items: {
        image: JSX.Element;
        caption: JSX.Element;
    }[];
}

const CarouselSlider: React.FC<CarouselProps> = ({ items }) => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext(); // go to the next slide
            }
        }, 3000); // set the interval to 3 seconds

        return () => clearInterval(interval); // clear the interval when the component unmounts
    }, []);

    return (
        <Slider
            {...settings}
            ref={sliderRef}
            prevArrow={<button>Previous</button>}
            nextArrow={<button>Next</button>}
        >
            {items.map((item, index) => (
                <div key={index}>
                    {item.image}
                    {item.caption}
                </div>
            ))}
        </Slider>
    );
};


export default CarouselSlider;
