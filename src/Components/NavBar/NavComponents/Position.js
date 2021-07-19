import React from "react";

function Position({ jobPosition }) {
  const subPosition = jobPosition.list;

  return (
    <div className="position">
      <a className="position_title" href="#!">
        <div className="title_box">
          <h2 href="#!">{jobPosition.name}</h2>
          <i class="fas fa-chevron-right"></i>
        </div>
      </a>
      <ul className="position_list">
        {subPosition &&
          subPosition.map((el) => {
            return <li>{el}</li>;
          })}
      </ul>
      {subPosition && (
        <div className="show_more">
          <div>더보기</div>
          <i class="fas fa-chevron-right"></i>
        </div>
      )}
    </div>
  );
}

export default Position;
