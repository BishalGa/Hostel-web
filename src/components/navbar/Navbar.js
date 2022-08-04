import React, { useState } from "react";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hw__navbar">
      <div className="hw__navbar-links">
        <div className="hw__navbar-links_logo">logo</div>
        <nav className="hw__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/contactUs" activeStyle>
              {" "}
              Contact us
            </Link>
          </p>
          <p>
            <Link to="/Features"> Features</Link>
          </p>
          <p>
            <Link to="/Email"> Email us</Link>
          </p>
          <p>
            <Link to="/AboutUs"> About us</Link>
          </p>
        </nav>
      </div>
      <div className="hw__navbar-sign">
        <p>
          <Link to="login">Login</Link>
        </p>
        <Link to="SignUp">
          <button type="button">Sign up</button>
        </Link>
      </div>
      <div className="hw__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuFill
            color="tomato"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="hw__navbar-menu_container scale-up-center">
            <div className="hw__navbar-menu_container-links">
                <p>
                  <Link to="/">Home</Link>
                </p>
              <p>
                <Link to="/ContactUs"> Contact us</Link>
              </p>
              <p>
                <Link to="/Features"> Features</Link>
              </p>
              <p>
                <Link to="/Email"> Email us</Link>
              </p>
              <p>
                <Link to="/AboutUs"> About us</Link>
              </p>
            </div>
            <div className="hw__navbar-menu_container-links-sign">
              <p>
                <Link to="login">Login</Link>
              </p>
              <Link to="SignUp">
                <button type="button">Sign up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
