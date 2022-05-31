import React from 'react'
import "./About.css";
 import fotoperfil from"../../media/fotoperfil.jpg";

const About = () => {



  
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>let me tell you something about me</h3>
            <p>I'm web developer & programmer living in Facatativa Colombia, i have a diverse set of skills, ranging from design components, to Html5 + Css3 + Javascript + React + Amplify AWS + Git + GitHub.
               I enjoy building everything from small business sites to rich interative web app.  ?</p>


             

        </div>
        <div className="about-img">
            
            {/* <img src= "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg"  alt="about"/> */}
            { <img src={fotoperfil} alt="about"/> }
          </div>
      

    </div>
  )
}

export default About;