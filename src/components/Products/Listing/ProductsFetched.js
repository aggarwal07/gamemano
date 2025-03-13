"use Client";
import GamesCard from "@/components/Landing/GamesCard";
import { isLoading } from "@/store/Actions/globalAction";
import { fetchProducts } from "@/store/Actions/restApiActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsFetched = () => {
  const [productsList, setProductsList] = useState([]);
  const dispatch = useDispatch();
  const filterSettings = useSelector((state) => state.globalState.filters);
  useEffect(() => {
    dispatch(isLoading(true));
    const pathParam =
      filterSettings.categories !== "" ? filterSettings.categories : null;
    dispatch(
      fetchProducts(pathParam, (res) => {
        dispatch(isLoading(false));
        const filteredProducts = res.products.filter(
          (product) =>
            product.price >= filterSettings.lowerPriceRange &&
            product.price <= filterSettings.upperPriceRange
        );
        setProductsList(filteredProducts);
      })
    );
  }, [
    dispatch,
    filterSettings.categories,
    filterSettings.lowerPriceRange,
    filterSettings.upperPriceRange,
  ]);

  console.log(productsList, "productsList");

  return (
    <div className="w-fit flex flex-wrap gap-4 justify-start h-fit">
      {productsList?.map((item, index) => (
        <div key={index} >
          <GamesCard/>
        </div>
      ))}
    </div>
  );
};

export default ProductsFetched;
