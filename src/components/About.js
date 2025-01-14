import React from "react";
import "../styles/about.css";
import flower from './images/userplant.webp'

const About = () => {
  return (
    <div className="about">
      <div className="about__info">
        <h2><span>About</span> Me</h2>
        <p>
          This website is build by Shreyas Patil, Pawan Chormule and Pradip Mali, and we are passionate web developers working on
          the PlantNurtures website. We'r dedicated for creating innovative solutions
          for plant image recognition and making the world of plants more
          accessible to everyone.
        </p>

        <h2><span>About</span> PlantNurtures</h2>
        <p>
          PlantNurtures is a cutting-edge website that leverages advanced image
          recognition technology to identify plants. Our mission is to help
          nature enthusiasts, gardeners, and researchers identify and learn
          about various plant species effortlessly.
        </p>

        <p>
          Whether you're a botany enthusiast or just curious about the plants
          around you, PlantNurtures is your go-to resource for accurate plant
          identification. We are committed to providing a seamless and
          user-friendly experience for plant lovers worldwide.
        </p>
      </div>
      <div className="about__image">
        <img src={flower} alt="" />
      </div>
    </div>
  );
};

export default About;
