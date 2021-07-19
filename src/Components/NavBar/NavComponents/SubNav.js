import React from "react";
import Position from "./Position";

function SubNav({ jobPosition }) {
  // const subPosition = jobPosition.list;
  console.log(jobPosition);
  return (
    <div className="sub_nav">
      <div className="sub_div">
        {jobPosition.map((el, idx) => {
          // console.log(jobPosition[idx]);
          return <Position jobPosition={el} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default SubNav;
