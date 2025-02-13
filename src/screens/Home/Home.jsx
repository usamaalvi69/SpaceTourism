import React from "react";
import "./home.css";
import useBackground from "../../hooks/useBackground";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  useBackground("home");
  const navigate = useNavigate();

  const goto = () => {
    navigate('/destinations');
  };
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-content">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE </h1>
          <p className="desc">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="home-explore" onClick={goto}>EXPLORE</button>
      </div>
    </div>
  );
};
