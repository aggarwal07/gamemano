"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductOverview from "./ProductOverview";
import { useDispatch } from "react-redux";
import { isLoading } from "@/store/Actions/globalAction";
import { fetchProductIdWise } from "@/store/Actions/restApiActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoading(true));
    dispatch(
      fetchProductIdWise(productId, (res) => {
        setProduct(res);
        dispatch(isLoading(false));
      })
    );
  }, [dispatch]);

  return (
    <div className="flex relative">
      {/* divider of screen starts */}
      <div className="md:w-[9vw] border-r border-[var(--secondary-border-color)] min-h-[100%] absolute left-0 top-0 z-[-1]" />
      {/* divider of screen ends */}

      <div className="relative">
        {/* product overview card starts */}
        <ProductOverview product={product} />
        <div className="md:pl-[9vw] mt-72">
          <div className="px-14">
            <p className="text-lg">{product?.description}</p>
          </div>
        </div>
        {/* product overview card ends */}
      </div>
    </div>
  );
};

export default ProductDetails;
