import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import  {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <img src={bg} alt="Profile" className="bg" />
        <div className="introContent">
            <div className="hello">Hello,</div>
            <div className="introText">I'm<span className="introName"> Banu</span><br />Web Developer</div>
            <p className="introPara">Experienced web developer passionate <br /> about crafting intuitive, functional websites that <br /> elevate user experiences through innovative <br /> design and robust coding.</p>
            <Link><button className="btn">Hire Me</button></Link>
        </div>  
    </section>
  )
}

export default Intro;