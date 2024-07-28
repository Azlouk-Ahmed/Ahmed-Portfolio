import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';

const upperVariants = {
  hidden: { x: '-100%', transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } },
  visible: { 
    x: 0, 
    transition: { 
      duration: 1, 
      ease: [0.42, 0, 0.58, 1]
    }
  }
};

const lowerVariants = {
  hidden: { x: '100%', transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } },
  visible: { 
    x: 0, 
    transition: { 
      duration: 1, 
      ease: [0.42, 0, 0.58, 1]
    }
  }
};

function Projects({ isVisible }) {
  return (
    <div className="y-center-proj">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="title2 ta-c">sneak of my projects</div>
        <div className="df-c mt-3 projects">
          <motion.div 
            className="projectslide upper" 
            variants={upperVariants}
            animate={isVisible ? "visible" : "hidden"}
          >
            <img src={require('../../assets/img/project1a (1).png')} alt="Project 1" />
            <img src={require('../../assets/img/project1a (2).png')} alt="Project 2" />
            <img src={require('../../assets/img/project1a (3).png')} alt="Project 3" />
            <img src={require('../../assets/img/project1a (4).png')} alt="Project 4" />
            <img src={require('../../assets/img/project1a (5).png')} alt="Project 5" />
          </motion.div>
          <motion.div 
            className="projectslide down" 
            variants={lowerVariants}
            animate={isVisible ? "visible" : "hidden"}
          >
            <img src={require('../../assets/img/project1a (6).png')} alt="Project 9" />
            <img src={require('../../assets/img/project1a (7).png')} alt="Project 6" />
            <img src={require('../../assets/img/project1a (8).png')} alt="Project 7" />
            <img src={require('../../assets/img/project1a (9).png')} alt="Project 8" />
            <img src={require('../../assets/img/project1a (1).png')} alt="Project 10" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
