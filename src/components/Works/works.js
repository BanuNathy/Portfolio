import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/portfolio-3.jpg';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/portfolio-5.jpg';
import Portfolio6 from '../../assets/portfolio-6.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Projects</h2>
        <span className="workSesc">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        {/* <div className="worksImgs">
            <img src={Portfolio1}alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
            <div className='p-one'> */}
              <h2>Auto-Play music system (Group)</h2>
              <p>This AI-powered system offers personalized
                music recommendations based on user
                preferences and environment.</p>
                <p> Technologies - Flutter,python, openWeather
                API, Spotify API, Firebase</p>
                <p> Github link</p>
            {/* </div>
            
        </div> */}
        <button className="workBtn">See More</button>
    </section>
  );

}

export default Works;