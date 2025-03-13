import React from "react";
import { GrSearch } from "react-icons/gr";
import { MdNotifications } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
const Header = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Game Store", link: "/game-store" },
    { name: "Leaderboard", link: "leaderboard" },
  ];
  const functionalitiesItems = [
    { icons: <MdNotifications size={18} className="" />, onClickAction: null },
    {
      icons: <PiHandbagSimpleFill size={17} className="" />,
      onClickAction: null,
    },
    {
      icons: <PiHandbagSimpleFill size={17} className="" />,
      onClickAction: null,
    },
  ];
  return (
    <div className="flex justify-between items-center px-4 py-5">
      <div className="flex items-center gap-7">
        <p className="text-[var(--secondary-foreground)] font-press2p text-4xl">
          GQ
        </p>
        {/* nav items start */}
        <div className="flex items-center">
          {navItems.map((items, index) => {
            return (
              <button
                key={index}
                className={`text-md px-6 py-1 ${
                  index !== 2
                    ? "border-r-[0.1px] border-[var(--secondary-border-color)]"
                    : ""
                } hover:text-[var(--primary-hover-foreground)] cursor-pointer`}
              >
                {items.name}
              </button>
            );
          })}
        </div>
        {/* nav items ends */}
      </div>

      {/* search and functionalites starts */}
      <div className="flex  items-center">
        <div className="border border-[var(--primary-border-color)] px-5 py-2 rounded-full w-[25vw] text-xs flex items-center gap-3 mr-6 ">
          <GrSearch size={17} />
          <input
            style={{ outline: "none", border: "none" }}
            type="text"
            placeholder="What are you looking for?"
            className="w-full"
          />
        </div>
        {functionalitiesItems.map((items, index) => {
          return (
            <div
              key={index}
              className={`${
                index === 0
                  ? "border-x-[0.1px] border-[var(--secondary-border-color)]"
                  : ""
              }${
                index !== 2
                  ? "border-r-[0.1px] border-[var(--secondary-border-color)]"
                  : ""
              }  px-6`}
            >
              <button className="rounded-full border border-[var(--primary-border-color)] p-2 hover:text-[var(--primary-hover-foreground)] cursor-pointer hover:border-[var(--primary-hover-foreground)]">
                {items.icons}
              </button>
            </div>
          );
        })}
      </div>
      {/* search and functionalites ends */}
    </div>
  );
};

export default Header;
