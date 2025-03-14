"use client";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>{productId}</div>;
};

export default ProductDetails;
