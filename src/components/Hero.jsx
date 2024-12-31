import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import hero3 from "../assets/hero3.jpg";

const Hero = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main
            className={`flex flex-col m-auto relative ${isHomePage ? "h-screen" : "h-[70vh]"
                } w-full bg-cover bg-center bg-no-repeat relative`}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${hero3})`,
            }}
        >
            {/* Pass the isScrolled state to Navbar */}
            <Navbar isScrolled={isScrolled} />

            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center text-center max-w-[90vw] md:max-w-[80vw] m-auto space-y-4">
                {/* h1 animation */}
                <motion.h1
                    className="text-white text-2xl md:text-4xl lg:text-4xl leading-tight md:leading-normal lg:leading-normal italic w-[50%]"
                    initial={{ y: 100, opacity: 0 }} // Start from bottom
                    whileInView={{ y: 0, opacity: 1 }} // Animate when in view
                    transition={{ duration: 1, ease: "easeOut", delay: 2 }} // Smooth transition
                    viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
                >
                    Welcome to<br />
                    <span className="text-[#8A7C56]">Halchemy Interior</span>
                    <br /> Design
                </motion.h1>

                {/* p animation */}
                <motion.p
                    className="text-white text-md mt-2 font-futura font-normal leading-loose"
                    initial={{ y: 100, opacity: 0 }} // Start from bottom
                    whileInView={{ y: 0, opacity: 1 }} // Animate when in view
                    transition={{ duration: 1.2, ease: "easeOut", delay: 2 }} // Smooth transition with delay
                    viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
                >
                    Welcome to Halchemy Interior's, we believe in transforming
                    spaces to reflect the unique personalities of clients. With
                    years of experience in interior design, we are dedicated to
                    creating visually stunning and functional interiors that
                    blend aesthetics with practicality. Whether you're looking
                    for a complete home makeover or a small room redesign, our
                    team brings creativity, precision, and attention to detail
                    into every project.
                </motion.p>

            </div>
        </main>
    );
};

export default Hero;
