import React from 'react'
import "./contact.css"
import { CgUser } from 'react-icons/cg'
import { MdEmail, MdSubject } from 'react-icons/md'

function Contact() {
  return (
    
    <div className='pr contact'>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
          <path d="M 0,600 L 0,0 C 49.82167961524233,65.8708102108768 99.64335923048466,131.7416204217536 156,161 C 212.35664076951534,190.2583795782464 275.2482426933037,182.90432852386238 332,214 C 388.7517573066963,245.09567147613762 439.36366999630036,314.6410654827969 484,329 C 528.6363300036996,343.3589345172031 567.2970773214947,302.53140954495007 614,302 C 660.7029226785053,301.46859045504993 715.448020717721,341.2332963374028 782,318 C 848.551979282279,294.7667036625972 926.9108398076212,208.5354051054384 982,196 C 1037.0891601923788,183.4645948945616 1068.9086200517943,244.62508324084354 1112,282 C 1155.0913799482057,319.37491675915646 1209.4546799852014,332.96426193118754 1266,282 C 1322.5453200147986,231.03573806881246 1381.2726600073993,115.51786903440623 1440,0 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#f5dbcf" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path>
          </svg>
        <div className="headercontact df-c">
            <div className="title3 ta-c">get in touch</div>
            <div className="ta-c">start by saying hi</div>

        </div>
        <div className="mt-3 df contactform">
            <div className="details ">
                <div className="df-c">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facere fugit natus? Hic quisquam itaque eligendi impedit eaque eveniet corrupti!</p>
                    <div>or contact me via</div>
                    <ul className='df-c'>
                        <li>linked in</li>
                        <li>facebook</li>
                        <li>whatsapp</li>
                        <li>github</li>
                    </ul>
                </div>
            </div>
                <div className="form df-c">
                    <div className="df jc-sb ">
                        <div className="label df border">
                            <CgUser />
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className="label df border">
                            <CgUser />
                            <input type="text" placeholder='Family Name' />
                        </div>
                    </div>
                    <div className="label df border">

                            <MdEmail />
                            <input type="text"  placeholder='Email' />
                    </div>
                    <div className="label df border">

                            <MdSubject />
                            <input type="text" placeholder='Subject' />
                    </div>
                    <textarea name=""  placeholder='Message' id=""></textarea>
                    <button>
                        send message
                    </button>
                </div>
        </div>
    </div>
    
  )
}

export default Contact