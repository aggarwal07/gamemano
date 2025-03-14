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
      <div className="flex gap-6 px-4">
        {/* filter division starts */}
        <ProductFilter />
        <ProductsFetched />
        {/* filter division ends */}
      </div>
      {/* product list section ends */}

      {/* similar products section starts */}
      <div className="flex items-center justify-between mt-14 px-4">
        <p className="text-3xl">
          {categorySelected !== ""
            ? `Checkout products similar to "${categorySelected}"`
            : "Checkout similar products"}
        </p>
        <div className="flex items-center">
          <p className="text-lg">VIEW ALL</p>
          <FaLongArrowAltRight size={25} />
        </div>
      </div>
      {productsList.length > 0 && (
        <SimilarProducts
          products={[productsList[0], productsList[1], productsList[2]]}
        />
      )}
      {/* similar products section ends */}
    </div>
  );
};

export default ProductListing;
