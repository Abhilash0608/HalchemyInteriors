import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';
import React, { Suspense, useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScratchCard from './components/ScratchImage';
import hero2 from './assets/before.jpg'; // Overlay imagegit 
import hero3 from './assets/hero3.jpg'; // Bottom image

// Lazy loading components
const Home = React.lazy(() => import('./pages/Home/Home'));
const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const ProductsPage = React.lazy(() => import('./pages/products/Products'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));

function App() {
  const phoneNumber = '9515261555';
  const message =
    'Hello Halchemy Team, I am interested to know more about your interior design services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); 

  // Show modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 30000); // 30 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Loading duration: 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <Router>
      <div className="app flex flex-col my-0 mx-auto">
        {/* Loading Screen */}
        <Suspense fallback={isLoading && <LoadingScreen isVisible={isLoading} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="products" element={<ProductsPage />} />
          </Routes>
        </Suspense>

        {/* WhatsApp Floating Button */}
        <a
          className="whatsapp-icon"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={60} className="text-white" />
        </a>

        {/* Modal */}
        {showModal && (
          <div
          className="fixed inset-0 w-full h-full bg-black bg-opacity-100 flex justify-center items-center  z-[999]"
        >
          <div
            className="relative bg-white rounded-lg shadow-lg   text-center"
            
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2.5 right-2.5  bg-[#8A7C56] text-white border-none rounded-full w-7 h-7 cursor-pointer z-[1000]"
            >
              X
            </button>
        
            {/* ScratchCard */}
            <ScratchCard
              width={600}
              height={400}
              image={hero3} // Bottom image
              overlayImage={hero2} // Overlay image
              brushSize={30}
              closeModal={closeModal}
            />
          </div>
        </div>
        
        )}
      </div>
    </Router>
  );
}

export default App;
