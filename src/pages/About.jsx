import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import About2_data from '../components/About2_data';
import about_img from '../assets/bg_image/about.jpg';

const About = () => {

  const about_heading = "About";
  const about_text = "about me...";
 
  return (
    <div>
      <Navbar />
      <Intro heading={about_heading} img={about_img}/>
      <About2_data />
      <Footer />
    </div>
  )
}

export default About