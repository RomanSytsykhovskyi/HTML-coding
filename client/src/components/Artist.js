import React from "react";

const Artist = () => {
  return (
    <div className="artists">
      <div className="wrapper">
        <h2 className="title">ARTIST</h2>
        <p className="paragraph">
          Some of the most listened rap artists of Nepal.
        </p>
        <div className="artists_grid">
          {["Yama Buddha", "Vten", "Laure", "MC flo"].map((gridBox, id) => (
            <div key={id + 1} className={`grid_box grid_box${id + 1}`}>
              <span className="McNickname">{gridBox}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
