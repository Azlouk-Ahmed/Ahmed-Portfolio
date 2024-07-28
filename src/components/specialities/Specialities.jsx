import React from 'react';
import { IoMdBrush } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import './spec.css';

const specialties = [
  {
    title: "Frontend Developer",
    description: "Expert in creating interactive and responsive user interfaces using modern web technologies.",
    icon: <IoMdBrush />
  },
  { 
    title: "Backend Developer",
    description: "Skilled in implementing visually appealing and functional web applications.",
    icon: "</>"
  },
  {
    title: "Mobile Apps Developer",
    description: "At the beginning of my journey in developing cross-platform mobile applications, aiming to create seamless user experiences.",
    icon: <IoPhonePortraitOutline />
  }
];

function Specialities({ isVisible }) {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: specialties.length * 0.3 + 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container y-center">4
      <div className="df-c">
    <div className="title2 ta-c">who am i ?</div>
      <div className="df gap-3 mt-3 x-around ai-s spec-box">
        {specialties.map((specialty, index) => (
          <motion.div
            className="box df-c"
            key={index}
            custom={index}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={boxVariants}
          >
            <div className="icon-container">
              {specialty.icon}
            </div>
            <div className="title2">
              {specialty.title}
            </div>
            <p>
              {specialty.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="x-center btn mt-3"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={buttonVariants}
      >
        Check GitHub
      </motion.div>
      </div>
    </div>
  );
}

export default Specialities;
