"use client";
import GamesBanner from "@/components/Landing/GamesBanner";
import OfflineDot from "@/utilities/OfflineDot";
import OnlineDot from "@/utilities/OnlineDot";
import { Rating } from "@mui/material";
import React from "react";

const SimilarProducts = ({ products }) => {
  const justifyContent = ["justify-end", "justify-center", "justify-start"];
  return (
    <div>
      {products.map((item, index) => {
        return (
          <div
            key={index}
            className={`pl-[9vw] md:pl-[9vw] w-full bg-[var(--secondary-background)] py-16 flex ${justifyContent[index]}  relative my-14`}
          >
            <div className="absolute right-8 top-8 flex flex-col items-end">
              <div className="flex items-center gap-2">
                {item?.stock !== 0 ? <OnlineDot /> : <OfflineDot />}
                <p className="text-[12px] mb-0">
                  {item?.stock} Units Available
                </p>
              </div>
              <div className="mt-1">
                {item?.rating && (
                  <Rating
                    sx={{
                      "& .MuiRating-iconEmpty": {
                        color: "gold",
                      },
                    }}
                    name="read-only"
                    value={item?.rating}
                    readOnly
                  />
                )}
              </div>
            </div>
            <GamesBanner gameData={item} />
          </div>
        );
      })}
    </div>
  );
};

export default SimilarProducts;
