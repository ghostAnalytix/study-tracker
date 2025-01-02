import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../components/images/LOGO.jpg"
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img
            src={LOGO}
            alt="Neuro Ghost Diary Logo"
            height="32"
          />
          Neuro Ghost Diary
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/courses">Courses</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
