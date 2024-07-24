import React from 'react';
import './works.css';
// import Portfolio1 from '../../assets/portfolio-1.jpg';
// import Portfolio2 from '../../assets/portfolio-2.jpg';
// import Portfolio3 from '../../assets/portfolio-3.jpg';
// import Portfolio4 from '../../assets/portfolio-4.jpg';
// import Portfolio5 from '../../assets/portfolio-5.jpg';
// import Portfolio6 from '../../assets/portfolio-6.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Projects</h2>
        <span className="workSesc">My portfolio features diverse projects including a Flutter mobile app for seamless user experiences, a Python data analysis tool for insights, an OpenWeather API-integrated weather app, Spotify API-driven music recommendation system, Firebase-powered backend for scalability, React JS frontend for dynamic UI, and Spring Boot with MySQL for robust backend services.</span>

        <div className="projectContent">
           <p>Auto-Play music system</p>
           <p>This AI-powered system offers personalized
            music recommendations based on user
            preferences and environment</p>
           <p>Flutter,python, openWeather
           API, Spotify API, Firebase</p>
           <p>Github link:
           github.com/BanuNathy/Auto_Play.git</p>
        </div> 

        <div className="projectContent">
           <p>Project B</p>
           <p>Description Paragraph</p>
           <p>Skills</p>
           <p>Source(Github)</p>
        </div> 

        <div className="projectContent">
           <p>Project C</p>
           <p>Description Paragraph</p>
           <p>Skills</p>
           <p>Source(Github)</p>
        </div> 

        <div className="projectContent">
           <p>Project D</p>
           <p>Description Paragraph</p>
           <p>Skills</p>
           <p>Source(Github)</p>
        </div> 

        <button className="workBtn">See More</button>
    </section>
  );

}

export default Works;









{/* <div className="worksImgs">
            <img src={Portfolio1}alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
            <div className='p-one'> */}
            {/* </div>
            
        </div> */}