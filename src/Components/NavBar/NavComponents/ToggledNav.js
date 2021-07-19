import React from "react";

function ToggledNav({ toggle_menu }) {
  return (
    <div className="toggle_menu">
      <div className="toggle_menu_box">
        <img className="logo" src="/image/wanted_logo.png" alt="wanted" />
        <button onClick={toggle_menu}>
          <i class="fas fa-times"></i>
        </button>
      </div>
      <ul className="toggle_menu_list">
        <li className="simple_list my_info">
          <div>MY 원티드</div>
          <img
            src="https://lh3.googleusercontent.com/a/AATXAJzCpXUgf7WBBWdME4i3ELy46v_MiEfNXJdWWO2-=s96-c"
            alt="profile"
            className="profile"
          />
        </li>
        <li className="simple_list margin_bottom">프로필</li>
        <li className="simple_list add_border_top">이력서</li>
        <li className="simple_list">매치업</li>
        <li className="simple_list">추천</li>
        <li className="simple_list">지원 현황</li>
        <li className="simple_list margin_bottom">프리랜서</li>
        <li className="simple_list add_border_top">직군별 연봉</li>
        <li className="simple_list margin_bottom">커리어 성장</li>
        <li className="simple_list add_border_top">기업 서비스</li>
        <li className="simple_list margin_bottom logout">로그아웃</li>
      </ul>
    </div>
  );
}

export default ToggledNav;
