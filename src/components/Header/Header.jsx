import React, { useState } from "react";
import "./sidebar.css";
import "./header.css";

const logo = "/assets/shared/logo.svg";
const close = "/assets/shared/icon-close.svg";
const menu = "/assets/shared/icon-hamburger.svg";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goto = () => {
    navigate("/");
  };
  return (
    <>
      <div className="nav-header">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={goto}
          tabIndex="0"
        />

        <img
          src={isSidebarOpen ? close : menu}
          alt="Menu"
          className="menu"
          onClick={toggleSidebar}
        />
        <nav className="primary-navigation fade-in" id="primary-navigation">
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
          >
            <NavLink to="/" className="side-nav-item" onClick={toggleSidebar}>
              <li>HOME</li>
            </NavLink>
            <NavLink
              to="/destinations"
              className="side-nav-item"
              onClick={toggleSidebar}
            >
              <li>DESTINATIONS</li>
            </NavLink>
            <NavLink
              to="/crew"
              className="side-nav-item"
              onClick={toggleSidebar}
            >
              <li>CREW</li>
            </NavLink>
            <NavLink
              to="/technology"
              className="side-nav-item"
              onClick={toggleSidebar}
            >
              <li>TECHNOLOGY</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};
