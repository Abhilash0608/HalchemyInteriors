import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AchievementsSection = ({ workAchievements }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // State to hold counts for UI updates
  const [counts, setCounts] = useState(workAchievements.map(() => 0));
  
  // Ref to track counts without causing re-renders
  const countsRef = useRef(workAchievements.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const duration = 1.5; // Duration of the counting animation

      workAchievements.forEach((item, index) => {
        const increment = Math.ceil(item.title / (duration * 60)); // Increment per frame
        let currentCount = countsRef.current[index]; // Use ref for mutable count

        const countUp = () => {
          if (currentCount < item.title) {
            currentCount += increment;
            if (currentCount > item.title) {
              currentCount = item.title; // Ensure we don't exceed the target
            }
            countsRef.current[index] = currentCount; // Update ref
            setCounts([...countsRef.current]); // Trigger re-render
            requestAnimationFrame(countUp);
          }
        };
        countUp();
      });
    }
  }, [isInView, workAchievements]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="border-div flex gap-8">
      {workAchievements.map((item, index) => (
        <div key={index} className="service-card flex flex-col gap-4">
          {/* Title with Counting Effect */}
          <div className="flex items-center gap-2">
            <motion.h1
              className="text-[36px]"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <motion.span className="count-number">
                {counts[index]} {/* Display the count */}
              </motion.span>
            </motion.h1>
            <p>+</p>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="header-line bg-gray-200 h-1 relative overflow-hidden"
            style={{ width: "100%" }}
          >
            <motion.div
              className="progress-bar bg-[#8A7C56] h-full absolute"
              initial={{ width: "0%" }}
              animate={{
                width: isInView ? `${item.title}%` : "0%",
              }}
              transition={{
                delay: index * 0.3,
                duration: 1.5,
                ease: "easeOut",
              }}
            ></motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="text-[18px] text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            transition={{ delay: index * 0.4, duration: 0.8 }}
          >
            {item.description}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsSection;
