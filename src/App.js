import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';
import React, { Suspense, useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';

// Lazy loading components
const Home = React.lazy(() => import('./pages/Home/Home'));

const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const ProductsPage = React.lazy(() => import('./pages/products/Products'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));

function App() {
  const phoneNumber = '9515261555';
  const message = 'Hello, I need help!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 2000); // Set loading duration to 2 seconds
      return () => clearTimeout(timer);
    }, []);

  return (
    <Router>
      <div className="app flex flex-col my-0 mx-auto">
        <Suspense fallback={isLoading && <LoadingScreen isVisible={isLoading}/>}>
          <Routes>
            <Route
              path="/"
              element={
                <Home/>
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="products" element={<ProductsPage />} />
          </Routes>
        </Suspense>
        <a
          className="whatsapp-icon"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={60} className="text-white" />
        </a>
      </div>
    </Router>
  );
}

export default App;
