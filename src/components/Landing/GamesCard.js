"use client";
import { capitalizeFirstLetter } from "@/appConstants/GlobalFunctions";
import MasterButton from "@/utilities/MasterButton";
import OfflineDot from "@/utilities/OfflineDot";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const GamesCard = ({ gameCardData }) => {
  const router = useRouter();
  return (
    <div className="rounded-[10px] p-4 bg-[var(--gameCard-bg-color)] h-[16em] md:h-[19em] lg:h-[23em] flex flex-col justify-between text-black w-[11.5em] md:w-[18em] lg:w-[21.5em] min-w-[11.5em] md:min-w-[18em] lg:min-w-[21.5em] relative overflow-hidden">
      <Image
        alt="polaroid"
        src={gameCardData?.thumbnail || "/Images/Logos/iosLogo.png"}
        width={50}
        height={50}
        className="absolute w-full h-full left-0 object-cover"
      />
      <div className="rounded-[20px] bg-[var(--secondary-background)] flex items-center py-1 px-2 w-fit z-[1]">
        {gameCardData?.stock !== 0 ? <OnlineDot /> : <OfflineDot />}
        <p className="text-[10px] mb-0 ml-2 text-white">
          {gameCardData?.stock} Units Available
        </p>
      </div>
      <div className="z-[1]">
        <p className="text-xl md:text-2xl lg:text-3xl font-aoboshiOne line-clamp-2">
          {gameCardData?.title}
        </p>
        {gameCardData?.rating && (
          <Rating
            sx={{
              "& .MuiRating-iconEmpty": {
                color: "gold",
              },
            }}
            name="read-only"
            value={gameCardData?.rating}
            readOnly
            size="small"
          />
        )}
        <ul className="flex items-center gap-8 list-disc text-xs md:text-sm text-[#FF1C1C] font-medium">
          {gameCardData?.tags?.map((item, index) => {
            return (
              <li className={`${index === 0 ? "list-none" : ""}`} key={index}>
                {capitalizeFirstLetter(item)}
              </li>
            );
          })}
        </ul>
        <p className="text-[10px] md:text-xs font-medium ">
          {gameCardData?.warrantyInformation}
        </p>
        <div className="flex items-center gap-3 mt-2 justify-between">
          <p className="text-sm md:text-lg lg:text-[22px] font-semibold">
            $ {gameCardData?.price}
          </p>
          <MasterButton
            onClick={() => {
              router.push(`/productDetails/${gameCardData?.id}`);
            }}
            text="Buy Now"
            btnWidth="w-[7em] sm:w-[8em] md:w-[10em] lg:w-[12em]"
            paddingY="py-[5px] sm:py-[6px] md:py-[8px] lg:py-[10px]"
            fontSize="max-sm:text-xs max-md:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
