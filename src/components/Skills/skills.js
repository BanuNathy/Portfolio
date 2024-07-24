import React from 'react';
import './skills.css';
import CssImage from '../../assets/css.png';
import HtmlImage from '../../assets/html.png';
import ReactImage from '../../assets/react.png';
import SpringbootImage from '../../assets/springboot.png';
import MysqlImage from '../../assets/mysql.png';
import FigmaImage from '../../assets/figma.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Experience</span>

         <div className="skillBars">
               
            <div className='skillImg'>
            <img src={CssImage} alt="" className="css.png" />
            <img src={HtmlImage} alt="" className="html.png" />
            <img src={ReactImage} alt="" className="react.png" />
            </div>
            <div className='skillImg'>
            <img src={MysqlImage} alt="" className="mysql.png" />
            <img src={FigmaImage} alt="" className="figma.png" />
            <img src={SpringbootImage} alt="" className="springboot.png" />
            </div>
            

            <div className="skill">
            <div className="skillBar">
                {/* <img src={UIDesign} alt="" className="skillBarImg" /> */}
                {/* <div className="SkillBarText"> */}
                    <h2>UI/UX Design</h2>
                    <p>My focus is on creating seamless, aesthetically pleasing designs that prioritize user needs and behaviors, ensuring that every interaction feels natural and satisfying. This user-centered approach drives the success of digital products and solutions.</p>
                {/* </div> */}
            </div>                          

            <div className="skillBar">
                {/* <img src="WebDesign" alt="" className="skillBarImg" /> */}
                {/* <div className="SkillBarText"> */}
                    <h2>Web Design</h2>
                    <p>As a web designer, I craft visually appealing, user-friendly websites that balance aesthetics with functionality. My designs prioritize seamless navigation, responsiveness, and a captivating user experience, ensuring each project effectively communicates the client's brand and vision. I transform ideas into dynamic digital realities.</p>
                {/* </div> */}
            </div>

            </div>

            </div>  
    </section>
  );
}

export default Skills;