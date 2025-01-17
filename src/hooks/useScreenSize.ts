import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<string>("desktop");

  const checkScreenSize = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setScreenSize("mobile");
    } else if (width >= 640 && width < 1024) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  };

  useEffect(() => {
    checkScreenSize(); // Initial check on mount
    window.addEventListener("resize", checkScreenSize); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up event listener on unmount
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
