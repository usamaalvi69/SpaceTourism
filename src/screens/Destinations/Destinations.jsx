import React, { useState } from "react";
import "./destinations.css";
import { data } from "../../data";
import { DestinationTabs } from "../../components";

export const Destinations = () => {
  const destinations = data["destinations"];
  const [activeTabData, setActiveTabData] = useState(destinations[0]);
  const {
    name,
    distance,
    description,
    travel,
    images: { png, webp },
  } = activeTabData;

  return (
    <div className="destination-main">
      <h5 className="text-preset-5">
        <span>01</span>PICK YOUR DESTINATION
      </h5>
      <div className="destination-container">
        <picture className="fade-in">
          <source srcSet={webp} type="image/webp" />
          <img src={png} alt="destination image" className="planet" />
        </picture>

        <div className="des-details">
          <DestinationTabs
            destinations={destinations}
            activeTab={name}
            setActiveTabData={setActiveTabData}
          />

          <section className="details">
            <h1 className="text-preset-1">{name.toUpperCase()}</h1>
            <p className="planet-desc text-preset-9">{description}</p>
            <hr />
            <div className="sub-details">
              <Info label={"AVG. DISTANCE"} value={distance.toUpperCase()} />
              <Info label={"EST. TRAVEL TIME"} value={travel.toUpperCase()} />
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
      <h4 className="text-preset-6">{value}</h4>
    </div>
  );
};
