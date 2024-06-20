import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">As a web development software engineer, I specialize in crafting robust, user-friendly websites and applications. Proficient in both front-end and back-end, I bring creativity and technical expertise to deliver seamless digital solutions. Let's collaborate to bring your ideas to life!</span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src="WebDesign" alt="" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>Web Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src="AppDesign" alt="" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>App Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>

            </div>  
    </section>
  );
}

export default Skills;