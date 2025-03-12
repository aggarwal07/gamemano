import React from "react";

const MasterButton = ({
  text,
  btnWidth = "auto",
  onClick,
  fontSize = "16px",
  paddingY = "15px",
}) => {
  return (
    <button
      style={{ width: btnWidth, fontSize, padding: `${paddingY} 0` }}
      onClick={onClick}
      className={`cursor-pointer rounded-full px-2  bg-[var(--primary-button-color)] text-white font-medium`}
    >
      {text}
    </button>
  );
};

export default MasterButton;
