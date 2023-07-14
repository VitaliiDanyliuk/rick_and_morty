import { Link } from "react-router-dom";
import Nav from "../Nav";
import logo from "../../img/logoblack.png";

import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/" className="logo">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
