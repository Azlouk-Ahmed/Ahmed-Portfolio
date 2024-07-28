import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Quote from "./../quote/Quote"
import "./hero.css";
import Navbar from '../navbar/Navbar';

function Hero({ isVisible }) {
  const variants = {
    hidden: { opacity: 0, y: -3 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%" },
  };

  const centerImageVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "-50%" },
  };

  return (
    <>
    <div className="df-c container">
    <div className="hero df custom-cursor ">
      <div className="intro df-c">
        <div className="titlecontainer">
          <motion.div
            className="title"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: 0, duration: 0.5 }}
          >
            Welcome to My
          </motion.div>
          <motion.div
            className="title1"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Portfolio
          </motion.div>
        </div>
        <p>
          As a freelancer and student specializing in MERN development, I focus on crafting clean, efficient code and intuitive designs.
          <br />
          <br /> My passion lies in backend development, where I strive to create robust solutions. I am eager to collaborate and contribute to impactful projects that leverage my skills and drive for innovation.
        </p>
        <motion.div
          className="btn"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={buttonVariants}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Contact Me
        </motion.div>
      </div>

      <div 
        className="gradient-circle">
        <div className="content">
          <div className="df gap-3">
            <motion.div
              className="df-c left gap-3"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={imageVariants}
              transition={{ type: "spring", stiffness: 100, duration: 0.7, ease: "easeOut" }}
            >
              <img src={require("../../assets/img/img1.png")} alt="Image 1" />
              <img src={require("../../assets/img/img2.png")} alt="Image 2" />
              <img src={require("../../assets/img/img3.png")} alt="Image 3" />
              <img src={require("../../assets/img/img4.png")} alt="Image 4" />
            </motion.div>

            <motion.div
              className="df-c center gap-3"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={centerImageVariants}
              transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <img src={require("../../assets/img/img1.png")} alt="Image 1" />
              <img src={require("../../assets/img/img4.png")} alt="Image 4" />
              <img src={require("../../assets/img/img5.png")} alt="Image 5" />
              <img src={require("../../assets/img/img6.png")} alt="Image 6" />
            </motion.div>

            <motion.div
              className="df-c right gap-3"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={imageVariants}
              transition={{ type: "spring", stiffness: 100, duration: 0.7, ease: "easeOut" }}
            >
              <img src={require("../../assets/img/img4.png")} alt="Image 4" />
              <img src={require("../../assets/img/img7.png")} alt="Image 7" />
              <img src={require("../../assets/img/img8.png")} alt="Image 8" />
              <img src={require("../../assets/img/img9.png")} alt="Image 9" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
      <Quote quote={"With great power comes great electricity bill"} by={"- Dr. Who"}/>

    </div>
    </>
  );
}

export default Hero;
