import {UnitedLogo} from "../assets/images/index.js";
import Navigate from "./Navigate.js";
import "./headers.css";

const Header = () => {
  return (
    <header>
        <div className="h-image">
          <img src={UnitedLogo} alt="logo" />
        </div>
      <Navigate />
    </header>
  );
};

export default Header;
