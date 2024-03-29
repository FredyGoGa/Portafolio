import React from "react";
import "./navbar.css";

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
      window.scrollTo({top: 0, lef:0, behavior:"smooth"});
    };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
    <div className="navbar-logo" onClick={toTheTop}>
      Start
    </div>
  </nav>
  );
};

export default Navbar;