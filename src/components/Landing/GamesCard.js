"use client";
import MasterButton from "@/utilities/MasterButton";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";
import React from "react";

const GamesCard = ({ gameCardData }) => {
  return (
    <div className="rounded-[10px] p-4 bg-[var(--gameCard-bg-color)] h-[23em] flex flex-col justify-between text-black w-[21.5em] min-w-[21.5em]">
      <div className="rounded-[20px] bg-[var(--secondary-background)] flex items-center py-1 px-2 w-fit">
        <OnlineDot />
        <p className="text-[10px] mb-0 ml-2 text-white">
          {gameCardData?.playerOnline} Online
        </p>
      </div>
      <div>
        <p className="text-3xl font-aoboshiOne">{gameCardData?.gameName}</p>
        <Rating
          name="read-only"
          value={gameCardData?.rating}
          readOnly
          size="small"
        />
        <ul className="flex items-center gap-8 list-disc text-sm text-[#FF1C1C] font-medium">
          {gameCardData?.highlights?.map((item, index) => {
            return (
              <li className={`${index === 0 ? "list-none" : ""}`} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <p className="text-xs font-medium ">
          Released {gameCardData?.releasedDate}
        </p>
        <div className="flex items-center gap-3 mt-2 justify-between">
          <p className="text-[22px] font-semibold">
            $ {gameCardData?.gamePrice}
          </p>
          <MasterButton
            text="Buy Now"
            btnWidth="12em"
            fontSize="18px"
            paddingY="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
