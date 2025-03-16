const MasterButton = ({
  text,
  btnWidth = "w-auto", // Default to automatic width
  onClick,
  fontSize = "16px",
  paddingY = "15px",
  hover = "dark",
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full px-2 sm:px-4 transition-all duration-400 bg-[var(--primary-button-color)] text-white font-medium ${paddingY} ${fontSize} ${btnWidth} ${
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
