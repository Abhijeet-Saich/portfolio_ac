import React from 'react';
import './intro_image.css'

const Intro = ({heading,text,img}) => {
  return (
      <div className='intro-image' style={{backgroundImage : `url(${img})`}}>
          <div className="intro-heading">
              <h1>{heading}</h1>
              {/* <p>{text}</p> */}
          </div>
      </div>
  )
}

export default Intro