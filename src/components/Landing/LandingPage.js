import React from "react";
import SideBar from "./SideBar";
import Header from "../Header/Header";
import Carousel from "@/utilities/Carousel";
import { gamesCardData, gamesData } from "@/appConstants/AppConstants";
import GamesBanner from "./GamesBanner";
import { FaLongArrowAltRight } from "react-icons/fa";
import GamesCard from "./GamesCard";

const LandingPage = () => {
  const slides = gamesData.map((item, index) => ({
    slide: <GamesBanner key={index} gameData={item} />,
  }));
  return (
    <div className="w-full relative">
      {/* sidebar starts */}
      <div className="md:w-[7vw] absolute left-0 top-0 border-r border-[var(--secondary-border-color)] h-[100%]">
        <SideBar />
      </div>
      {/* sidebar ends */}

      {/* landing section starts */}
      <div className="md:pl-[7vw] bg-[var(--secondary-background)] w-full h-[44em]">
        <Header />
        <Carousel slides={slides} />
      </div>
      {/* landing section ends */}

      {/* gameCards section starts */}
      <div className="md:pl-[7vw] w-full py-14 overflow-x-hidden">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-press2p text-[var(--secondary-foreground)]">
              MOST TRENDING
            </p>
            <div className="flex items-center gap-5 text-white">
              <p>GO TO GAME STORE</p>
              <FaLongArrowAltRight size={25} />
            </div>
          </div>
          <div className="mt-7 flex items-center gap-5 overflow-x-auto scrollbar-hide">
            {gamesCardData.map((item, index) => {
              return <GamesCard key={index} gameCardData={item} />;
            })}
          </div>
        </div>
      </div>
      {/* gameCards section ends */}
    </div>
  );
};

export default LandingPage;
