import { React, useState, useEffect } from "react";
import SubNav from "./NavComponents/SubNav";
import "./NavBar.scss";

function NavBar() {
  const [jobPosition, setJobPosition] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => {
        setJobPosition(res.position);
        // console.log(jobPosition);
      });
  }, []);

  return (
    <div className="nav_box">
      <nav className="nav">
        <div className="nav_home">
          <div className="wanted">wanted</div>
          <div className="home">홈</div>
        </div>

        <div className="nav_menu">
          <ul className="menu_list">
            <li className="search_jobs menu_name">
              <a href="#!">탐색</a>
              <SubNav jobPosition={jobPosition} />
            </li>
            <li className="menu_name">
              <a href="#!">커리어 성장</a>
            </li>
            <li className="menu_name">
              <a href="#!">직군별 연봉</a>
            </li>
            <li className="menu_name">
              <a href="#!">이력서</a>
            </li>
            <li className="menu_name">
              <a href="#!">매치업</a>
            </li>
            <li className="menu_name">
              <a href="#!">프리랜서</a>
            </li>
            <li className="menu_name">
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
          <div className="user_icon">효진</div>
          <span>
            <i className="fas fa-bars"></i>
          </span>
        </div>

        <div className="nav_company">
          <i className="fas fa-grip-lines-vertical"></i>
          <div className="service">기업 서비스</div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
