import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export enum ScreenSize {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop"
}

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<string>("desktop");

  const checkScreenSize = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setScreenSize(ScreenSize.Mobile);
    } else if (width >= 640 && width < 1024) {
      setScreenSize(ScreenSize.Tablet);
    } else {
      setScreenSize(ScreenSize.Desktop);
    }
  };

  const debouncedCheckScreenSize = debounce(checkScreenSize, 300);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", debouncedCheckScreenSize);

    // Cleanup event listener and debounce
    return () => {
      window.removeEventListener("resize", debouncedCheckScreenSize);
      debouncedCheckScreenSize.cancel(); // Cancel pending debounced calls
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
