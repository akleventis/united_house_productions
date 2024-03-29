import {UnitedLogo} from "../../assets/index.js";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div className="h-image">
          <a href="/">
          <img src={UnitedLogo} alt="logo" />
          </a>
        </div>
    </header>
  );
};

export default Header;
