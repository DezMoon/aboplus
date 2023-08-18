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

import m2 from "../assets/slider/movie (1).jpg";
import m3 from "../assets/slider/movie (2).jpg";
import m4 from "../assets/slider/movie (3).jpg";
import m5 from "../assets/slider/movie (4).jpg";
import m6 from "../assets/slider/movie (5).jpg";
import m7 from "../assets/slider/movie (6).jpg";
import m8 from "../assets/slider/movie (7).jpg";
import m9 from "../assets/slider/movie (8).jpg";
import m10 from "../assets/slider/movie (9).jpg";
import m11 from "../assets/slider/movie (10).jpg";
import m12 from "../assets/slider/movie (11).jpg";
import m13 from "../assets/slider/movie (12).jpg";
import m14 from "../assets/slider/movie (13).jpg";
import m15 from "../assets/slider/movie (14).jpg";
import m16 from "../assets/slider/movie (15).jpg";
import m17 from "../assets/slider/movie (16).jpg";
import m18 from "../assets/slider/movie (17).jpg";
import m19 from "../assets/slider/movie (18).jpg";
import m20 from "../assets/slider/movie (19).jpg";
import m21 from "../assets/slider/movie (20).jpg";
import m22 from "../assets/slider/movie (22).jpg";
import m23 from "../assets/slider/movie (23).jpg";
import m24 from "../assets/slider/movie (24).jpg";
import m25 from "../assets/slider/movie (25).jpg";
import m26 from "../assets/slider/movie (26).jpg";
import m27 from "../assets/slider/movie (27).jpg";
import m28 from "../assets/slider/movie (28).jpg";
import m29 from "../assets/slider/movie (29).jpg";
import m30 from "../assets/slider/movie (30).jpg";
import m31 from "../assets/slider/movie (31).jpg";
import m32 from "../assets/slider/movie (32).jpg";
import m33 from "../assets/slider/movie (33).jpg";
import m34 from "../assets/slider/movie (34).jpg";
import m35 from "../assets/slider/movie (21).jpg";

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

            <SwiperSlide>
              <img src={m8} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m9} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m10} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m11} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m12} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m13} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m14} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m15} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m16} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m17} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m18} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m19} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={m20} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m21} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m22} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m23} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m24} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m25} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m26} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m27} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m28} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={m29} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m30} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m31} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m32} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m33} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m34} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={m35} alt="slide_image" />
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
