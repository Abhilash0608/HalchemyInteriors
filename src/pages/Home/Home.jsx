import { useEffect, useState } from "react"
import Aboutus from "../../components/AboutUs"
import AssociateBrands from "../../components/AssociateBrands"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import LoadingScreen from "../../components/LoadingScreen"
import OurServices from "../../components/OurServices"
import Slider from "../../components/Slider"
import TestimonialSlider from "../../components/Testimonails"
import MostVisitedProducts from "../../components/MostVisited"
import MetaTags from "../../components/MetaTags"

const Home = () => {
      const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          const timer = setTimeout(() => setIsLoading(false), 2000); // Set loading duration to 2 seconds
          return () => clearTimeout(timer);
        }, []);
    return (
        <div className='relative'>
          <MetaTags
                    title="Halchemy Interiors"
                    description="Welcome to Halchemy Interiors, where we transform spaces with creativity and precision."
                    canonical="https://www.halchemyinteriors.com/"
                />
            {isLoading && <LoadingScreen isVisible={isLoading} />}
            <Hero />
            <MostVisitedProducts/>
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