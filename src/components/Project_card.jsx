import React from 'react';
// import './work_card.css';
import { NavLink } from 'react-router-dom';

const Project_card = ({name,img_url,detail}) => {

  
  return (
            <div className='p-c-card'>
                <img src={img_url} alt=""/>
                <h2 className='p-heading'>{name}</h2>
                <div>
                    <p className='p-detail'>{detail}</p>
                    <div className='p-buttons'>
                        <NavLink to='https://www.linkedin.com'><button className="p-btn btn">View</button></NavLink>
                        <NavLink to='https://www.linkedin.com'><button className="p-btn btn">Source</button></NavLink>
                    </div>
                </div>
            </div>
  )
}

export default Project_card