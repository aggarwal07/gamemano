import React from "react";

const MasterButton = ({
  text,
  btnWidth = "auto",
  onClick,
  fontSize = "16px",
  paddingY = "15px",
  hover = "dark",
}) => {
  return (
    <button
      style={{ width: btnWidth, fontSize, padding: `${paddingY} 0` }}
      onClick={onClick}
      className={`cursor-pointer rounded-full px-2 transition-all duration-400 bg-[var(--primary-button-color)] text-white font-medium ${
        hover === "dark"
          ? "hover:bg-[#332919]"
          : "hover:bg-[white] hover:text-[var(--primary-button-color)]"
      }`}
    >
      {text}
    </button>
  );
};

export default MasterButton;
