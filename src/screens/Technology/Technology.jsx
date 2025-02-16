import React, { useState } from "react";
import "./technology.css";
import { data } from "../../data";
import { Pagination } from "../../components";

export const Technology = () => {
  const technology = data["technology"].map((_, i) => ({ id: i + 1, ..._ }));
  const [activeTabData, setActiveTabData] = useState(technology[0]);
  const {
    id,
    name,
    description,
    images: { portrait, landscape },
  } = activeTabData;

  return (
    <div className="technology-main">
         <h5 className="text-preset-5 pg-title">
            <span>03</span>SPACE LAUNCH 101
          </h5>
      <div className="technology-container">
        <div className="technology-details">
        <Pagination
            techs={technology}
            activeTab={id}
            setActiveTabData={setActiveTabData}
          />

          <section className="tech-details">
            <h3 className="text-preset-4">THE TERMINOLOGY...</h3>
            <h2 className="text-preset-3">{name.toUpperCase()}</h2>
            <p className="technology-desc text-preset-9">{description}</p>
          </section>

        
        </div>
        <picture className="fade-in">
        <source srcSet={landscape} media="(max-width: 80em)" type="image/webp" />
          <img
            src={portrait}
            alt="technology image"
            className="technology-img"
          />
        </picture>
      </div>
      <div className="technology-footer"></div>
    </div>
  );
};
