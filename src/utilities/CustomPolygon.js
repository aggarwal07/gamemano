"use client";
import React from "react";

const CustomPolygon = ({ width = "40%", xAxis = 285, yAxis = 15, zIndex }) => {
  return (
    <svg
      style={{ width: width, zIndex: zIndex }}
      className="w-[40%] h-auto"
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={`0,0 ${xAxis},0 300,${yAxis} 300,200 0,200`}
        fill="none"
        stroke="var(--secondary-border-color)"
        strokeWidth="1"
      />
    </svg>
  );
};

export default CustomPolygon;
