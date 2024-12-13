import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { NavLinks, serviceData } from '../utils/servicesData';
import { Link, useLocation } from 'react-router-dom';
import CustomDropdown from './CustomDropdown';
import { useDispatch } from 'react-redux';
import { selectSerivce } from '../store/slices/services/servicesSlice';
import Logo from './Logo';
import NavLinksList from './NavLinksList';

export default function Navbar({ isScrolled }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const dropdownRef = useRef(null);
    const menuButtonRef = useRef(null);
    const location = useLocation();
    const isServices = location.pathname === '/services';
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                menuButtonRef.current && !menuButtonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
                setShowSubMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
       
        setIsOpen((prev) => !prev);
        setShowSubMenu(false);
    };

    return (
        <nav
            className={`fixed top-0 z-50 w-full px-4 py-2 transition-all duration-300  pointer-event-auto
                ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}
        >
            <div className="flex items-center justify-between max-w-[90vw] mx-auto">
                <Logo isServices={isServices} />

                {isServices && <CustomDropdown isScrolled={isScrolled} />}

                <NavLinksList dispatch={dispatch} isServices={isServices} />

                <div
                    ref={menuButtonRef}
                    className="md:hidden flex flex-col space-y-1 cursor-pointer"
                    onClick={()=>toggleMenu()}
                >
                    <span className="block w-6 h-0.5 bg-current"></span>
                    <span className="block w-6 h-0.5 bg-current"></span>
                    <span className="block w-6 h-0.5 bg-current"></span>
                </div>

                {isOpen && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-14 left-0 w-full bg-white shadow-lg z-10 p-4 md:hidden"
                    >
                        <ul className="flex flex-col space-y-4">
                            {NavLinks.map((link, ind) => (
                                <li key={link} className="font-bold text-lg text-gray-800">
                                    {ind === 1 ? (
                                        <div>
                                            <div
                                                onClick={() => setShowSubMenu(!showSubMenu)}
                                                className="flex items-center justify-between cursor-pointer"
                                            >
                                                <span>{link.title}</span>
                                                <span>{showSubMenu ? '-' : '+'}</span>
                                            </div>

                                            {showSubMenu && (
                                                <motion.ul
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    transition={{ duration: 0.3 }}
                                                    className="pl-4 mt-2 space-y-2"
                                                >
                                                    {serviceData.map((service) => (
                                                        <li
                                                            key={service.id}
                                                            className="text-gray-600 hover:text-[#ab8925]"
                                                        >
                                                            <Link
                                                            onClick={() => dispatch(selectSerivce(service.id))}
                                                                to={"/services"}
                                                                
                                                            >
                                                                {service.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={`${link.path}`}
                                            className="hover:text-[#ab8925]"
                                        >
                                            {link.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
