import { React, useState, useEffect } from "react";
import SubNav from "./NavComponents/SubNav";
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
        <div className="nav_menu">
          <ul className="menu_list">
            <li className="search_jobs menu_name">
              <a href="#!">탐색</a>
              <SubNav jobPosition={jobPosition} />
            </li>
            <li className="career menu_name">
              <a href="#!">커리어 성장</a>
            </li>
            <li className="menu_name big_screen_only">
              <a href="#!">직군별 연봉</a>
            </li>
            <li className="menu_name big_screen_only">
              <a href="#!">이력서</a>
            </li>
            <li className="menu_name big_screen_only">
              <a href="#!">매치업</a>
            </li>
            <li className="menu_name big_screen_only">
              <a href="#!">프리랜서</a>
            </li>
            <li className="menu_name big_screen_only">
              <a href="#!">Ai 합격예측</a>
            </li>
          </ul>
        </div>

        <div className="nav_icon">
          <span>
            <i className="fas fa-search"></i>
          </span>
          <span>
            <i className="far fa-bell"></i>
          </span>
          <img
            className="user_profile"
            src="https://lh3.googleusercontent.com/a/AATXAJzCpXUgf7WBBWdME4i3ELy46v_MiEfNXJdWWO2-=s96-c"
            alt="profile"
          />
          <button
            onClick={toggle_menu}
            type="button"
            className="toggle_menu_btn"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

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
