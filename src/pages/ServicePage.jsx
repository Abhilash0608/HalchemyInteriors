import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './servicePage.css';
import Portfolio from '../components/Portfolio';
import { Link } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';


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
            {/* Render both components simultaneously */}
            <div className="servicesPage-container relative " >
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
                                    <h3 className='text-xl md:text-2xl lg:text-3xl'>
                                        <Link to="/">Home</Link>
                                    </h3>
                                    <p>-</p>
                                    <h3 className='text-xl md:text-2xl lg:text-3xl'>Service Details</h3>
                                </div>
                            </div>
                        </div>

                        <div className="services-list max-w-[90vw] m-auto mt-12">
                            <div className="details-section">
                                <h2 className="text-[#8A7C56] text-2xl md:text-3xl lg:text-3xl">{currentService.title}</h2>
                                <p className="md:text-center lg:text-center text-gray-600   text-base  text-lg md:text-xl lg:text-xl">
                                    {currentService.description}
                                </p>
                            </div>
                        </div>
                        {currentService.id === 2 && <Portfolio />}
                    </div>
                </main>
            </div>
        </>
    );
};

export default ServicePage;
