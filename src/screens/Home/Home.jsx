import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="home-main">
      <div className="home-container">
        <div className="home-even-columns">
          <div></div>
          <div className="home-content">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1 style={{ lineHeight: 1.2 }}>SPACE </h1>
            <p style={{ lineHeight: 1.4 }}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div></div>
          <div className="home-btn">
            <button className="home-explore">EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
