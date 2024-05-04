import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Form from '../components/Form';
import contact_img from '../assets/bg_image/contact.jpg';

const Contact = () => {

  const contact_heading = "Contact Me";
  const contact_img = "https://images.unsplash.com/photo-1577567751159-fdaaba7b2032?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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