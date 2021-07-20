import React from "react";
import SubNav from "./SubNav";

function NavMenu({ jobPosition }) {
  return (
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
  );
}

export default NavMenu;
