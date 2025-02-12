import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Home | Space Tourism",
  "/destinations": "Destinations | Space Tourism",
  "/crew": "Crew | Space Tourism",
  "/technology": "Technology | Space Tourism",
};

const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "Space Tourism";
  }, [location.pathname]);
};

export default useDocumentTitle;
