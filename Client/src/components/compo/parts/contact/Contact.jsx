import React from 'react';
import img1 from './bg.png';
import './Contact.css';



const Contact = () => {
  return (
    <div className='contact_full'>
      <div className="contact">

        <div className='main_con'>
          <div className='con_left'>
            <div className='inner_con'>
              <img src={img1} class="card_img_co" alt="..." />
            </div>

          </div>

          <div className='con_right'>
            <h1 className="login_title">Contact Us</h1>
            <input className="input_login_c" type="text" name="name" placeholder="Your Name"></input>
            <input className="input_login_c" type="text" name="email" placeholder="Your Email"></input>
            <input className="input_login_c" type="password" name="Phone-no" placeholder="Phone-no"></input>
            <input className="input_login_message" type="password" name="Message" placeholder="Message"></input>
            <button className="button_con">Send</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact