"use client";
import React from "react";
import ProductFilter from "./ProductFilter";
import ProductsFetched from "./ProductsFetched";
import { useSelector } from "react-redux";
import SimilarProducts from "./SimilarProducts";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductListing = () => {
  const productsList = useSelector(
    (state) => state.globalState.productsFetched
  );
  const categorySelected = useSelector(
    (state) => state.globalState.filters.categories
  );
  return (
    <div className="">
      {/* product list section starts */}
      <div className="flex gap-3 md:gap-6 px-2 md:px-4">
        {/* filter division starts */}
        <ProductFilter />
        <ProductsFetched />
        {/* filter division ends */}
      </div>
      {/* product list section ends */}

      {/* similar products section starts */}
      {productsList.length > 0 && (
        <div className="flex items-center justify-between mt-14 px-4">
          <p className="text-xl md:text-2xl lg:text-3xl">
            {categorySelected !== ""
              ? `Checkout products similar to "${categorySelected}"`
              : "Checkout similar products"}
          </p>
          <div className="flex items-center gap-2 border-b border-transparent text-white transition-all duration-400 hover:text-[var(--primary-button-color)] hover:border-[var(--primary-button-color)] cursor-pointer">
            <p className="max-lg:text-sm">VIEW ALL</p>
            <FaLongArrowAltRight className="max-lg:w-4 max-lg:h-4" size={22} />
          </div>
        </div>
      )}
      {productsList.length > 0 && (
        <SimilarProducts products={productsList.slice(0, 3)} />
      )}
      {/* similar products section ends */}
    </div>
  );
};

export default ProductListing;
