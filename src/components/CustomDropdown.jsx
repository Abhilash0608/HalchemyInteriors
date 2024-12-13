import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { serviceData } from '../utils/servicesData';
import { useDispatch, useSelector } from 'react-redux';
import { selectSerivce } from '../store/slices/services/servicesSlice';

const CustomDropdown = ({ isScrolled }) => {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false);
    const currentService = useSelector((state) => state.services.currentService)

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const handleBlur = (event) => {
        // Prevent closing if the next focused element is inside the dropdown
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsOpen(false);
        }
    };
    // Close on blur
    const handleSelect = (option) => {
        setIsOpen(false);
        dispatch(selectSerivce(option.id))
    };
    return (

        <div className="relative inline-block text-left " onBlur={handleBlur}>
            {/* Dropdown Toggle Button */}
            <button
                onClick={toggleDropdown}
                className={`flex items-center  custom-dropdown justify-between px-4 py-2 w-72 border rounded-lg shadow-md transition-all duration-300 bg-none
                    ${isScrolled || isOpen ? 'border-black text-black bg-white' : 'border-white text-white sm:bg-none'} 
                     hover:border-black hover:text-black hover:bg-white
                     `}
            >
                <span>{currentService ? currentService.title : 'Select an option'}</span>
                {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    onBlur={handleBlur}
                    className="absolute z-50 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg w-full"
                >
                    {serviceData.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => handleSelect(option)}
                            tabIndex={0}
                            className={`px-4 py-2 cursor-pointer text-black hover:bg-gray-100 
                                ${currentService && currentService.id === option.id ? 'bg-gray-200 font-semibold' : ''}`}
                        >
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
