import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Aboutus = () => {
    return (
        <div className="w-[90vw] m-auto px-2 py-4">
            <motion.div
                className="aboutus-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col justify-center items-center gap-8 px-8">
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

                    {/* Feature Cards (Using notification-style divs) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <div className="space-y-4">
                            {/* Flat 10-year warranty */}
                            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md shadow-md">
                                <h2 className="text-xl font-semibold">1. Flat 10-year warranty</h2>
                                <p className="text-gray-700">Stay worry-free with our warranty policy on modular products.</p>
                                <p className="text-gray-700">Up to 1-year on-site service warranty.</p>
                                <p className="text-gray-700">Warranty on-site services such as painting, electrical, plumbing, and more.</p>
                            </div>

                            {/* Aqua Bloc Technology */}
                            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-md shadow-md">
                                <h2 className="text-xl font-semibold">2. Aqua Bloc Technology</h2>
                                <p className="text-gray-700">No moisture enters the panels of your modular cabinets.</p>
                                <h3 className="font-semibold">Anti-bubble Technology</h3>
                                <p className="text-gray-700">Super seamless panels without air bubbles for your modular cabinets.</p>
                            </div>

                            {/* Cost-effective solutions */}
                            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md shadow-md">
                                <h2 className="text-xl font-semibold">3. Cost-effective solutions</h2>
                                <p className="text-gray-700">We provide competitive pricing options compared to traditional interior design services, making professional design accessible to a wider audience.</p>

                                {/* Transparent Pricing */}
                                <div className="mt-2">
                                    <h3 className="font-semibold">Transparent pricing</h3>
                                    <p className="text-gray-700">No hidden fees, all costs are outlined upfront, so customers know exactly what they are paying for, avoiding surprises.</p>
                                </div>

                                {/* Special Discounts */}
                                <div className="mt-2">
                                    <h3 className="font-semibold">Special discounts and offers</h3>
                                    <p className="text-gray-700">Periodic sales, seasonal offers, or package discounts for returning clients or referrals.</p>
                                    <p className="text-gray-700">Special promotions for clients who engage in multiple services (e.g., design and execution).</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Aboutus;
