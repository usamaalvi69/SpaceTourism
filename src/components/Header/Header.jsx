import React, { useState } from "react";
import "./sidebar.css";
import "./header.css";

import logo from "../../assets/shared/logo.svg";
import close from "../../assets/shared/icon-close.svg";
import menu from "../../assets/shared/icon-hamburger.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="nav-header">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
        <img
          src={isSidebarOpen ? close : menu}
          alt="Menu"
          className="menu"
          onClick={toggleSidebar}
        />
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
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      
        <nav className="sidebar-navigation" id="sidebar-navigation">
          <ul
            aria-label="Secondary"
            role="list"
            className="side-nav-list nav-text"
            // onClick={toggleSidebar}
          >
            <NavLink to="/" className="side-nav-item">
              <li>HOME</li>
            </NavLink>
            <NavLink to="/destinations" className="side-nav-item">
              <li>DESTINATIONS</li>
            </NavLink>
            <NavLink to="/crew" className="side-nav-item">
              <li>CREW</li>
            </NavLink>
            <NavLink to="/technology" className="side-nav-item">
              <li>TECHNOLOGY</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};
