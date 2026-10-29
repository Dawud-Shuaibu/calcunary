import { useState, useEffect } from "react";
import { DarkMode, LightMode, Computer } from "../assets/svgs";

export const useTheme = () => {
  // Listen and update the state of the system dark scheme
  const [systemDark, setSystemDark] = useState(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const setSystemMode = (e) => {
      setSystemDark(e.matches);
    };

    mediaQuery.addEventListener("change", setSystemMode);

    return () => {
      mediaQuery.removeEventListener("change", setSystemMode);
    };
  }, []);

  // MAIN COLOR MODE STATE
  const [colorMode, setColorMode] = useState(() => {
    const preferredTheme = localStorage.getItem("colorMode");

    if (preferredTheme !== null) return preferredTheme;
    return "system";
  });

  useEffect(() => {
    const body = document.body.classList;

    switch (colorMode) {
      case "light":
        if (body.contains("darkmode")) body.remove("darkmode");
        localStorage.setItem("colorMode", "light");
        break;
      case "dark":
        if (!body.contains("darkmode")) body.add("darkmode");
        localStorage.setItem("colorMode", "dark");
        break;
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          if (!body.contains("darkmode")) body.add("darkmode");
        } else {
          if (body.contains("darkmode")) body.remove("darkmode");
        }
        localStorage.setItem("colorMode", "system");
    }
  }, [colorMode, systemDark]);

  const themeToggle = () => {
    switch (colorMode) {
      case "system":
        setColorMode("light");
        break;
      case "light":
        setColorMode("dark");
        break;
      case "dark":
        setColorMode("system");
    }
  };

  const themeIcons = () => {
    switch (colorMode) {
      case "light":
        return [LightMode, DarkMode];
      case "dark":
        return [DarkMode, Computer];
      default:
        return [Computer, LightMode];
    }
  };

  return { themeToggle, themeIcons, colorMode };
};
