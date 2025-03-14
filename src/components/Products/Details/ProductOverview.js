"use client";
import CustomPolygon from "@/utilities/CustomPolygon";
import MasterButton from "@/utilities/MasterButton";
import OfflineDot from "@/utilities/OfflineDot";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";
import React from "react";

const ProductOverview = ({ product }) => {
  return (
    <div className="w-full md:pl-[9vw] bg-[#3D352A]/30 backdrop-blur-[40px] shadow-[0px_4px_24px_-1px_#00000033] z-[2] h-[30em] pt-14">
      <div className="px-14">
        <div className="w-[64.2em] bg-[#281E1F4D] h-[41em] relative pt-5">
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
          <div className="mt-14 w-[60%] mx-auto flex flex-col items-center ">
            <p className="text-[90px] text-center mb-5 font-specialElite">
              {product?.title}
            </p>
            <MasterButton text="Buy Now" btnWidth="14em" />
            <div className="rounded-[20px] bg-[var(--secondary-background)] flex items-center py-1 px-2 w-fit z-[1] mt-4">
              {product?.stock !== 0 ? <OnlineDot /> : <OfflineDot />}
              <p className="text-[10px] mb-0 ml-2 text-white">
                {product?.stock} Units Available
              </p>
            </div>
          </div>
          {/* polygon starts */}
          <div className="absolute -top-4 left-4">
            <CustomPolygon width="62.2em" />
          </div>
          {/* polygon ends */}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
