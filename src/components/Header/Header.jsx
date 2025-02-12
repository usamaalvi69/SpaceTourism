import React from "react";
import "./header.css";
import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="nav-header">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <nav className="primary-navigation" id="primary-navigation">
        <ul aria-label="Primary" role="list" className="nav-list nav-text">
          <NavLink to="/" className="nav-item">
            <li>HOME</li>
          </NavLink>
          <NavLink to="/destinations" className="nav-item">
            <li>DESTINATIONS</li>
          </NavLink>
          <NavLink to="/crew" className="nav-item">
            <li>CREW</li>
          </NavLink>
          <NavLink to="/technology" className="nav-item">
            <li>TECHNOLOGY</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
