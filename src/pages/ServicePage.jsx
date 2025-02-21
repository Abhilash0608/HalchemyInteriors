import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './servicePage.css';
import Portfolio from '../components/Portfolio';
import { Link } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import { ResidentialImages } from '../utils/servicesData';
import { CommercialImages } from '../utils/servicesData';
import { FurnitureImages } from '../utils/servicesData'
import MetaTags from '../components/MetaTags';

const ServicePage = () => {
    const currentService = useSelector((state) => state.services.currentService);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        const loadingTimer = setTimeout(() => setIsLoading(false), 2000); // Set loading duration to 2 seconds

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(loadingTimer); // Clear timeout on unmount
        };
    }, []);

    return (
        <>
            <div className="servicesPage-container relative " >
                <MetaTags
                    title="Halchemy Interiors - Our Services"
                    description="Discover our interior design services for residential, office, and commercial spaces."
                    canonical="https://www.halchemyinteriors.com/services"
                />
                {isLoading && <LoadingScreen isVisible={isLoading} />}
                <main
                    className="servicesPage-main"
                    key={currentService.id}
                    style={{
                        opacity: isLoading ? 0 : 1, // Ensure it's hidden under the loading screen
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                >
                    <div>
                        <div className="services-bg h-full">
                            <Navbar isScrolled={isScrolled} />

                            <div className="flex flex-col justify-center h-full  items-center">
                                <h1 className='text-2xl md:text-4xl lg:text-4xl'>{currentService.title}</h1>
                                <div className="breadcrumb mt-2">
                                    <h3 className='text-xl md:text-2xl lg:text-3xl bg-none'>
                                        <Link to="/" className='underline'>Home</Link>
                                    </h3>
                                    <p>-</p>
                                    <h3 className='text-xl md:text-2xl lg:text-3xl'>Service Details</h3>
                                </div>
                            </div>
                        </div>

                        <div className="services-list max-w-[90vw] m-auto mt-12">
                            <div className="details-section">
                                <h2 className="text-[#8A7C56] text-2xl md:text-3xl lg:text-3xl">{currentService.title}</h2>
                                <p className="md:text-center lg:text-center text-gray-600  font-futura font-normal leading-loose">
                                    {currentService.description}
                                </p>
                            </div>
                        </div>
                        {currentService.id === 2 && <Portfolio CurrentImages={ResidentialImages} />}
                        {currentService.id === 3 && <Portfolio CurrentImages={CommercialImages} />}
                        {currentService.id === 4 && <Portfolio CurrentImages={FurnitureImages} />}


                    </div>
                </main>
            </div>
        </>
    );
};

export default ServicePage;
