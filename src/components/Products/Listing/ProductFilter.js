"use client";
import { isLoading, setFilterSettings } from "@/store/Actions/globalAction";
import { fetchCategories } from "@/store/Actions/restApiActions";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductFilter = () => {
  const [categories, setCategories] = useState([]);

  const filterSettings = useSelector((state) => state.globalState.filters);
  const categorySelected = useSelector(
    (state) => state.globalState.filters.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoading(true));
    dispatch(
      fetchCategories((res) => {
        setCategories(res);
        dispatch(isLoading(false));
      })
    );
  }, [dispatch]);

  const handleCategoryChange = (e, category) => {
    category !== null
      ? dispatch(setFilterSettings({ categories: category }))
      : dispatch(setFilterSettings({ categories: "" }));
  };

  return (
    <div className="text-white py-8 px-4 rounded-xl bg-[#3D352A]/50 backdrop-blur-[40px] shadow-[0px_4px_24px_-1px_#00000033]">
      {/* categories filter starts */}
      <div>
        <p className="font-medium">Categories</p>
        <div className="flex items-center py-3">
          <input
            onChange={(e) => {
              handleCategoryChange(e, null);
            }}
            checked={categorySelected === "" ? true : false}
            type="checkbox"
            className="cursor-pointer appearance-none w-5 h-5 bg-[#2B2417] rounded-md border border-[var(--secondary-border-color)] checked:border-transparent relative before:content-[''] before:w-full before:h-full before:flex before:items-center before:justify-center checked:before:content-['✔'] checked:before:text-white checked:before:text-lg"
          />
          <label className="ml-2 text-[14px] font-light">All</label>
        </div>
        {categories?.map((item, index) => (
          <div key={index} className="flex items-center py-3">
            <input
              onChange={(e) => {
                handleCategoryChange(e, item?.slug);
              }}
              checked={categorySelected === item?.slug ? true : false}
              type="checkbox"
              className="cursor-pointer appearance-none w-5 h-5 bg-[#2B2417] rounded-md border border-[var(--secondary-border-color)] checked:border-transparent relative before:content-[''] before:w-full before:h-full before:flex before:items-center before:justify-center checked:before:content-['✔'] checked:before:text-white checked:before:text-lg"
            />
            <label className="ml-2 text-[14px] font-light">{item?.name}</label>
          </div>
        ))}
      </div>
      {/* categories filter ends */}

      {/* price filter starts */}
      <div className="mt-8">
        <p className="font-medium">Price</p>
        <div className="py-3 flex items-center gap-3">
          <input
            value={filterSettings.lowerPriceRange}
            onChange={(e) =>
              dispatch(setFilterSettings({ lowerPriceRange: e.target.value }))
            }
            className="outline-none bg-[#2B2417] text-center py-2 text-sm w-[5em] rounded-md border border-[var(--secondary-border-color)]"
            type="number"
          />
          <p>-</p>
          <input
            value={filterSettings.upperPriceRange}
            onChange={(e) =>
              dispatch(setFilterSettings({ upperPriceRange: e.target.value }))
            }
            className="outline-none bg-[#2B2417] text-center py-2 text-sm w-[5em] rounded-md border border-[var(--secondary-border-color)]"
            type="number"
          />
        </div>
      </div>
      {/* price filter ends */}

      {/* rating filter starts */}
      <div className="mt-8">
        <p className="font-medium">Rating</p>
        <div className="py-3">
          {[1, 2, 3, 4].reverse().map((item) => {
            return (
              <div
                onClick={() => {
                  dispatch(setFilterSettings({ ratings: item }));
                }}
                key={item}
                className="flex items-center gap-2 py-1"
              >
                <Rating
                  sx={{
                    "& .MuiRating-iconEmpty": {
                      color: "gold",
                    },
                  }}
                  name="read-only"
                  value={item}
                  readOnly
                  size="small"
                />
                <p className="font-light text-[14px]">& Up</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* rating filter ends */}
    </div>
  );
};

export default ProductFilter;
