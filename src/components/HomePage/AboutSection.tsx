/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./AboutSection.css";
import profilePicture from "../../assets/ezra-marks-profile-photo.jpg";

export const AboutSection: React.FC = () => {
  return (
    <div className="about-section">
      <div className="about-photo">
        <img src={profilePicture} alt="profile" />
      </div>
      <div className="about-text">
        <h3>Hi, I'm Ezra.</h3>
        <p>I like to make things.</p>
        <p>
          I’m a Brown University senior, studying Computer Science and Cognitive
          Science. My central focus is software engineering, with interests in
          human-computer interaction, user experience, and artificial
          intelligence.
        </p>
        <p>
          My core passion is and always has been creating, though my medium of
          choice may change—I've gone from cardboard and hot glue all the way to
          computer software, and on occasion back to cardboard and hot glue.
          Both are beautiful and versatile ways for me to bring new ideas into
          the world.
        </p>
        <p>
          I would love to hear from you by email at <b>ezra_marks@brown.edu</b>,
          or visit me on the platforms below.
        </p>
        <div className="social-icons">
          <a
            id="linkedin-icon"
            className="social-icon"
            href="https://www.linkedin.com/in/ezramarks/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            id="github-icon"
            className="social-icon"
            href="https://github.com/EzraMarks"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            id="instagram-icon"
            className="social-icon"
            href="https://www.instagram.com/ezrablankmarks"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
};
