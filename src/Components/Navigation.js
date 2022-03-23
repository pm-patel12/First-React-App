import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar-wrepper">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
          </ul>
          <img
            src="https://onlinepngtools.com/images/examples-onlinepngtools/google-logo-transparent.png"
            alt="logo"
          />
          {/* https://img.pikbest.com/png-images/20211218/tiger-head-wearing-bandana-while-smoking-vector-illustration_6193112.png!bw340 */}
          <ul className="logs">
            <li>LogIn</li>
            <li>SignIn</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
