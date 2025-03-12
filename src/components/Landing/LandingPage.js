import React from "react";
import SideBar from "./SideBar";
import Header from "../Header/Header";
import Carousel from "@/utilities/Carousel";
import { gamesData } from "@/appConstants/AppConstants";
import GamesBanner from "./GamesBanner";

const LandingPage = () => {
  const slides = gamesData.map((item, index) => ({
    slide: <GamesBanner key={index} gameData={item} />,
  }));
  return (
    <div className="w-full flex">
      <div className="md:w-[7vw] absolute left-0 top-0 border-r border-[var(--secondary-border-color)] h-full">
        <SideBar />
      </div>
      <div className="md:pl-[7vw] bg-[#15140f] w-full h-[80vh]">
        <Header />
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default LandingPage;
