import {UnitedLogo} from "../assets/images/index.js";
import "./headers.css";

const Header = () => {
  return (
    <header>
        <div className="h-image">
          <img src={UnitedLogo} width='450px' alt="logo" />
        </div>
    </header>
  );
};

export default Header;
