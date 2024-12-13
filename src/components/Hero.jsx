import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
            className={`flex flex-col m-auto relative ${
                isHomePage ? "h-screen" : "h-[70vh]"
            } w-full bg-cover bg-center bg-no-repeat relative`}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${hero3})`,
            }}
        >
            {/* Pass the isScrolled state to Navbar */}
            <Navbar isScrolled={isScrolled} />
            <div className="flex flex-col items-center justify-between text-center max-w-[90vw] md:max-w-[80vw]  m-auto space-y-4">
                <h1 className="text-white text-2xl md:text-4xl lg:text-4xl leading-tight md:leading-normal lg:leading-normal italic w-[50%]">
                    Welcome to<br />
                    <span className="text-[#8A7C56]">Halchemy Interior</span>
                    <br /> Design
                </h1>
                <p className="text-white text-[12px] md:text-[18px]  mt-2 italic leading-6 md:leading-8 tracking-wider ">
                    Welcome to Halchemy Interior's, we believe in transforming
                    spaces to reflect the unique personalities of clients. With
                    years of experience in interior design, we are dedicated to
                    creating visually stunning and functional interiors that
                    blend aesthetics with practicality. Whether you're looking
                    for a complete home makeover or a small room redesign, our
                    team brings creativity, precision, and attention to detail
                    into every project.
                </p>
            </div>
        </main>
    );
};

export default Hero;
