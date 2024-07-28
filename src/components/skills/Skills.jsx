import React from 'react'
import "./skills.css"
import { fadeIn } from '../../utils/motion'
import { motion } from "framer-motion"
import { RiSpeakLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { SiNginxproxymanager } from "react-icons/si";

function Skills() {
  return (
    <div className='container'>
        <div className="skills-heading pr">
         
                
                    <div className="df skills--heading g-header">
                        <img src={require("../../assets/img/arrowheader.png")} className='arrowheader' alt="" srcset="" />
                            <div className="title1">skills overview</div>
                            
                    </div>
                <div className="df skills--heading pls ai-s">
                    <img src={require("../../assets/img/arrowbody.png")} className='arrowbody' alt="" srcset="" />
                    
                    
                <div className="techskillscont mt-3">
                <div className="techskillsbox tall">
                        <div className="categ">Tools</div>
                        <div className="skillcontent">
                            <span>GIT</span>
                            <span>GITHUB</span>
                            <span>GITLAB</span>
                            <span>VS CODE</span>
                            <span>INTELLIJ</span>
                            <span>TRELLO</span>
                            <span>POSTMAN</span>
                            <span>SWAGGER</span>
                            <span>FIGMA</span>
                            <span>DREAMWAVER</span>
                            <span>UML</span>
                        </div>
                    </div>
                    <div className="techskillsbox">
                        <div className="categ">programming languages</div>
                        <div className="skillcontent">
                            <span>python</span>
                            <span>c</span>
                            <span>c#</span>
                            <span>c++</span>
                            <span>Dart</span>
                            <span>java</span>
                            <span>javaScript</span>
                            <span>PHP</span>
                        </div>
                    </div>
                    <div className="techskillsbox">
                        <div className="categ">Libraries, Frameworks, and SDK</div>
                        <div className="skillcontent">
                            <span>React JS</span>
                            <span>Express JS</span>
                            <span>Node JS</span>
                            <span>Spring Boot</span>
                            <span>Flutter</span>
                            <span>JEE</span>
                        </div>
                    </div>
                    
                    <div className="techskillsbox">
                        <div className="categ">programming languages</div>
                        <div className="skillcontent">
                            <span>python</span>
                            <span>c</span>
                            <span>c#</span>
                            <span>c++</span>
                            <span>Dart</span>
                            <span>java</span>
                        </div>
                    </div>
                    <div></div>
                    <div className="techskillsbox wide">
                        <div className="categ">Technologies</div>
                        <div className="skillcontent">
                            <span>Html</span>
                            <span>Css</span>
                            <span>Tailwind</span>
                            <span>Bootstrap</span>
                            <span>SCSS</span>
                        </div>
                    </div>
                    <div></div>
                    <div className="techskillsbox">
                        <div className="categ">Architechtures</div>
                        <div className="skillcontent">
                            <span>MVC</span>
                            <span>Atomic Architeture</span>
                        </div>
                    </div>

                </div>
                </div>
                

           
        </div>
    </div>
  )
}

export default Skills