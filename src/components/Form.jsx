import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea rows={6} placeholder='Enter your message here'/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form