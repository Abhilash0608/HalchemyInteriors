import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8A7C56] text-white py-16">
      <div className="container mx-auto max-w-[90vw] grid grid-cols-1 md:grid-cols-3 md:place-items-center gap-8">
        
        {/* Get In Touch Section */}
      

        {/* Menu Section */}
        <div className="flex flex-col items-center md:items-start md:mt-16">
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-white-900">Menu</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-900">Services</Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-gray-900">Testimonials</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-900">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-white">Contact Details</h4>
          <ul className="space-y-4">
            <li className="flex gap-2 items-center hover:text-gray-900">
              <FaMapMarkerAlt className="text-lg " />
              <span>Gachibowli</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt className="text-lg" />
              <a href="tel:+919515261555" className="hover:text-gray-900">+91 9515261555</a>
            </li>
            <li className="flex gap-2 items-center">
              <FaEnvelope className="text-lg" />
              <a href="mailto:halchemyinteriors@gmail.com" className="hover:text-gray-900">halchemyinteriors@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="w-full py-4  ">
        <div className="container mx-auto flex flex-col  justify-between items-center text-white">
          <span className="my-2">© 2024 Halchemy Interiors. All Rights Reserved.</span>
          
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-gray-900" />
            </a>
            <a href="https://www.instagram.com/halchemy_interiors/profilecard/?igsh=MW9wdTR0bHR2ZmlwdA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-900" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>

      </div>

      {/* Footer Bottom Section */}
      

    </footer>
  );
};

export default Footer;
