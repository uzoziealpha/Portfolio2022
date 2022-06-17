import React from "react";
import Typical  from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
           
            <a href="https://www.linkedin.com/in/obi-uzozie-194942207/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com/mambaalpha_uzozie/?hl=en">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCSec0RnTIF2mefetgfR4hzg">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="https://github.com/uzoziealpha">
            <i className="fa fa-github"></i>
          </a>

            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Obinna</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    4500,
                    "Backend Developer 💻",
                    4500,
                    "Mern stack Dev 📱",
                    4500,
                    "Cross Platform Dev 🔴",
                    4500,
                    "React/React Native 🌐",
                    4500,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>


          </div>
          <div className="profile-options">
          <a href="obizcv.pdf" download="Obi obizcv.pdf">
          <button className="btn highlighted-btn">Get Resume</button>
         </a>
          </div>
          <div className="profile-picture">
          <div className="profile-picture-background">
          
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
}
