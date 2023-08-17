import React from "react";
import "./AnyDevice.css"; // Import your CSS file

import DevicePic from "../assets/anydevice.png";

const AnyDevice = () => {
  return (
    <section className="anyDevice-section">
      <div className="content">
        <div className="text">
          <h2>Enjoy on any device</h2>
          <p>
            Watch your favorite movies and TV shows on any device, anywhere,
            anytime.
          </p>
        </div>
        <div className="image">
          <img src={DevicePic} alt="any device pic" />
        </div>
      </div>
    </section>
  );
};

export default AnyDevice;
