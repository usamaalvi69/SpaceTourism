import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const backgrounds = {
  home: {
    desktop: "/assets/home/background-home-desktop.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    mobile: "/assets/home/background-home-mobile.jpg",
  },
  destinations: {
    desktop: "/assets/destination/background-destination-desktop.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    mobile: "/assets/destination/background-destination-mobile.jpg",
  },
  crew: {
    desktop: "/assets/crew/background-crew-desktop.jpg",
    tablet: "/assets/crew/background-crew-tablet.jpg",
    mobile: "/assets/crew/background-crew-mobile.jpg",
  },
  technology: {
    desktop: "/assets/technology/background-technology-desktop.jpg",
    tablet: "/assets/technology/background-technology-tablet.jpg",
    mobile: "/assets/technology/background-technology-mobile.jpg",
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
    // Set document title
    document.title = titles[location.pathname] || "Space Tourism";

    // Set background
    if (typeof window !== "undefined") {
      const updateBackground = () => {
        const bgImage = getBackground(route);
        if (bgImage) {
          document.body.style.background = `hsl(230, 35%, 7%) url(${bgImage}) no-repeat center center fixed`;
          document.body.style.backgroundSize = "cover";
        }
      };

      updateBackground();
      window.addEventListener("resize", updateBackground);

      return () => {
        document.body.style.background = "";
        window.removeEventListener("resize", updateBackground);
      };
    }
  }, [location.pathname]); 

  return null;
};

export default usePageSetup;
