import React from "react";
import "./Genre.css";
import GenreData from "./GenreData";

const Genre = () => {
  return (
    <div className="genre-section">
      <h2 className="genre-heading">Genres Offered by ADO+</h2>
      <div className="genre-container">
        {GenreData.map((genre, index) => (
          <div className="genre-tile" key={index}>
            <div
              className="genre-content"
              style={{
                backgroundImage: `url(${genre.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="genre-title">{genre.title}</div>
              <div className="genre-description">{genre.description}</div>
            </div>
            <div
              className="genre-image"
              style={{
                backgroundImage: `url(${genre.poster})`,
              }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
