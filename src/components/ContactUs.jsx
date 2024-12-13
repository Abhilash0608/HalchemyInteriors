import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailIcon from "../assets/contact/email.svg";
import messageIcon from "../assets/contact/message.svg";
import nameIcon from "../assets/contact/name.svg";
import contactIcon from "../assets/contact/contactus.svg";

const ContactUs = () => {
  const [focusedField, setFocusedField] = useState("");

  const variants = {
    initial: { opacity: 0, x: "", y: "-100%" },
    animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  };

  return (
    <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8 border-none md:border-yellow-700 lg:border-yellow-700 rounded-2xl py-12 md:px-6  mx-auto">
      {/* Left Form */}
      <div className="w-full flex flex-col">
        <h1 className="text-center text-xl l md:text-4xl lg:text-4xl mb-4 text-[#8A7C56]">Contact us</h1>
        <form className="w-full flex flex-col gap-8">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-yellow-700 p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField("")}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-yellow-700 p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="border border-yellow-700 p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
              rows="4"
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#8A7C56] text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Right SVG Display */}
      <div className="flex items-center justify-center hidden md:block">
        <AnimatePresence mode="wait">
          {focusedField === "name" && (
            <motion.img
              key="name"
              src={nameIcon}
              alt="Name Icon"
              className="w-64 h-64"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
          {focusedField === "email" && (
            <motion.img
              key="email"
              src={emailIcon}
              alt="Email Icon"
              className="w-64 h-64"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
          {focusedField === "message" && (
            <motion.img
              key="message"
              src={messageIcon}
              alt="Message Icon"
              className="w-64 h-64"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
          {focusedField === "" && (
            <motion.img
              key="default"
              src={contactIcon}
              alt="Contact Icon"
              className="w-64 h-64  "
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactUs;
