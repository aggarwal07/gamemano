"use client";
import React, { use } from "react";
import ProductFilter from "./ProductFilter";
import ProductsFetched from "./ProductsFetched";
import { useSelector } from "react-redux";
import { gamesData } from "@/appConstants/AppConstants";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";
import GamesBanner from "@/components/Landing/GamesBanner";
import OfflineDot from "@/utilities/OfflineDot";

const ProductListing = () => {
  const productsList = useSelector(
    (state) => state.globalState.productsFetched
  );
  return (
    <div className="">
      {/* product list section starts */}
      <div className="flex gap-6 px-4">
        {/* filter division starts */}
        <ProductFilter />
        <ProductsFetched />
        {/* filter division ends */}
      </div>
      {/* product list section ends */}

      {/* similar products section starts */}
      {productsList.length > 0 && (
        <div>
          <div className="md:pl-[7vw] w-full bg-[var(--secondary-background)] py-16 flex justify-end pr-36 relative pl-5">
            <div className="absolute right-8 top-8 flex flex-col items-end">
              <div className="flex items-center gap-2">
                {productsList[1]?.stock !== 0 ? <OnlineDot /> : <OfflineDot />}
                <p className="text-[12px] mb-0">
                  {productsList[1]?.stock} Units Available
                </p>
              </div>
              <div className="mt-1">
                <Rating
                  name="read-only"
                  value={productsList[1]?.rating}
                  readOnly
                />
              </div>
            </div>
            <GamesBanner gameData={productsList[1]} />
          </div>

          <div className="md:pl-[7vw] w-full bg-[var(--secondary-background)] py-16 flex justify-center relative mt-14">
            <div className="px-5">
              <div className="absolute right-8 top-8 flex flex-col items-end">
                <div className="flex items-center gap-2">
                  {productsList[2]?.stock !== 0 ? (
                    <OnlineDot />
                  ) : (
                    <OfflineDot />
                  )}
                  <p className="text-[12px] mb-0">
                    {productsList[2]?.stock} Units Available
                  </p>
                </div>
                <div className="mt-1">
                  <Rating
                    name="read-only"
                    value={productsList[2]?.rating}
                    readOnly
                  />
                </div>
              </div>
              <GamesBanner gameData={productsList[2]} />
            </div>
          </div>

          <div className="md:pl-[7vw] w-full bg-[var(--secondary-background)] py-16 flex justify-start px-5 relative mt-14">
            <div className="px-5">
              <div className="absolute right-8 top-8 flex flex-col items-end">
                <div className="flex items-center gap-2">
                  {productsList[1]?.stock !== 0 ? (
                    <OnlineDot />
                  ) : (
                    <OfflineDot />
                  )}
                  <p className="text-[12px] mb-0">
                    {productsList[1]?.stock} Units Available
                  </p>
                </div>
                <div className="mt-1">
                  <Rating
                    name="read-only"
                    value={productsList[3]?.rating}
                    readOnly
                  />
                </div>
              </div>
              <GamesBanner gameData={productsList[3]} />
            </div>
          </div>
        </div>
      )}
      {/* similar products section ends */}
    </div>
  );
};

export default ProductListing;
