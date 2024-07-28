import React from "react";
import "./goal.css";
import svg from "../../wave.svg";
import { motion } from "framer-motion";
import { IoMdBrush } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";

const goals = [
  {
    title: "freelancing oppertunities",
    description:
      "Expert in creating interactive and responsive user interfaces using modern web technologies.",
    icon: <IoMdBrush />,
  },
  {
    title: "alternances",
    description:
      "Skilled in implementing visually appealing and functional web applications.",
    icon: "</>",
  },
  {
    title: "emploiments",
    description:
      "At the beginning of my journey in developing cross-platform mobile applications, aiming to create seamless user experiences.",
    icon: <IoPhonePortraitOutline />,
  },
];
function Goals({ isVisible }) {
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
  return (
    <div className="contai ">
      <div className="full">
        <img src={svg} className="wave" alt="Wave background" />
        <div className="title1 pr ta-c">what am i looking for</div>
        <div className="df pr mt-3">
          <div className="df gap-3 mt-3 x-around ai-s spec-box">
            {goals.map((goal, index) => (
              <motion.div
                className={`box df-c goal${index}`}
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={boxVariants}
              >
                <div className="icon-container">{goal.icon}</div>
                <div className="title2">{goal.title}</div>
                <p>{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
