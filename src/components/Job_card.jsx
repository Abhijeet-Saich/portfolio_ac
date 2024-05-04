import React from 'react';
import { Link } from 'react-router-dom';

import './job_card.css';

const Job_card = () => {
  return (
    <div className='job'>
        <div className='card-container'>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='price'>10$</p>
                <p>- 3 Days -</p>
                <p>- 3 Days -</p>
                <p>- 3 Days -</p>
                <Link to='/contact'><button className='btn'>Buy Now</button></Link>
            </div>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='price'>10$</p>
                <p>- 3 Days -</p>
                <p>- 3 Days -</p>
                <p>- 3 Days -</p>
                <Link to='/contact'><button className='btn'>Buy Now</button></Link>
            </div>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='price'>10$</p>
                <p>- 3 Days -</p>
                <p>- 3 Days -</p>
                <p>- 3 Days -</p>
                <Link to='/contact'><button className='btn'>Buy Now</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Job_card