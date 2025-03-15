import React from "react";

const Dropdown = ({ menu = ["asda", "asdasd", "asdadsa"] }) => {
  return (
    <div className="rounded-xl p-3 bg-[var(--secondary-background)] z-[1000] min-w-[15em] absolute top-14 -left-48 lg:-left-24 border border-[var(--secondary-border-color)]">
      {menu?.map((item, index) => {
        return (
          <p
            onClick={item?.onClick}
            key={index}
            className="py-2 text-white rounded-full w-full hover:bg-[var(--primary-button-color)] transition-all duration-400 cursor-pointer px-3 text-sm"
          >
            {item?.title}
          </p>
        );
      })}
    </div>
  );
};

export default Dropdown;
