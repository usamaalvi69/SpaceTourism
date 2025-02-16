import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const backgrounds = {
  home: {
    desktop: "/SpaceTourism/assets/home/background-home-desktop.jpg",
    tablet: "/SpaceTourism/assets/home/background-home-tablet.jpg",
    mobile: "/SpaceTourism/assets/home/background-home-mobile.jpg",
  },
  destinations: {
    desktop: "/SpaceTourism/assets/destination/background-destination-desktop.jpg",
    tablet: "/SpaceTourism/assets/destination/background-destination-tablet.jpg",
    mobile: "/SpaceTourism/assets/destination/background-destination-mobile.jpg",
  },
  crew: {
    desktop: "/SpaceTourism/assets/crew/background-crew-desktop.jpg",
    tablet: "/SpaceTourism/assets/crew/background-crew-tablet.jpg",
    mobile: "/SpaceTourism/assets/crew/background-crew-mobile.jpg",
  },
  technology: {
    desktop: "/SpaceTourism/assets/technology/background-technology-desktop.jpg",
    tablet: "/SpaceTourism/assets/technology/background-technology-tablet.jpg",
    mobile: "/SpaceTourism/assets/technology/background-technology-mobile.jpg",
  },
};

const titles = {
  "/": "Home | Space Tourism",
  "/destinations": "Destinations | Space Tourism",
  "/crew": "Crew | Space Tourism",
  "/technology": "Technology | Space Tourism",
};

const getBackground = (route) => {
  if (typeof window === "undefined" || !backgrounds[route]) return null;

  const screenSize = window.innerWidth;
  if (screenSize <= 600) return backgrounds[route].mobile;
  if (screenSize <= 855) return backgrounds[route].tablet;
  return backgrounds[route].desktop;
};

const usePageSetup = () => {
  const location = useLocation();
  const route = location.pathname.replace("/", "") || "home"; // Extracts the route name

  useEffect(() => {
    document.title = titles[location.pathname] || "Space Tourism";

    const updateBackground = () => {
      const bgImage = getBackground(route);
      const bgContainer = document.getElementById("bg-container");
      
      if (bgContainer && bgImage) {
        bgContainer.style.backgroundImage = `url(${bgImage})`;
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, [location.pathname]);

  return null;
};

export default usePageSetup;
