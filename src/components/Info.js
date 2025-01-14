import React from "react";
import "../styles/info.css";
import loupe from "./images/loupe.png";
import photo from "./images/photo.png";
import plant from "./images/plant.png";

const Info = () => {
  return (
    <div className="info" id="info">
      <div className="info__head">
        <h1>Steps to Use PlantNurtures</h1>
        <h2>Follow the instructions</h2>
      </div>
      <div className="info__cards">
        <div className="info__card">
          <div className="info__card-img">
            <img src={photo} alt="" />
          </div>
          <div className="info__card-text">
            <h3>Upload the plant image</h3>
          </div>
        </div>
        <div className="info__card">
          <div className="info__card-img">
            <img src={loupe} alt="" />
          </div>
          <div className="info__card-text">
            <h3>Wait for the results</h3>
          </div>
        </div>
        <div className="info__card">
          <div className="info__card-img">
            <img src={plant} alt="" />
          </div>
          <div className="info__card-text">
            <h3>Explore about the plant</h3>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Info;
