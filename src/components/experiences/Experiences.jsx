import React from "react";
import "./exp.css";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../utils/motion";

function Experiences() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="df-c exp container mt-3"
    >
      <motion.div
        variants={fadeIn("down", "tween", 1, 1.5)}
        className="dashedline"
      />
      <div className="title2 ta-c">experience</div>
      <div className="experiencecontainer mt-3">
        <div className="date df-c">
          <div className="title3">Introductory internship</div>
          <p>7 Jan 2022 - 7 feb 2022</p>
        </div>
        <div className="exp-content">
          <motion.div
            className="dot"
            variants={zoomIn(1, 1)}
            style={{ background: "#286F6C" }}
          ></motion.div>
          <div className="df-c">
            <div className="title3">frontend developer at leaderpos</div>
            <p>
              During my first introductory internship at LeaderPos, I had the
              opportunity to create a static website for a specific company.
              There, I learned a lot about front-end web development..
            </p>
            <div className="title4">technologies</div>
              <div className="df">
                {" "}
                
               
          
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
               
             
               
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                    alt="figma"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}

              
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
              
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
              
             
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
             
            
          
            </div>
            <div className="df"><div className="title4">project link </div><a href="https://github.com/Azlouk-Ahmed/LEADER-POS/tree/main/LeaderPos_website" target="_blank"><img className="imglink" src={require("../../assets/img/project10.png")} /></a></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experiences;
