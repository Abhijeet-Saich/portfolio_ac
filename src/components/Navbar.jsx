import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import './navbar_style.css';

const Navbar = () => {

  const [ham,setHam] = useState(true);
  const [scroll,setScroll] = useState(false);

  const hamHandler = () => {
    setHam(!ham);
  }

  const scrollHandler = () =>{
    if(window.scrollY >= 10) setScroll(true);
    else setScroll(false);
  }

  window.addEventListener("scroll",scrollHandler);

  return (
    <div className={scroll ? 'header header-bg' : 'header'}>
      <Link to='/'><h1>abhi.</h1></Link>
      <ul className={ham ? "nav-items  " : "nav-items nav-items-open"}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className='nav-menu' onClick={hamHandler}>
        {!ham ? <ImCross  size={20} style={{color : "#fff"}}/> : <FaHamburger size={20} style={{color : "#fff"}} /> }
      </div>
    </div>
  )
}

export default Navbar