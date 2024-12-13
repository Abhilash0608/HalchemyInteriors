import { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        id: 1,
        text: "The woodwork delivered by Halchemy Interior was meticulously designed and executed, perfectly reflecting our vision and enhancing our space's overall aesthetic.",
        name: "phani sumanth kommoju",
        rating: 5,
    },
    {
        id: 2,
        text: "Beautiful and high-quality craftsmanship! Halchemy Interior exceeded our expectations in every way possible.",
        name: "Raja Rajeswari Challa",
        rating: 5,
    },
];

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full max-w-[90vw] m-auto">
            <SectionHeader mainHeading="What Our Client Say" subHeading="About Us" />
            <div className="w-full flex justify-between items-center bg-white rounded-lg  text-center">
                {/* Previous Arrow */}
                <button onClick={prevSlide} >
                    <FaArrowLeft className="ml-2 text-xl mr-4 md:text-2xl lg:text-2xl text-gray-500" />
                    {/* Show image on larger screens */}

                </button>

                {/* Testimonial Content */}
                <div className="px-6 py-6 testimonical-card w-full ">
                    <div className="flex justify-center mb-2">
                        {[...Array(testimonials[current].rating)].map((_, index) => (
                            <FaStar key={index} className="text-[#8A7C56] lg:text-2xl" />
                        ))}
                    </div>
                    <p className="text-gray-700 italic mb-4 w-full md:max-w-3xl md:mx-auto lg:max-w-3xl lg:mx-auto">"{testimonials[current].text}"</p>
                    <h3 className="font-semibold text-gray-900">{testimonials[current].name}</h3>
                </div>

                {/* Next Arrow */}
                <button onClick={nextSlide} >
                    {/* Show image on larger screens */}

                    <FaArrowRight className="ml-2 ml-4 text-lg md:text-2xl lg:text-2xl text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;