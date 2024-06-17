import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience</span>
         <div className="skillBars">
            <div className="skillBar">
                <img src="UIDesign" alt="UIDesign" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src="WebDesign" alt="WebDesign" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>Web Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src="AppDesign" alt="AppDesign" className="skillBarImg" />
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