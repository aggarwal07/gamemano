"use client";
import React from "react";

const CustomPolygon = ({
  width = "40%",
  height = "h-auto",
  horizontalLength = 300,
  xAxis = horizontalLength - 15,
  yAxis = 15,
  zIndex,
}) => {
  return (
    <svg
      style={{ zIndex: zIndex }}
      className={`${width} ${height}`}
      viewBox={`0 0 ${horizontalLength} 200`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={`0,0 ${xAxis},0 ${horizontalLength},${yAxis} ${horizontalLength},200 0,200`}
        fill="none"
        stroke="var(--secondary-border-color)"
        strokeWidth="1"
      />
    </svg>
  );
};

export default CustomPolygon;
