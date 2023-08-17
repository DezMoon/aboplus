import React from "react";
import "./Footer.css";

import logo from "../assets/photo.jpg";
import playstore from "../assets/en_badge_web_generic.png";
import appstore from "../assets/appstorebadge.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row-logo">
          <div className="footer-logo">
            {/* Your logo */}
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-social-icons">
            {/* Social media icons */}
            <a href="https://facebook.com" className="social-icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-icon">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com" className="social-icon">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-row-logo">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              At ABO, we take pride in offering a diverse range of content for
              our viewers. Our platform features a curated selection of both
              local and international movies, TV shows, and original
              productions. Whether you're in the mood for the latest Hollywood
              blockbuster or want to explore compelling stories from your own
              region, ABO+ has something for everyone. Join us to enjoy a rich
              blend of entertainment that caters to your unique preferences.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Ways to watch</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Only on ADO+</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Other Links</h4>
            <ul>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Mobile Apps</h4>
            <p>Download the ADO+ app from the app stores:</p>
            <div className="mobile-app-icons">
              <a href="#">
                <img src={appstore} alt="App Store" />
              </a>
              <a href="#">
                <img src={playstore} alt="Play Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-row">
        <p className="footer-copyright">
          © {currentYear} Avaeyl BoxOffice. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
