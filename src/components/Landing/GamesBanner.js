import MasterButton from "@/utilities/MasterButton";
import OnlineDot from "@/utilities/OnlineDot";
import Image from "next/image";
import React from "react";

const GamesBanner = ({ gameData, landing = false }) => {
  return (
    <div className="w-fit">
      <div className="w-fit">
        <p
          className={`text-[70px] ${
            landing ? "font-wallpoet" : "font-aoboshiOne text-white"
          }`}
        >
          {gameData?.gameName}
        </p>
        <div className="text-right uppercase mt-1 bg-[#1E1E1E] text-xs py-1 px-2">
          RELEASE DATE : {gameData?.releaseDate}
        </div>
      </div>
      <div className="mt-8 text-md w-[40em] font-prostoOne">
        {gameData?.gameDescription}
      </div>
      <div className="flex mt-14 gap-7 w-fit">
        <div className="flex flex-col items-center">
          <MasterButton
            text={landing ? "Try For Free" : "Play Now"}
            btnWidth="12em"
            paddingY="15px"
          />
          <p className="mt-2">Buy now for {gameData?.gamePrice} only</p>
          {landing && (
            <div className="flex items-center gap-2 mt-7">
              <OnlineDot />
              <p className="text-[12px] mb-0">
                {gameData?.friendsPlaying} of your friends are playing
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 h-fit mt-2 w-fit">
          <p className="mb-0">Available on :</p>
          <Image
            alt="polaroid"
            src="/Images/Logos/iosLogo.png"
            width={50}
            height={50}
          />
          <Image
            alt="polaroid"
            src="/Images/Logos/windowsLogo.png"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default GamesBanner;
