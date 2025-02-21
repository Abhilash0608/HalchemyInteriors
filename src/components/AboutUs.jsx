import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaMoneyBillAlt, FaGem } from "react-icons/fa";

// Variants for card animations (entrance, rotation, hover effects)
const cardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.6,
        rotateY: 180,
        y: -100,
    },
    hover: {
        scale: 1.1, // Slowly scale the card
        transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
            duration: 2,
        },
    },
};

const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};




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
                {/* Underline Animation: Now coming from the right */}
                <motion.div
                    className="h-1 bg-[#8A7C56] w-16 sm:w-20 md:w-24"
                    initial={{ x: 100, opacity: 0 }} // Start from the right
                    whileInView={{ x: 0, opacity: 1 }} // Trigger animation when in view
                    viewport={{ once: true, amount: 0.8 }} // Trigger once, when 80% in view
                    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                ></motion.div>

                {/* Sub Heading Animation: Slide in from the right on scroll */}
                <motion.h1
                    className="text-lg text-[#8A7C56] sm:text-xl md:text-2xl italic"
                    initial={{ x: -100, opacity: 0 }} // Start from the right
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

// Card component with mobile responsiveness
const Card = ({ title, description, icon, bgColor, borderColor }) => (
    <motion.div
        className={`p-8 rounded-full bg-white border-4 ${borderColor} shadow-2xl flex flex-col items-center justify-center transform transition-all overflow-hidden`}
        variants={cardVariants}
        whileHover="hover"
        style={{
            width: '280px', // Default width for larger screens
            height: '280px',
            margin: '0 auto',
            position: 'relative',
        }}
    >
        <div
            className={`p-4 rounded-full bg-${bgColor}-100 text-${bgColor}-600 mb-4 flex items-center justify-center`}
            style={{ width: '60px', height: '60px' }} // Default icon size
        >
            {icon}
        </div>
        <motion.h3
            className="text-xl font-bold text-center mb-2"
            style={{ maxWidth: '90%', wordBreak: 'break-word' }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            {title}
        </motion.h3>

        <motion.p
            className="text-gray-700 text-center text-sm"
            style={{ maxWidth: '90%', wordBreak: 'break-word' }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            {description}
        </motion.p>
    </motion.div>
);

// Main Features Section component
const FeaturesSection = () => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1,
                    ease: "easeOut",
                    staggerChildren: 0.6, // Cards will animate one by one
                },
            },
        }}
        className="container mx-auto py-4 px-6 md:px-16"
    >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
            {/* Flat 10-Year Warranty */}
            <motion.div variants={cardVariants} whileInView="visible" initial="hidden" viewport={{ once: true }}>
                <Card
                    title="Flat 10-Year Warranty"
                    description="Comprehensive warranty policy for your peace of mind."
                    icon={<FaShieldAlt size={50} />}
                    bgColor="blue"
                    borderColor="blue-500"
                />
            </motion.div>

            {/* Aqua Bloc Technology */}
            <motion.div variants={cardVariants} whileInView="visible" initial="hidden" viewport={{ once: true }}>
                <Card
                    title="Aqua Bloc Technology"
                    description="Protects your cabinets from moisture damage."
                    icon={<FaLeaf size={50} />}
                    bgColor="green"
                    borderColor="green-500"
                />
            </motion.div>

            {/* Cost-effective Solutions */}
            <motion.div variants={cardVariants} whileInView="visible" initial="hidden" viewport={{ once: true }}>
                <Card
                    title="Cost-effective Solutions"
                    description="Affordable pricing with no hidden fees."
                    icon={<FaMoneyBillAlt size={50} />}
                    bgColor="yellow"
                    borderColor="yellow-500"
                />
            </motion.div>

            {/* Premium Finishes */}
            <motion.div variants={cardVariants} whileInView="visible" initial="hidden" viewport={{ once: true }}>
                <Card
                    title="Premium Finishes"
                    description="Top-quality finishes for a luxurious feel."
                    icon={<FaGem size={50} />}
                    bgColor="purple"
                    borderColor="purple-500"
                />
            </motion.div>
        </div>
    </motion.div>
);

const Aboutus = () => {
    return (
        <div className="w-[90vw] m-auto px-2 py-4">
            <motion.div
                className="aboutus-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col justify-center items-center gap-4">
                    {/* Animated Section Header */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SectionHeader mainHeading="We Provide High" subHeading="Designs" />
                    </motion.div>

                    {/* Intro Paragraph */}
                    <motion.p
                        className="text-gray-700 text-center max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Wrap your tired eyes around this massive gallery of refreshing modern bedroom ideas and gorgeous
                        bedroom accessories that are sure to wake you up. From ultra sleek minimalist style bedrooms to
                        warm modern rustic decor schemes, there is something here to suit everyone.
                    </motion.p>

                    <motion.p
                        className="text-center max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        We have 10+ years of experience to give you better quality results.
                    </motion.p>

                    <FeaturesSection />
                </div>
            </motion.div>
        </div>
    );
};

export default Aboutus;
