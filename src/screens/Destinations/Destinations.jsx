import React from "react";
import "./destinations.css";
import useBackground from "../../hooks/useBackground";
import moon from "../../assets/destination/image-moon.png";

export const Destinations = () => {
  useBackground("destinations");

  return (
    <div className="destination-main">
      <h5 className="text-preset-5">
        <span>01</span>PICK YOUR DESTINATION
      </h5>
      <div className="destination-container">
        <img src={moon} alt="planet" className="planet" />

        <div className="des-details">
          <ul className="tabs text-preset-8">
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul>

          <section className="details">
            <h1>MOON</h1>
            <p className="planet-desc">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
            <div className="sub-details">
              <Info label={"AVG. DISTANCE"} value={"384,400 KM"} />
              <Info label={"EST. TRAVEL TIME"} value={"3 DAYS"} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => {
  return (
    <div>
      <h6 className="text-preset-7">{label}</h6>
      <h3 className="text-preset-6">{value}</h3>
    </div>
  );
};
