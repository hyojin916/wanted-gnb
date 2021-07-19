import React from "react";
import Position from "./Position";

function SubNav({ jobPosition }) {
  return (
    <div className="sub_nav">
      <div className="sub_div">
        {jobPosition.map((el, idx) => {
          return <Position jobPosition={el} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default SubNav;
