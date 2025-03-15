"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductOverview from "./ProductOverview";
import { useDispatch } from "react-redux";
import { isLoading } from "@/store/Actions/globalAction";
import {
  fetchProductIdWise,
  fetchProducts,
} from "@/store/Actions/restApiActions";
import ProductReviews from "./ProductReviews";
import CustomPolygon from "@/utilities/CustomPolygon";
import MasterButton from "@/utilities/MasterButton";
import RecommendedProducts from "./RecommendedProducts";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProd, setSimilarProd] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  //protected route work starts
  useEffect(() => {
    const authData = localStorage.getItem("authData");
    if (!authData || authData?.username === "" || authData?.password === "") {
      localStorage.clear();
      router.push("/login");
    }
  });
  //protected route work ends

  useEffect(() => {
    dispatch(isLoading(true));
    dispatch(
      fetchProductIdWise(productId, (res) => {
        setProduct(res);
        dispatch(isLoading(false));
      })
    );
  }, [dispatch, productId]);

  useEffect(() => {
    if (!product) {
      return;
    }
    dispatch(isLoading(true));
    dispatch(
      fetchProducts(product?.category, (res) => {
        dispatch(isLoading(false));
        setSimilarProd(res.products);
      })
    );
  }, [dispatch, product]);

  return (
    <div className="flex relative">
      {/* divider of screen starts */}
      <div className="max-md:hidden md:w-[9vw] border-r border-[var(--secondary-border-color)] min-h-[100%] absolute left-0 top-0 z-[-1]" />
      {/* divider of screen ends */}

      <div className="relative">
        {/* product overview card starts */}
        <ProductOverview product={product} />
        <div className="md:pl-[9vw] mt-14 sm:mt-28 xl:mt-60">
          <div className="px-5 xl:px-14">
            <p className="text-lg">{product?.description}</p>
          </div>
        </div>
        {/* product overview card ends */}

        {/* review section starts */}
        <div>
          <ProductReviews reviewsArray={product?.reviews} />
        </div>
        {/* review section ends */}

        {/* detailed banner section starts */}
        <div className="w-full bg-[var(--secondary-background)] py-20">
          <div className="md:pl-[9vw] w-full">
            <div className="flex max-md:flex-col items-center max-md:gap-8 justify-around px-5">
              <div className="w-[60%] md:w-[35%]">
                <CustomPolygon width="w-full" />
              </div>
              <div className="flex flex-col items-center w-[90%] md:w-[45%]">
                <p className="font-aoboshiOne text-2xl text-[var(--secondary-foreground)]">
                  Buy Your
                </p>
                <p className="font-aoboshiOne text-6xl text-[var(--secondary-foreground)]">
                  Product
                </p>
                <p className="font-prostoOne text-lg my-14">
                  {product?.description}
                </p>
                {/* <p className="font-prostoOne text-lg mb-14 mt-5">
                  Nibh vitae morbi urna sapien mattis dolor dictum massa id.
                  Eget arcu nulla dolor nisi. Facilisis risus lectus odio enim
                  ut tortor facilisi neque nibh.
                </p> */}
                <MasterButton
                  text="Buy Now"
                  btnWidth="w-[8em] md:w-[10em] lg:w-[12em]"
                  paddingY="py-[10px] md:py-[13px] lg:py-[15px]"
                  fontSize="max-md:text-sm"
                  hover="light"
                />
                <p className="font-semibold mt-2">Buy now for $40 only</p>
              </div>
            </div>
          </div>
        </div>
        {/* detailed banner section starts */}

        {/* recommended products section starts */}
        <div>
          <RecommendedProducts similarProds={similarProd} />
        </div>
        {/* recommended products section ends */}
      </div>
    </div>
  );
};

export default ProductDetails;
