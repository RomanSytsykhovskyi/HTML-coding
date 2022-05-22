import React from "react";

const OneNew = ({
  id,
  background,
  title,
  paragraph,
  date,
  quantityComments,
}) => {
  return (
    <div className={`grid_box grid_box${id}`}>
      <div className="cover" style={{ background }}>
        <span>NEW</span>
      </div>
      <div className="rest">
        <ul className="options">
          <li className="active">Google</li>
          <li>Trending</li>
          <li>New</li>
        </ul>
        <h2>
          {`#${id} `}
          {title}
        </h2>
        <p>{paragraph}</p>
        <ul className="infoNews">
          <li className="date">{date}</li>
          <li className="commentsQuantity">{quantityComments} comments</li>
        </ul>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default OneNew;
