import React from 'react';
import './contact.css';
import Facebook from '../../assets/facebook-icon.png';
import LinkedIn from '../../assets/linkedin-icon.png';
import Github from '../../assets/github-icon.png';

const Contact = () => {
  return (
    <section id="contactPage">
        {/* <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
              I have had the opportunity to work with a diverse group of companies.
              Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
              <img src={} alt="" className="clientImg" />
       
              <img src={} alt="" className="clientImg" />
              <img src={} alt="" className="clientImg" />
              <img src={} alt="" className="clientImg" />
            </div>
        </div>  */}
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm">
              <input type="text" className="name" placeholder='Your Name' />
              <input type="email" className="email" placeholder='Your Email' />
              <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='send' className='submitBtn'>Submit</button>
              <div className="links">
                <img src={Facebook} alt="facebook" className="link" />
                <img src={LinkedIn} alt="LinkedIn" className="link" />
                <img src={Github} alt="Github" className="link" />
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact; 