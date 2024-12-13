import { motion } from 'framer-motion';

const LoadingScreen = ({ isVisible }) => (
    <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000, // Ensures the loading screen is on top
            backgroundColor: '#000', // Dark background
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
        }}
    >
        {/* Heading Animation */}
        <motion.h1
            className="loading-text"
            initial={{ color: '#fff' }}
            animate={{ color: '#8A7C56' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontStyle: 'italic',
            }}
        >
            Halchemy Interiors
        </motion.h1>

        {/* Background Animation */}
        <motion.div
            className="background-highlight"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to right, #000, #000)', // Dark background
            }}
        ></motion.div>

    </motion.div>
);

export default LoadingScreen;
