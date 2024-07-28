import React from 'react'
import { fadeIn, zoomIn } from '../../utils/motion'
import { motion } from 'framer-motion'

function Experience2() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="df-c exp container mt-3"
    >
      <motion.div
        variants={fadeIn("down", "tween", 0, 1.5)}
        className="dashedline"
      />
      
    <div className="experiencecontainer mt-3">
        <div className="date df-c">
          <div className="title3">Advanced Intership</div>
          <p>7 Jan 2023 - 7 feb 2023</p>
        </div>
        <div className="exp-content">
          <motion.div
            className="dot"
            variants={zoomIn(1, 1)}
            style={{ background: "#F2704E" }}
          ></motion.div>
          <div className="df-c">
            <div className="title3">MERN Developer at ALFA COMPUTERS</div>
            <p>
            During my advanced internship at Alpha Computers, I had the
            opportunity to participate in developing a dynamic e-commerce
            web application using the MERN stack. I contributed to the
            design, development, and integration of various components.

            </p>
            <div className="title4">technologies</div>
              <div className="df">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    alt="express"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="mongodb"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
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
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>

             
            
          
            </div>
            <div className="df"><div className="title4">project link  </div><a href="https://github.com/Azlouk-Ahmed/LEADER-POS/tree/main/LeaderPos_website" target="_blank"><img className="imglink" src={require("../../assets/img/project3.png")} /></a></div>
          </div>
        </div>
      </div>
      </motion.div>
  )
}

export default Experience2