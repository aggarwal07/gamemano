"use client";
import GamesCard from "@/components/Landing/GamesCard";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const RecommendedProducts = ({ similarProds }) => {
  return (
    <div className="md:pl-[9vw] max-w-[100vw] py-16 overflow-x-hidden">
      <div className="px-5">
        <div className="flex items-center justify-between max-sm:gap-5">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            Products recommended for you
          </p>
          <div className="flex items-center gap-2 border-b border-transparent text-white transition-all duration-400 hover:text-[var(--primary-button-color)] hover:border-[var(--primary-button-color)] cursor-pointer">
            <p className="max-sm:text-xs max-lg:text-sm">VIEW ALL</p>
            <FaLongArrowAltRight className="max-lg:w-4 max-lg:h-4" size={22} />
          </div>
        </div>
        <div className="mt-7 flex items-center gap-3 md:gap-5 overflow-x-auto scrollbar-hide">
          {similarProds?.map((item, index) => {
            return <GamesCard key={index} gameCardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
