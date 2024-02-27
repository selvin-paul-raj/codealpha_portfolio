import React from "react";
import img2 from "../Images/2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={img2} alt="profile" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Full Stack Developer</h3>
        <p>
        I am currently pursuing B.Tech in Information Technology, 3rd year, at DMI College of Engineering. I am adept at problem-solving and consider myself an active and hyperactive learner. My skills include React, Express, MongoDB, Node.js, Python, Git, GitHub, and RESTful APIs. I am passionate about starting a startup, football, and exploring the Metaverse.
        </p>
        <a href="#read_more" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
