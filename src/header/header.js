/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo float-left">
          <a href="#intro" className="scrollto">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599566781/AGENETWORK/logo_wzj5dk.png"
              alt=""
              className="img-fluid"
            />
          </a>
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li className="drop-down">
              <a href="">Drop Down</a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="drop-down">
                  <a href="#">Drop Down 2</a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
                <li>
                  <a href="#">Drop Down 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
