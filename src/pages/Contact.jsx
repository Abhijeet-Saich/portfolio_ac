import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Form from '../components/Form';
import contact_img from '../assets/bg_image/contact.jpg';

const Contact = () => {

  const contact_heading = "Contact Me";
  
  return (
    <div>
      <Navbar />
      <Intro heading={contact_heading} img={contact_img}/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact