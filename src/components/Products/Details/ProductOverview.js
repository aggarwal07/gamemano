"use client";
import CustomPolygon from "@/utilities/CustomPolygon";
import MasterButton from "@/utilities/MasterButton";
import OfflineDot from "@/utilities/OfflineDot";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";
import React from "react";

const ProductOverview = ({ product }) => {
  return (
    <div className="w-full md:pl-[9vw] bg-[#3D352A]/70 backdrop-blur-[40px] shadow-[0px_4px_24px_-1px_#00000033] z-[2] h-[30em] pt-14">
      <div className="px-5 xl:px-14 flex w-full justify-center">
        <div className="w-[47em] xl:w-[58.2em] bg-[#281E1F4D] h-[30em] xl:h-[38em] relative pt-5">
          <div className="pl-10 uppercase mt-1 bg-[#1E1E1E] text-xs py-1 px-2 w-[40%]">
            {product?.warrantyInformation}
          </div>
          <div className="pl-10 mt-1">
            {product?.rating && (
              <Rating
                sx={{
                  "& .MuiRating-iconEmpty": {
                    color: "gold",
                  },
                }}
                name="read-only"
                value={product?.rating}
                readOnly
                size="small"
              />
            )}
          </div>
          <div className="mt-4 w-[60%] mx-auto flex flex-col items-center ">
            <p className="text-6xl xl:text-[90px] text-center mb-5 font-cinzel text-[var(--secondary-foreground)] leading-16 xl:leading-22">
              {product?.title}
            </p>
            <MasterButton
              text="Buy Now"
              btnWidth="w-[8em] md:w-[10em] lg:w-[12em]"
              paddingY="py-[10px] md:py-[13px] lg:py-[15px]"
              fontSize="max-md:text-sm z-[1000]"
              hover="light"
            />
            <div className="rounded-[20px] flex items-center py-1 px-2 w-fit z-[1] mt-4">
              {product?.stock !== 0 ? <OnlineDot /> : <OfflineDot />}
              <p className="text-[10px] mb-0 ml-2 text-white">
                {product?.stock} Units Available
              </p>
            </div>
          </div>
          {/* polygon starts */}
          <div className="absolute -top-4 left-4">
            <CustomPolygon width="w-[45em] xl:w-[56.2em]" />
          </div>
          {/* polygon ends */}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
