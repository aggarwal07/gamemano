import React from "react";
import SideBar from "./SideBar";
import Header from "../Header/Header";
import Carousel from "@/utilities/Carousel";
import { gamesCardData, gamesData } from "@/appConstants/AppConstants";
import GamesBanner from "./GamesBanner";
import { FaLongArrowAltRight } from "react-icons/fa";
import GamesCard from "./GamesCard";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";

const LandingPage = () => {
  const slides = gamesData.map((item, index) => ({
    slide: (
      <div className="ml-14 mt-20">
        <GamesBanner key={index} gameData={item} landing={true} />
      </div>
    ),
  }));
  return (
    <div className="w-full relative">
      {/* sidebar starts */}
      <div className="md:w-[7vw] absolute left-0 top-0 border-r border-[var(--secondary-border-color)] h-[100%] z-[10]">
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
      <div className="md:pl-[7vw] w-full py-16 overflow-x-hidden">
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

      {/*detailed gameCards section starts */}
      <div className="md:pl-[7vw] w-full bg-[var(--secondary-background)] py-16 flex justify-end pr-36 relative pl-5">
        <div className="absolute right-8 top-8 flex flex-col items-end">
          <div className="flex items-center gap-2">
            <OnlineDot />
            <p className="text-[12px] mb-0">
              {gamesData[1]?.friendsPlaying} of your friends are playing
            </p>
          </div>
          <div className="mt-1">
            <Rating name="read-only" value={3} readOnly />
          </div>
        </div>
        <GamesBanner gameData={gamesData[1]} />
      </div>

      <div className="md:pl-[7vw] w-full bg-[var(--secondary-background)] py-16 flex justify-center relative mt-14">
        <div className="px-5">
          <div className="absolute right-8 top-8 flex flex-col items-end">
            <div className="flex items-center gap-2">
              <OnlineDot />
              <p className="text-[12px] mb-0">
                {gamesData[2]?.friendsPlaying} of your friends are playing
              </p>
            </div>
            <div className="mt-1">
              <Rating name="read-only" value={3} readOnly />
            </div>
          </div>
          <GamesBanner gameData={gamesData[2]} />
        </div>
      </div>

      <div className="md:pl-[7vw] w-full bg-[var(--secondary-background)] py-16 flex justify-start px-5 relative mt-14">
        <div className="px-5">
          <div className="absolute right-8 top-8 flex flex-col items-end">
            <div className="flex items-center gap-2">
              <OnlineDot />
              <p className="text-[12px] mb-0">
                {gamesData[3]?.friendsPlaying} of your friends are playing
              </p>
            </div>
            <div className="mt-1">
              <Rating name="read-only" value={3} readOnly />
            </div>
          </div>
          <GamesBanner gameData={gamesData[3]} />
        </div>
      </div>
      {/*detailed gameCards section ends */}
    </div>
  );
};

export default LandingPage;
