import React from 'react';

import './work_card.css';
import Project_card from './Project_card';
import projectData from './projectData';

const Work_card = () => {
  return (
    <div className='p-c'>
            <div className='p-c-container'>
                {
                    projectData.map((ele)=><Project_card key={ele.name} name={ele.name} img_url={ele.img_url} detail={ele.detail} src={ele.source} link={ele.url}/>)
                }
            </div>
    </div>
  )
}

export default Work_card