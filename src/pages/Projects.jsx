import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Job_card from '../components/Job_card';
import Work_card from '../components/Work_card';
import project_img from '../assets/bg_image/project.jpg'

const Projects = () => {

  const project_heading = "Projects";

  return (
    <div>
      <Navbar />
      <Intro heading={project_heading} img={project_img}/>
      <Work_card />
      <Job_card />
      <Footer />
    </div>
  )
}

export default Projects