import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaMoneyBillAlt, FaGem } from 'react-icons/fa';

// Variants for card animations (entrance, rotation, hover effects)
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotateY: 180,
    y: -100,
  },
  whileHover:{
    scale: 1.05, // Scale the card slightly when hovered

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
      ease: 'easeOut',
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.5, // Stagger cards one by one
    },
  },
};



const Card = ({ title, description, icon, bgColor, borderColor }) => (
  <motion.div
    className={`p-8 rounded-full bg-white border-4 ${borderColor} shadow-2xl flex flex-col items-center justify-center transform transition-all overflow-hidden`}
    variants={cardVariants}
    whileTap={{ scale: 0.98 }} // Add scale down effect on click for interaction feedback
    style={{
      width: '280px', // Increased size for more space
      height: '280px',
      margin: '0 auto',
      position: 'relative',
    }}
    whileHover="hover"  // This triggers the hover variant when hovered
  >
    <div
      className={`p-4 rounded-full bg-${bgColor}-100 text-${bgColor}-600 mb-4 flex items-center justify-center`}
      style={{ width: '60px', height: '60px' }} // Icon size adjusted
    >
      {icon}
    </div>

    <motion.h3
      className="text-xl font-bold text-center mb-2"
      style={{ maxWidth: '90%', wordBreak: 'break-word' }} // Ensure text wraps to next line if needed
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      {title}
    </motion.h3>

    <motion.p
      className="text-gray-700 text-center text-sm"
      style={{ maxWidth: '90%', wordBreak: 'break-word' }} // Allow text to break and wrap if it's too long
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      {description}
    </motion.p>
  </motion.div>
);

const FeaturesSection = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={sectionVariants}
    className="container mx-auto py-4 px-6 md:px-16"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
      {/* Flat 10-Year Warranty */}
      <motion.div
        variants={cardVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <Card
          title="Flat 10-Year Warranty"
          description="Comprehensive warranty policy for your peace of mind."
          icon={<FaShieldAlt size={50} />}
          bgColor="blue"
          borderColor="blue-500"
        />
      </motion.div>

      {/* Aqua Bloc Technology */}
      <motion.div
        variants={cardVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <Card
          title="Aqua Bloc Technology"
          description="Protects your cabinets from moisture damage."
          icon={<FaLeaf size={50} />}
          bgColor="green"
          borderColor="green-500"
        />
      </motion.div>

      {/* Cost-effective Solutions */}
      <motion.div
        variants={cardVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <Card
          title="Cost-effective Solutions"
          description="Affordable pricing with no hidden fees."
          icon={<FaMoneyBillAlt size={50} />}
          bgColor="yellow"
          borderColor="yellow-500"
        />
      </motion.div>

      {/* Premium Finishes */}
      <motion.div
        variants={cardVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
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

export default FeaturesSection;
