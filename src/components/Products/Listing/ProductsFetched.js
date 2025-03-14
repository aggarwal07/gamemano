"use client";
import GamesCard from "@/components/Landing/GamesCard";
import { isLoading, setProductsFetched } from "@/store/Actions/globalAction";
import { fetchProducts } from "@/store/Actions/restApiActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

const ProductsFetched = () => {
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
            product.price <= filterSettings.upperPriceRange &&
            product.rating >= filterSettings.ratings
        );
        setProductsList(filteredProducts);
        dispatch(setProductsFetched(filteredProducts));
      })
    );
  }, [
    dispatch,
    filterSettings.categories,
    filterSettings.lowerPriceRange,
    filterSettings.upperPriceRange,
    filterSettings.ratings
  ]);

  //pagination work starts
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productsList.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  //pagination work ends

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-2xl">
            Search Results for &quot;
            {filterSettings.categories !== ""
              ? filterSettings.categories
              : "All"}
            &quot;
          </p>
          <p className="text-xl">{productsList.length} results found</p>
        </div>
      </div>

      <div className="w-fit flex flex-wrap gap-4 justify-start h-fit mt-8">
        {currentProducts?.map((item, index) => (
          <div key={index}>
            <GamesCard gameCardData={item} />
          </div>
        ))}
      </div>

      {productsList.length > itemsPerPage && (
        <div className="flex justify-center mt-6">
          <Pagination
            count={Math.ceil(productsList.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "var(--foreground)",
              },
              "& .Mui-selected": {
                backgroundColor: "var(--secondary-foreground) !important",
                color: "white !important",
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsFetched;
