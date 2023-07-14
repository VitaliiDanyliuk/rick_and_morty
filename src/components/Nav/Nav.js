import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
  const [menu, setMenu] = useState({});
     useEffect(() => {
       fetch("https://rickandmortyapi.com/api")
         .then((res) => res.json())
         .then((info) => setMenu(info));
     }, []);
  
  const newMenu = Object.keys(menu)

  return (
    <div className="nav">
      <ul className="nav-list">
        {newMenu.map((el, i) => (
          <Link to={el}>
            <li key={el + i*Math.random().toFixed(2)*1234} className="nav-list-item">{el}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
 
export default Nav;