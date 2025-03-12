import React from "react";

const GamesBanner = ({ gameData }) => {
  return (
    <div className="px-8 py-5">
      <div className="w-fit">
        <p className="text-5xl">{gameData.gameName}</p>
        <div className="text-right uppercase mt-1 w-full bg-black text-xs">
          RELEASE DATE : {gameData.releaseDate}
        </div>
        <div className="mt-10 text-md w-[50%]">{gameData.gameDescription}</div>
        <div className="mt-20">
          <div className="flex items-center">
            <button className="rounded-full w-[14em] px-2 py-4">
              Try For Free
            </button>
            <div className="flex items-center gap-3">
              <p className="mb-0">Available on :</p>
            </div>
          </div>
          <p className="mt-3">Buy now for ${gameData.gamePrice} only</p>
          <div className="flex items-center gap-2 mt-8">
            <div className="w-1 h-1 rounded-full bg-black"></div>
            <p className="mt-3 text-sm">
              {gameData.friendsPlaying} of your friends are playing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesBanner;
