import React from "react";
import "../App.css";
import "./HeroSection.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

// eslint-disable-next-line
import m2 from "../assets/can you see us.jpg";
// eslint-disable-next-line
import m3 from "../assets/blackdollar.jpg";
import m4 from "../assets/images1.jpg";
import m5 from "../assets/images3.jpg";
import m6 from "../assets/images2.jpg";
import m7 from "../assets/images.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="background-container">
          <div className="background-image"></div>
          <div className="overlay"></div>
        </div>

        <div className="content-container">
          <div className="button-container">
            <h1>Unlimited movies, TV Shows, and more.</h1>
            <p>Watch from anywhere, at anytime on any device. </p>
            <button className="signup-button">Sign in</button>
            <button className="register-button">+Register</button>
          </div>
        </div>

        <div className="carousel-container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"5"}
            spaceBetween={-40}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            breakpoints={{
              // When window width is <= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: -40,
              },
              // When window width is <= 1024px
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              // ... other breakpoints ...
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="swiper_container">
            <SwiperSlide>
              <img src={m3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m7} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
