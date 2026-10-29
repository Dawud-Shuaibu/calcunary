import { Link } from "react-router-dom";
import { useMenu } from "../../hooks/useMenu";
import { useTheme } from "../../hooks/useTheme";
import { Cancel, Calc, Currency, Info } from "../../assets/svgs";
import About from "./About";
import "../../assets/css/menu.css";

const Menu = () => {
  const [{ isMenuOpen, setIsMenuOpen }, { setIsAboutOpen }] = useMenu();
  const { themeToggle, themeIcons, colorMode } = useTheme();
  const [ThemeModeIcon, HoverIcon] = themeIcons();

  return (
    <>
      <div
        style={{
          width: isMenuOpen ? "300px" : "0",
        }}
        className="menu"
      >
        <div className="menu-header">
          <h2>Menu</h2>
          <div>
            <button
              className="theme-btn"
              title={
                colorMode === "system"
                  ? "Toggle Lightmode"
                  : colorMode === "light"
                    ? "Toggle Darkmode"
                    : "Use System"
              }
              onClick={themeToggle}
            >
              <ThemeModeIcon />
              <HoverIcon />
            </button>
            <button
              className="close-menu-btn"
              title="Close"
              onClick={() => setIsMenuOpen(false)}
            >
              <Cancel />
            </button>
          </div>
        </div>

        <div className="options-box">
          <div className="calculators">
            <h3>Calculator</h3>
            <div>
              <Link
                className="menu-option"
                title="Standard"
                to="/standard"
                onClick={localStorage.setItem("lastUsedCalc", "standard")}
              >
                <Calc /> Standard
              </Link>
            </div>
          </div>

          <div className="converters">
            <h3>Converter</h3>
            <div>
              <Link
                className="menu-option"
                title="Converter Currencies"
                to="/currency"
                onClick={localStorage.setItem("lastUsedCalc", "currency")}
              >
                <Currency /> Currency
              </Link>
            </div>
          </div>
        </div>

        <div className="about-btn-box">
          <button
            className="about-btn"
            title="About"
            onClick={() => setIsAboutOpen(true)}
          >
            <Info /> About
          </button>
        </div>
      </div>

      <About />
    </>
  );
};

export default Menu;
