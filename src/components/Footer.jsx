import React from 'react';
import { IoHome,IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa6";

import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>

            <div className='left-box'>
                <div className='location'>
                    <h4><IoHome size={20} style={{color : "#fff",marginRight : "1rem"}} />Bengaluru, India</h4>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color : "#fff",marginRight : "1rem"}} />+91-9462826477</h4>
                </div>
                <div className='email'>
                    <h4><IoMail size={20} style={{color : "#fff",marginRight : "1rem"}} />abhijeetsaich@gmail.com</h4>
                </div>
            </div>

            <div className='right-box'>
                <h4>About my company</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem cupiditate omnis aperiam deleniti hic beatae tempora error sed placeat rem repellendus vitae id, tempore, aliquid libero nostrum quasi voluptate!</p>
                <div className='social'>
                    {/* <FaFacebook size={30} style={{color : "#fff",marginRight : "1rem"}} /> */}
                    <FaGithub size={30} style={{color : "#fff",marginRight : "1rem"}} />
                    <FaLinkedin size={30} style={{color : "#fff",marginRight : "1rem"}} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer