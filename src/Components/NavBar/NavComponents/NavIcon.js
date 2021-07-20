import React from "react";

function NavIcon({ toggle_menu }) {
  return (
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
      <button onClick={toggle_menu} type="button" className="toggle_menu_btn">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}

export default NavIcon;
