import { useMenu } from "../hooks/useMenu";
import { Menu } from "../assets/svgs";
import "../assets/css/header.css";

const Header = () => {
  const [{ setIsMenuOpen }] = useMenu();

  return (
    <header>
      <h4>Calcunary</h4>
      <button
        className="menu-button"
        title="Menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu />
      </button>
    </header>
  );
};

export default Header;
