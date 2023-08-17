import React from "react";
import "./WatchOffline.css"; // Import your CSS file

import down from "../assets/download.png";

const WatchOffline = () => {
  return (
    <section className="download-section">
      <div className="content">
        <div className="image">
          <img src={down} alt="any device pic" />
        </div>
        <div className="text">
          <h2>Download your shows to watch offline and save data</h2>
          <p>
            Save your favorites easily and always have something to watch even
            offline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WatchOffline;
