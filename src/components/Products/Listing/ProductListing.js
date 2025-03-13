"use client";
import React, { use } from "react";
import ProductFilter from "./ProductFilter";
import ProductsFetched from "./ProductsFetched";
import { useSelector } from "react-redux";
import { gamesData } from "@/appConstants/AppConstants";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";
import GamesBanner from "@/components/Landing/GamesBanner";

const ProductListing = () => {
  const productsList = useSelector(
    (state) => state.globalState.productsFetched
  );
  return (
    <div className="px-4">
      {/* product list section starts */}
      <div className="flex gap-6">
        {/* filter division starts */}
        <ProductFilter />
        <ProductsFetched />
        {/* filter division ends */}
      </div>
      {/* product list section ends */}

      {/* similar products section starts */}
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
      {/* similar products section ends */}
    </div>
  );
};

export default ProductListing;
