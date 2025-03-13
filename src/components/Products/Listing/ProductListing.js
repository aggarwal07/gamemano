"use client";
import React, { use } from "react";
import ProductFilter from "./ProductFilter";
import ProductsFetched from "./ProductsFetched";

const ProductListing = () => {
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
    </div>
  );
};

export default ProductListing;
