import { motion } from "framer-motion";
import { NavLinks, serviceData } from "../utils/servicesData";
import { selectSerivce } from "../store/slices/services/servicesSlice";
import { Link } from "react-router-dom";
const MobileMenu = ({
    isOpen,
    toggleMenu,
    showSubMenu,
    setShowSubMenu,
    dispatch,
}) => (
    <>
        <div
            className="md:hidden flex flex-col space-y-1 cursor-pointer"
            // onClick={toggleMenu}
        >
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
        </div>

        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-10 left-0 w-full bg-white shadow-lg z-10 p-4"
            >
                <ul className="flex flex-col space-y-4">
                    {NavLinks.map((link, ind) => (
                        <li key={link.title} className="font-bold text-lg text-gray-800">
                            {ind === 1 ? (
                                <div>
                                    <div
                                        onClick={() => setShowSubMenu(!showSubMenu)}
                                        className="flex items-center justify-between cursor-pointer"
                                    >
                                        <span>{link.title}</span>
                                        <span>{showSubMenu ? "-" : "+"}</span>
                                    </div>
                                    {showSubMenu && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                            className="pl-4 mt-2 space-y-2"
                                        >
                                            {serviceData.map((service) => (
                                                <li
                                                    key={service.id}
                                                    className="text-gray-600 hover:text-[#ab8925]"
                                                >
                                                    <Link
                                                        to="/services"
                                                        onClick={() =>
                                                            dispatch(selectSerivce(service.id))
                                                        }
                                                    >
                                                        {service.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </div>
                            ) : (
                                <Link to={link.path} className="hover:text-[#ab8925]">
                                    {link.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
    </>
);
export default MobileMenu