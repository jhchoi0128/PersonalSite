import React from "react";

const Profile = () => {
  return (
    <div id="profile" className="container">
      <div className="about-wrap">
        <p className="about">About Me</p>
      </div>

      <div className="profile-pic">
        <img id="profile-img" src="/images/header-background.jpg" alt="" />
      </div>
      <div className="title">
        <h1>나는 최재형이다</h1>
      </div>
      <div className="subtitle">
        <p>
          I am an athlete at heart, with an entrepreneurial spirit, a knack for
          online security, and a passion for coding. Having returned from my
          year of traveling, I pursued my first development job to kick off my
          career. I was hired as a full stack developer by Shop Your Own
          Mortgage, where I still work today. Since beginning my career there, I
          have been given the opportunity to shift into cybersecurity for the
          company. I am currently working towards my Certified Ethical Hacker
          certification while working as a full stack developer and lead
          security specialist.
        </p>
      </div>
    </div>
  );
};

export default Profile;
