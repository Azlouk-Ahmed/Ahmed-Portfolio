import React from "react";
import "./skills.css";
import { boxVariants, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { RiSpeakLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { SiNginxproxymanager } from "react-icons/si";
import { CircularProgressbar } from "react-circular-progressbar";
import svg from "./../../wave.svg";

function Skills2({ isVisible }) {
    
  return (
    <div className="container">
      <div className="df skills--heading pls ai-s">
        <img
          src={require("../../assets/img/arrowbody.png")}
          className="arrowbody"
          alt=""
          srcset=""
        />
        <div className="df-c skillsbox mt-3">
          <div className="grid-wrapper">

          
          <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={boxVariants(0,0.5)}
          className="df softskillbox cyan ">
          <img src={svg} alt="Wave background" />
          <div className="radialBar ">
            <CircularProgressbar
          value={66}
          text={`${66}%`}
          
        />
      </div>
      <div>
            <div className="title3 df">
              Communication <RiSpeakLine />
            </div>
            <p>
              My communication is effective and focused, ensuring I convey
              precisely what needs to be communicated.
            </p>
            </div>
        
          </motion.div>
          <div className="softskillbox tall purple">
          <img src={svg} alt="Wave background" />
            
            <div className="df ">
          <div className="radialBar radialBar2">
            <CircularProgressbar
          value={76}
          text={`${76}%`}
          
        />
      </div>
      <div>
      <div className="title3 df">
              Teamwork <AiOutlineTeam />
            </div>
            <p>
              My communication is effective and focused, ensuring I convey
              precisely what needs to be communicated.
            </p>
            </div>
        
          </div>
          </div>
          <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={boxVariants(0.5,0.5)}
          className="softskillbox orangebox">
          <img src={svg} alt="Wave background" />
            
            <div className="df ">
          <div className="radialBar radialBar3">
            <CircularProgressbar
          value={66}
          text={`${66}%`}
          
        />
      </div>
      <div>
      <div className="title3 df">
              leadership <SiNginxproxymanager />
            </div>
            <p>
              My communication is effective and focused, ensuring I convey
              precisely what needs to be communicated.
            </p>
            </div>
        
          </div>
          </motion.div>
          <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={boxVariants(1,0.5)}
          className="softskillbox purple">
          <img src={svg} alt="Wave background" />
            
            <div className="df">
          <div className="radialBar radialBar4">
            <CircularProgressbar
          value={66}
          text={`${66}%`}
          
        />
      </div>
      <div>
      <div className="title3 df ">
              Attention to Detail <SiNginxproxymanager />
            </div>
            <p>
              My communication is effective and focused, ensuring I convey
              precisely what needs to be communicated.
            </p>
            </div>
        
          </div>
          </motion.div>
          
          <div className="softskillbox tall orangebox">
          <img src={svg} alt="Wave background" />
            
            <div className="df">
          <div className="radialBar radialBar3">
            <CircularProgressbar
          value={66}
          text={`${66}%`}
          
        />
      </div>
      <div>
      <div className="title3 df">
              leadership <SiNginxproxymanager />
            </div>
            <p>
              My communication is effective and focused, ensuring I convey
              precisely what needs to be communicated.
            </p>
            </div>
        
          </div>
          </div>
          <div className="softskillbox big yellow">
          <img src={svg} alt="Wave background" />
            
            <div className="df">
          <div className="radialBar radialBar6">
            <CircularProgressbar
          value={66}
          text={`${66}%`}
          
        />
      </div>
      <div>
      <div className="title3 df">
              leadership <SiNginxproxymanager />
            </div>
            <p>
              My communication is effective and focused, ensuring I convey
              precisely what needs to be communicated.
            </p>
            </div>
        
          </div>
          </div>
          <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={boxVariants(0.7,0.5)}
          className="softskillbox ">
          <img src={svg} alt="Wave background" />
            
            <div className="df">
          <div className="radialBar">
            <CircularProgressbar
          value={66}
          text={`${66}%`}
          
        />
      </div>
      <div>
      <div className="title3 df">
              leadership <SiNginxproxymanager />
            </div>
            <p>
              My communication is effective and focused, ensuring I convey
              precisely what needs to be communicated.
            </p>
            </div>
        
          </div>
          </motion.div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills2;
