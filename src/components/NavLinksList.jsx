import { motion } from "framer-motion";
import {  useState } from "react";
import { NavLinks, serviceData } from "../utils/servicesData";
import { Link, useLocation } from "react-router-dom";
import { selectSerivce } from "../store/slices/services/servicesSlice";
const NavLinksList = ({  dispatch }) => {
    const location = useLocation();
    const [showMenu, setMenu] = useState(false);

    return (
        <ul className="hidden md:flex lg:flex space-x-4">
            {NavLinks.map((link, ind) => (
                (location.pathname !== "/services" ||
                    !["About Us", "Services", "Contact Us"].includes(link.title)) && (
                    <motion.li
                        key={link.title}
                        whileHover={{ scale: 1.1 }}
                        className="relative text-lg  transition duration-300 font-serif"
                    >
                        {ind === 1 ? (
                            <div
                                onMouseEnter={() => setMenu(true)}
                                onMouseLeave={() => setMenu(false)}
                                className="relative"
                            >
                                <Link to="/services" className="cursor-pointer font-semibold">{link.title}</Link>
                                {showMenu && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-5   -left-5 mt-2 w-52 p-3 bg-white text-black shadow-lg rounded-lg p-0"
                                    >
                                        {serviceData.map((service) => (
                                            <li
                                                key={service.id}
                                                className="py-1 px-2 hover:bg-gray-200 rounded"
                                            >
                                                <Link
                                                    className="text-sm"
                                                    to="/services"
                                                    onClick={() => dispatch(selectSerivce(service.id))}
                                                >
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </div>
                        ) : (
                            <Link to={`${link.path}`} className="font-semibold">{link.title}</Link>
                        )}
                    </motion.li>
                )
            ))}
        </ul>
    );
};
export default NavLinksList