import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="img" />
      </div>
      <div className="info">
        <p>{data.photographer}&ensp;</p>
      </div>
    </div>
  );
};

export default Picture;
