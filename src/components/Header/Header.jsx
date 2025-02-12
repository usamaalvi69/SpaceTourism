import React from "react";
import "./header.css";
import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="nav-header">
      <img src={logo} alt="Logo" className="logo" />
      <nav class="primary-navigation" id="primary-navigation">
      <ul aria-label="Primary" role="list" class="nav-list nav-text">
            <li><a href="#">HOME</a></li>
            <li><a href="#">DESTINATIONS</a></li>
            <li><a href="#">CREW</a></li>
            <li><a href="#">TECHNOLOGY</a></li>
          </ul>
      </nav>
    </div>
  );
};
