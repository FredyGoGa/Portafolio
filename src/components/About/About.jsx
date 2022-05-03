import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>let me tell you something about me</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis ipsum neque aperiam suscipit quis a, ea dolor ullam, nostrum adipisci repudiandae quasi nemo. Ab eaque nemo veritatis tempora earum?</p>

        </div>
        <div className="about-img">
            <img src= "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg"  alt="about"/>
        </div>
    </div>
  )
}

export default About