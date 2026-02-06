import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import HeroImage from "../assets/hero-image.png"; // Replace with your image path

export default function Hero() {
  const roles = ["Frontend Developer", "Full Stack Developer", "Software Developer", "Team Lead","Constant Learner"];
  const [current, setCurrent] = useState(0);

  // Loop through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % roles.length);
    }, 2000); // 2 seconds per role
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="h-screen flex items-center justify-center pt-[70px]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-8">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={HeroImage}
            alt="Karri Susmitha Lakshmi"
            className="w-72 md:w-96 rounded-full shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="text-center lg:text-left px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Hello, I'm
          </motion.h1>

          {/* Name slides in */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6"
          >
            Karri Susmitha Lakshmi
          </motion.h1>

          <div className="min-h-[2.5rem] md:min-h-[3rem]">
  <AnimatePresence mode="wait">
    <motion.p
      key={roles[current]}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl text-lavender font-bold"
    >
      {roles[current]}
    </motion.p>
  </AnimatePresence>
</div>
        </motion.div>
      </div>
    </section>
  );
}
