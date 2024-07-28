import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, zoomIn } from '../../utils/motion'

function Experience3() {
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
          <div className="title3">End Of Studies Intership</div>
          <p>Jan 2023 - June 2023</p>
        </div>
        <div className="exp-content">
          <motion.div
            className="dot"
            variants={zoomIn(1, 1)}
            style={{ background: "#EEC048" }}
          ></motion.div>
          <div className="df-c">
            <div className="title3">Full Stack developer at WEGO</div>
            <p>
            During my end-of-studies internship at World Engineering &
            General Outsourcing in Mahdia in February 2024, I developed a
            comprehensive freelance application using the MERN stack. This
            application included features such as
            <ul>
                <li>real time notifications</li>
                <li>real time chat</li>
                <li>CV dowload/generation</li>
                <li>invoices dowload/generation</li>
                <li>third party authentifications</li>
                <li>Admin dashabord , client service dashboard and users dashboard</li>
                <li>Users acitivity tracking</li>
                <li>Reports and ban</li>
                <li>check github for more details</li>
            </ul>
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
            <div className="df"><div className="title4">project link </div><a href="https://github.com/Azlouk-Ahmed/LEADER-POS/tree/main/LeaderPos_website" target="_blank"><img className="imglink" src={require("../../assets/img/project4.png")} /></a></div>
          </div>
        </div>
      </div>
      </motion.div>
  )
}

export default Experience3