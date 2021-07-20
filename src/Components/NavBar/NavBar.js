import React, { useState, useEffect } from "react";
import NavMenu from "./NavComponents/NavMenu";
import NavIcon from "./NavComponents/NavIcon";
import ToggledNav from "./NavComponents/ToggledNav";
import "./NavBar.scss";

function NavBar() {
  const [jobPosition, setJobPosition] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => {
        setJobPosition(res.position);
      });
  }, []);

  const toggle_menu = () => {
    if (!toggleMenu) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  return (
    <div className="nav_box">
      <nav className="nav">
        <div className="nav_home">
          <div className="wanted big_screen_only">wanted</div>
          <div className="home">홈</div>
        </div>
        <NavMenu jobPosition={jobPosition} />
        <NavIcon toggle_menu={toggle_menu} />
        <div className="nav_company">
          <i className="fas fa-grip-lines-vertical big_screen_only"></i>
          <div className="service big_screen_only">기업 서비스</div>
        </div>
      </nav>
      {toggleMenu && <ToggledNav toggle_menu={toggle_menu} />}
    </div>
  );
}

export default NavBar;
