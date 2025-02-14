import React, { useState } from "react";
import "./crew.css";
import useBackground from "../../hooks/useBackground";
import { data } from "../../data";
import { Dots } from "../../components";

export const Crew = () => {
  const crew = data["crew"];
  const [activeTabData, setActiveTabData] = useState(crew[0]);
  useBackground("crew");
  const {
    name,
    role,
    bio,
    images: { png, webp },
  } = activeTabData;

  return (
    <div className="crew-main">
      <div className="crew-container">
        <div className="crew-details">
          <h5 className="text-preset-5">
            <span>02</span>MEET YOUR CREW
          </h5>
          <section className="details">
            <h3 className="text-preset-4">{role.toUpperCase()}</h3>
            <h2 className="text-preset-3">{name.toUpperCase()}</h2>
            <p className="crew-desc text-preset-9">{bio}</p>
          </section>

            <Dots
              roles={crew}
              activeTab={role}
              setActiveTabData={setActiveTabData}
            />

        </div>
        <picture className="fade-in mask-effect">
          <source srcSet={webp} type="image/webp" />
          <img src={png} alt="crew image" className="crew-img" />
        </picture>
      </div>
      <div className="crew-footer"></div>
    </div>
  );
};
