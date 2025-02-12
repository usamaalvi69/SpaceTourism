import React from "react";
import "./header.css";
import logo from "../../assets/shared/logo.svg";
export const Header = () => {
  return (
    <div className="nav-header">
      <img src={logo} alt="Logo" className="logo" />
      <nav></nav>
    </div>
  );
};
