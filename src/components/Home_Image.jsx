import React from 'react';
import { Link } from 'react-router-dom';
import bg_img from '../assets/bg_image/home.jpg'

import './home_image.css';

const Home_Image = () => {
  
  return (
    <div className='home-intro'>
        <div className='bg-image-box'>
            <img src={bg_img} alt="" className="bg-image" />
        </div>
        <div className='content'>
            <p>Hi, I am Abhijeet</p>
            <h1>front-End Developer.</h1>
            <div>
                <Link to="/contact"><button className='btn'>Contact</button></Link>
                <Link to="/about"><button className='btn btn-light'>Projects</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home_Image