import React from 'react';
import Navbar from '../components/Navbar';
import Home_Image from '../components/Home_Image';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Home_Image />
      <Footer />
    </div>
  )
}

export default Home