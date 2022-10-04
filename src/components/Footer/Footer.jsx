import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-info">
      <h1>Your Name</h1>
      <p>Based in Your City</p>
    </div>
  <div className="footer-contact">
      <h3>Contact me</h3>
      <p>And let's get down to work</p>
    </div>
    <div className="footer-sns">
      <div className="design-by">Design By Your Fredy Gonzalez Garcia</div>
      <div className="sns-links">
        <a href="https://www.linkedin.com/in/fredy-gonzalez-garcia-8392191b2/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a href="https://twitter.com/FredyGonzalezG7" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter twitter"></i>
        </a>
        <a href="https://www.facebook.com/fredy.gonzalezgarcia.180" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook facebook"></i>
        </a>
        <a href="https://github.com/FredyGoGa" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github github "></i>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;