import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';
import React, { Suspense, useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScratchCard from './components/ScratchImage';
import hero2 from './assets/hero2.jpg'; // Overlay imagegit 
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
            className="modal-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
            }}
          >
            <div
              className="modal-content"
              style={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                width: '80%',
                maxWidth: '600px',
                textAlign: 'center',
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'bg-yellow-800',
                  color: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  zIndex:"1000"
                }}
              >
                X
              </button>

             

              {/* Hand Icon and Scratch Text */}
              

              {/* ScratchCard */}
              <ScratchCard
                width={600}
                height={400}
                image={hero3} // Bottom image
                overlayImage={hero2} // Overlay image
                brushSize={30}
              />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
