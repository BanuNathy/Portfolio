import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import  {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <img src={bg} alt="Profile" className="bg" />
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm<span className="introName"> Banu</span><br />Web Developer</span>
            <p className="introPara">I'm a skilled web designer with experience in creating <br />visually appesling and user friendly websites.</p>
            <Link><button className="btn">Hire Me</button></Link>
        </div>  
    </section>
  )
}

export default Intro;