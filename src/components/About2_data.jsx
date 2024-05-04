import React from 'react';
import { Link } from 'react-router-dom';
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { TbBriefcase2 } from "react-icons/tb";
import { FiAward } from "react-icons/fi";

import './about2_data.css';
import profile_pic from '../assets/bg_image/github_profile.jpeg';

const About2_data = () => {

  return (
    <div className='about-section'>

        {/* <h2 className="about-title">My Introduction</h2> */}

        <div className='about-container'>
          
          <img src={profile_pic} alt="" className='about-image'/>

          <div className='about-data'>
            <div className='about-info'>
                <div className='about-box'>
                    <FiAward className="about-icon" />
                    <h3>Experience</h3>
                    <span>2+ years working</span>
                </div>
                <div className='about-box'>
                    <TbBriefcase2 className="about-icon" />
                    <h3>Completed</h3>
                    <span>5+ Projects</span>
                </div>
                <div className='about-box'>
                    <BiSupport className="about-icon" />
                    <h3>Support</h3>
                    <span>Online 24/7</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Deleniti sed soluta officiis nam 
                maxime quaerat nemo labore esse rem quidem 
            </p>
            <Link>
                <button className='btn'>
                    <span>CV</span>
                    <IoDocumentTextOutline size={20}/>
                </button>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default About2_data