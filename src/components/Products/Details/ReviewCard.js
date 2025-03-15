"use client";
import { Rating } from "@mui/material";
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[var(--secondary-foreground)] backdrop-blur-[40px] shadow-[0px_4px_24px_-1px_#00000033] p-4 w-[20em] rounded-xl">
      <div className="flex items-center gap-5">
        <div className="w-[50px] h-[50px] rounded-full border border-[#281E1FCC]"></div>
        <div className="h-fit">
          <p className="font-medium text-[#281E1F]">{review?.reviewerName}</p>
          <Rating
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "1rem",
                "@media (max-width: 768px)": {
                  fontSize: "0.75rem",
                },
              },
              "& .MuiRating-iconEmpty": {
                color: "gold",
              },
            }}
            name="read-only"
            value={review?.rating}
            readOnly
            size="small"
          />
        </div>
      </div>
      <hr className="my-4 text-[#281E1F4D]" />
      <p className="text-[#281E1F] text-[14px]">{review?.comment}</p>
    </div>
  );
};

export default ReviewCard;
