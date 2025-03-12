import Image from "next/image";
import React from "react";

const GamesBanner = ({ gameData }) => {
  return (
    <div className="ml-14 mt-20">
      <div className="w-fit">
        <p className="text-[70px] font-wallpoet">{gameData.gameName}</p>
        <div className="text-right uppercase mt-1 bg-[#1E1E1E] text-xs py-1 px-2">
          RELEASE DATE : {gameData.releaseDate}
        </div>
      </div>
      <div className="mt-8 text-md w-[50%] font-prostoOne">{gameData.gameDescription}</div>
      <div className="flex mt-14 gap-7">
        <div className="flex flex-col items-center">
          <button className="rounded-full w-[12em] px-2 py-4 bg-[var(--primary-button-color)] text-white">
            Try For Free
          </button>
          <p className="mt-2">Buy now for {gameData.gamePrice} only</p>
          <div className="flex items-center gap-2 mt-7">
            <div className="w-2 h-2 rounded-full bg-[#00FF0A] shadow-[0px_0px_4px_2px_#7CFF8299]" />
            <p className="text-[12px] mb-0">
              {gameData.friendsPlaying} of your friends are playing
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 h-fit mt-2">
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
