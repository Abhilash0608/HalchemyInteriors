import { motion } from "framer-motion";

const SectionHeader = ({ mainHeading, subHeading }) => {
    return (
        <div className="flex flex-col space-y-2 justify-start items-start p-6 flex-1">
            {/* Main Heading Animation: Slide in from the left on scroll */}
            <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                initial={{ x: -100, opacity: 0 }} // Start from the left
                whileInView={{ x: 0, opacity: 1 }} // Trigger animation when in view
                viewport={{ once: true, amount: 0.3 }} // Trigger once, when 80% in view
                transition={{ duration: 0.4, ease: "easeOut" }} // Smooth transition
            >
                {mainHeading}
            </motion.h1>

            {/* Sub Heading Section */}
            <div className="flex w-full justify-start items-center space-x-4 md:space-x-6">
                <motion.div
                    className="h-1 bg-[#8A7C56] w-16 sm:w-20 md:w-24"
                    // initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>

                {/* Sub Heading Animation: Slide in from the right on scroll */}
                <motion.h1
                    className="text-lg text-[#8A7C56] sm:text-xl md:text-2xl italic t"
                    initial={{ x: 100, opacity: 0 }} // Start from the right
                    whileInView={{ x: 0, opacity: 1 }} // Trigger animation when in view
                    viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% in view
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }} // Smooth transition with delay
                >
                    {subHeading}
                </motion.h1>
            </div>
        </div>
    );
};

export default SectionHeader;
