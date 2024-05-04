import React from 'react';

import './work_card.css';
import Project_card from './Project_card';
import porjectData from './projectData';

const Work_card = () => {
  return (
    <div className='p-c'>
            <div className='p-c-container'>
                {
                    porjectData.map((ele)=><Project_card name={ele.name} img_url={ele.img_url} detail={ele.detail}/>)
                }
            </div>
    </div>
  )
}

export default Work_card