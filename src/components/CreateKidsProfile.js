import React from "react";
import "./CreateKidsProfile.css"; // Import your CSS file

import kids from "../assets/kids.png";

const CreateKidsProfile = () => {
  return (
    <section className="kidsProflie-section">
      <div className="content">
        <div className="text">
          <h2>Create profiles for kids</h2>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div className="image">
          <img src={kids} alt="Kids Profile" />
        </div>
      </div>
    </section>
  );
};

export default CreateKidsProfile;
