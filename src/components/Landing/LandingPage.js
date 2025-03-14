"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Header from "../Header/Header";
import Carousel from "@/utilities/Carousel";
import GamesBanner from "./GamesBanner";
import { FaLongArrowAltRight } from "react-icons/fa";
import GamesCard from "./GamesCard";
import { useDispatch } from "react-redux";
import { isLoading, setProductsFetched } from "@/store/Actions/globalAction";
import { fetchProducts } from "@/store/Actions/restApiActions";
import SimilarProducts from "../Products/Listing/SimilarProducts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedSideBar from "./AnimatedSideBar";
import gsap from "gsap";

const LandingPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    dispatch(isLoading(true));
    dispatch(
      fetchProducts(null, (res) => {
        setProductsList(res.products);
        dispatch(setProductsFetched(res.products));
        dispatch(isLoading(false));
      })
    );
  }, [dispatch]);

  const handleMouseEnterSideBard = () => {
    gsap.to("#animatedSidebar", {
      left: 0,
      duration: 1,
      ease: "power2.out",
    });
  };

  const handleMouseLeaveSideBard = () => {
    gsap.to("#animatedSidebar", {
      left: "-256px",
      duration: 1,
      ease: "power2.out",
    });
  };

  const slides = productsList?.slice(0, 3).map((item, index) => ({
    slide: (
      <div className="ml-14 mt-20">
        <GamesBanner key={index} gameData={item} landing={true} />
      </div>
    ),
  }));
  return (
    <div className="w-full relative">
      <div
        onMouseLeave={handleMouseLeaveSideBard}
        id="animatedSidebar"
        className="w-fit h-fit absolute top-0 -left-64 z-[1000]"
      >
        <AnimatedSideBar />
      </div>
      {/* sidebar starts */}
      <div
        onMouseEnter={handleMouseEnterSideBard}
        className="max-sm:hidden w-[8vw] md:w-[7vw] absolute left-0 top-0 border-r border-[var(--secondary-border-color)] h-[100%] z-[10]"
      >
        <SideBar />
      </div>
      {/* sidebar ends */}

      {/* header starts */}
      <div className="bg-[var(--secondary-background)]">
        <Header />
      </div>
      {/* header ends */}

      {/* landing section starts */}
      <div className="sm:pl-[8vw] md:pl-[7vw] bg-[var(--secondary-background)] w-full h-[44em]">
        <Carousel slides={slides} />
      </div>
      {/* landing section ends */}

      {/* gameCards section starts */}
      <div className="sm:pl-[8vw] md:pl-[7vw] w-full py-16 overflow-x-hidden">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <p className="text-2xl md:text-3xl lg:text-4xl font-press2p text-[var(--secondary-foreground)]">
              MOST TRENDING
            </p>
            <div
              onClick={() => {
                router.push("/productsListing");
              }}
              className="flex items-center gap-2 border-b border-transparent text-white transition-all duration-400 hover:text-[var(--primary-button-color)] hover:border-[var(--primary-button-color)] cursor-pointer"
            >
              <p className="max-lg:text-sm">GO TO STORE</p>
              <FaLongArrowAltRight
                className="max-lg:w-4 max-lg:h-4"
                size={22}
              />
            </div>
          </div>
          <div className="mt-7 flex items-center gap-3 md:gap-5 overflow-x-auto scrollbar-hide">
            {productsList?.slice(0, 6).map((item, index) => {
              return <GamesCard key={index} gameCardData={item} />;
            })}
          </div>
        </div>
      </div>
      {/* gameCards section ends */}

      {/*detailed gameCards section starts */}
      {productsList.length > 0 && (
        <SimilarProducts products={productsList.slice(0, 3)} />
      )}
      {/*detailed gameCards section ends */}
    </div>
  );
};

export default LandingPage;
