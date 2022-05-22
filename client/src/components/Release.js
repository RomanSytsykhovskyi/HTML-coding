import React from "react";

const Realese = ({ id, background, title, nickname }) => {
  return (
    <div className={`grid_box grid_box${id}`}>
      <div
        className="cover"
        style={{
          backgroundImage: background,
        }}
      ></div>
      <h2>{title}</h2>
      <p>{nickname}</p>
      <ul className="price">
        <li>$9.99</li>
        <li>$5.99</li>
      </ul>
      <ul className="circles">
        <li className="circle1">1</li>
        <li className="circle2">2</li>
        <li className="circle3">3</li>
        <li className="circle4">4</li>
      </ul>
    </div>
  );
};

export default Realese;
