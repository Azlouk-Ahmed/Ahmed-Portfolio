import React from 'react'
import "./edu.css"
import { fadeIn, zoomIn } from '../../utils/motion'
import { motion } from 'framer-motion'
import { IoIosArrowForward } from "react-icons/io";

function Education() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    
    viewport={{ once: false, amount: 0.1 }}
    className='education container'>
        <div className="title2 ta-c">education</div>
        <motion.div
        variants={fadeIn("right", "tween", 1, 1.5)}
        className="dashedlinehoriz"
      ></motion.div>
      <IoIosArrowForward className='arrow' />
      
          
        <div className="df educ-cont">
      <div className="educ df-c">
      <motion.div
            className="dot two"
            variants={zoomIn(1, 1)}
            style={{ background: "#F2704E" }}
          ></motion.div>
        <div className="df">
        <div className="imgcont">
            <img src={require("../../assets/img/lmt.jpeg")} />
        </div>
        <div className="df-c g-0">
            <div className="title4">lycee mixte tataouine</div>
            <div>sep 2018 - juin 2021</div>
        </div>


        </div>
        <p>
        Pendant mon parcours au Lycée Mixte Tataouine, j'étais en bac informatique et j'ai obtenu mon baccalauréat avec une moyenne de <strong>12.72</strong>
        </p>
        
      </div>
      
      <div className="educ df-c">
      <motion.div
            className="dot one"
            variants={zoomIn(1, 1)}
            style={{ background: "#286F6C" }}
          ></motion.div>
        <div className="df">
        <div className="imgcont">
            <img src={require("../../assets/img/isetma.png")} />
        </div>
        <div className="df-c g-0">
            <div className="title4">ISET Mahdia</div>
            <div>sep 2021 - juin 2024</div>
        </div>


        </div>
        <p>
        J'ai poursuivi mes études à l'ISET Mahdia, où j'ai participé à plusieurs clubs et acquis des compétences en travail d'équipe. Par la suite, j'ai obtenu mon diplôme de licence avec une moyenne de <strong>13,32</strong>.
        </p>
        
      </div>
        </div>
    </motion.div>
  )
}

export default Education