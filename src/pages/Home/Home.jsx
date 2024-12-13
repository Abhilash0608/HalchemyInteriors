import { useEffect, useState } from "react"
import Aboutus from "../../components/AboutUs"
import AssociateBrands from "../../components/AssociateBrands"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import LoadingScreen from "../../components/LoadingScreen"
import OurServices from "../../components/OurServices"
import Slider from "../../components/Slider"
import TestimonialSlider from "../../components/Testimonails"

const Home = () => {
      const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          const timer = setTimeout(() => setIsLoading(false), 2000); // Set loading duration to 2 seconds
          return () => clearTimeout(timer);
        }, []);
    return (
        <div className='relative'>
            {isLoading && <LoadingScreen isVisible={isLoading} />}
            <Hero />
            <Slider />
            <OurServices />
            <Aboutus />
            <AssociateBrands />
            <TestimonialSlider />
            <Footer />
        </div>
    )
}
export default Home