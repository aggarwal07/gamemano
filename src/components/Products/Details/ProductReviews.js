"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ReviewCard from "./ReviewCard";

const ProductReviews = ({ reviewsArray }) => {
  return (
    <div className="md:pl-[9vw] max-w-[100vw] py-16 overflow-x-hidden">
      <div className="px-5">
        <div className="flex items-center justify-between max-sm:gap-5">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            Reviews from other customers
          </p>
          <div className="flex items-center gap-2 border-b border-transparent text-white transition-all duration-400 hover:text-[var(--primary-button-color)] hover:border-[var(--primary-button-color)] cursor-pointer">
            <p className="max-sm:text-xs max-lg:text-sm">GO TO STORE</p>
            <FaLongArrowAltRight className="max-lg:w-4 max-lg:h-4" size={22} />
          </div>
        </div>
        <div className="mt-7 flex items-center gap-3 md:gap-5 overflow-x-auto scrollbar-hide">
          {reviewsArray?.map((item, index) => {
            return <ReviewCard key={index} review={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
