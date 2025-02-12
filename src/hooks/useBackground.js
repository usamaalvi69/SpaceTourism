import { useEffect } from "react";

// Desktop backgrounds
import bgHome from "../assets/home/background-home-desktop.jpg";
import bgDest from "../assets/destination/background-destination-desktop.jpg";
import bgCrew from "../assets/crew/background-crew-desktop.jpg";
import bgTech from "../assets/technology/background-technology-desktop.jpg";

// Tablet backgrounds
import bgHomeTab from "../assets/home/background-home-tablet.jpg";
import bgDestTab from "../assets/destination/background-destination-tablet.jpg";
import bgCrewTab from "../assets/crew/background-crew-tablet.jpg";
import bgTechTab from "../assets/technology/background-technology-tablet.jpg";

// Mobile backgrounds
import bgHomeMob from "../assets/home/background-home-mobile.jpg";
import bgDestMob from "../assets/destination/background-destination-mobile.jpg";
import bgCrewMob from "../assets/crew/background-crew-mobile.jpg";
import bgTechMob from "../assets/technology/background-technology-mobile.jpg";

// Background mapping for different screen sizes
const backgrounds = {
  home: { desktop: bgHome, tablet: bgHomeTab, mobile: bgHomeMob },
  destinations: { desktop: bgDest, tablet: bgDestTab, mobile: bgDestMob },
  crew: { desktop: bgCrew, tablet: bgCrewTab, mobile: bgCrewMob },
  technology: { desktop: bgTech, tablet: bgTechTab, mobile: bgTechMob },
};

const getBackground = (route) => {
  if (!backgrounds[route]) return null;

  // Detect screen size
  if (window.matchMedia("(max-width: 37.5em)").matches) {
    return backgrounds[route].mobile; // Mobile (600px and below)
  } else if (window.matchMedia("(max-width: 53.375em)").matches) {
    return backgrounds[route].tablet; // Tablet (855px and below)
  } else {
    return backgrounds[route].desktop; // Default to desktop
  }
};

const useBackground = (route) => {
  useEffect(() => {
    const updateBackground = () => {
      const bgImage = getBackground(route);
      if (bgImage) {
        document.body.style.background = `hsl(230, 35%, 7%) url(${bgImage}) no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
      }
    };

    updateBackground();

    // Listen for screen size changes
    const mediaQueryMobile = window.matchMedia("(max-width: 37.5em)");
    const mediaQueryTablet = window.matchMedia("(max-width: 53.375em)");

    mediaQueryMobile.addEventListener("change", updateBackground);
    mediaQueryTablet.addEventListener("change", updateBackground);

    return () => {
      document.body.style.background = "";
      mediaQueryMobile.removeEventListener("change", updateBackground);
      mediaQueryTablet.removeEventListener("change", updateBackground);
    };
  }, [route]); // Runs when route changes

  return null;
};

export default useBackground;
