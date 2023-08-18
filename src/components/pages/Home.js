import React from "react";
import "../../App.css";
import AnyDevice from "../AnyDevice";
import HeroSection from "../HeroSection";
import WatchOffline from "../WatchOffline";
import CreateKidsProfile from "../CreateKidsProfile";
import Genre from "../Genre";
import FAQ from "../FAQ";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <AnyDevice />
      <WatchOffline />
      <CreateKidsProfile />
      <Genre />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
