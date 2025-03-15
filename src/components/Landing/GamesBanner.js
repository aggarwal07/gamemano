"use client";
import MasterButton from "@/utilities/MasterButton";
import OfflineDot from "@/utilities/OfflineDot";
import OnlineDot from "@/utilities/OnlineDot";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const GamesBanner = ({ gameData, landing = false }) => {
  const router = useRouter();
  return (
    <div className="w-fit">
      <div className="w-fit">
        <p
          className={`max-w-[90%] lg:leading-20 text-4xl sm:text-5xl lg:text-[70px] ${
            landing ? "font-wallpoet" : "font-aoboshiOne text-white"
          }`}
        >
          {gameData?.title}
        </p>
        <div className="text-right uppercase mt-1 bg-[#1E1E1E] text-[10px] lg:text-xs py-1 px-2 w-[40%] lg:w-[50%]">
          {gameData?.warrantyInformation}
        </div>
      </div>
      <div className="mt-8 max-lg:text-sm w-[90%] md:w-[40em] font-prostoOne">
        {gameData?.description}
      </div>
      <div className="flex mt-7 sm:mt-10 lg:mt-14 gap-7 w-fit">
        <div className="flex flex-col items-center">
          <MasterButton
            onClick={() => {
              router.push(`/productDetails/${gameData?.id}`);
            }}
            text={landing ? "Buy Now" : "Buy Now"}
            btnWidth="w-[8em] md:w-[10em] lg:w-[12em]"
            paddingY="py-[10px] md:py-[13px] lg:py-[15px]"
            fontSize="max-md:text-sm"
            hover="light"
          />
          <p className="mt-2 max-lg:text-sm">
            Buy now for $ {gameData?.price} only
          </p>
          {landing && (
            <div className="flex items-center gap-2 mt-5 lg:mt-7">
              {gameData?.stock !== 0 ? <OnlineDot /> : <OfflineDot />}
              <p className="text-[10px] mb-0">
                {gameData?.stock} Units Available
              </p>
            </div>
          )}
        </div>
        {/* <div className="flex items-center gap-3 h-fit mt-2 w-fit">
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
        </div> */}
      </div>
    </div>
  );
};

export default GamesBanner;
