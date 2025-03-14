"use client";
import { notifications } from "@/appConstants/AppConstants";
import Dropdown from "@/utilities/Dropdown";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { MdNotifications } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
const Header = () => {
  const router = useRouter();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Store", link: "/productsListing" },
    { name: "Leaderboard", link: "leaderboard" },
  ];
  const functionalitiesItems = [
    {
      icons: <MdNotifications size={18} className="max-lg:w-4 max-lg:h-4" />,
      onClickAction: () => setIsNotificationOpen(!isNotificationOpen),
    },
    {
      icons: (
        <PiHandbagSimpleFill size={17} className="max-lg:w-4 max-lg:h-4" />
      ),
      onClickAction: null,
    },
    {
      icons: (
        <PiHandbagSimpleFill size={17} className="max-lg:w-4 max-lg:h-4" />
      ),
      onClickAction: null,
    },
  ];
  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex items-center gap-0 md:gap-7">
        <p className="text-[var(--secondary-foreground)] font-press2p text-xl md:text-2xl lg:text-4xl min-w-[8vw] md:min-w-[7vw] text-center">
          GQ
        </p>
        {/* nav items start */}
        <div className="flex items-center">
          {navItems.map((items, index) => {
            return (
              <button
                onClick={() => {
                  router.push(items.link);
                }}
                key={index}
                className={`max-lg:text-sm px-3 lg:px-6 py-1 ${
                  index !== 2
                    ? "border-r-[0.1px] border-[var(--secondary-border-color)]"
                    : ""
                } hover:text-[var(--primary-hover-foreground)] cursor-pointer transition-all duration-400`}
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
        <div className="border border-[var(--primary-border-color)] px-3 lg:px-5 py-1 lg:py-2 rounded-full w-[25vw] text-xs flex items-center gap-3 mr-6 ">
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
              } px-3 lg:px-6`}
            >
              <button
                onClick={items.onClickAction}
                className="relative rounded-full border border-[var(--primary-border-color)] p-1 lg:p-2 hover:text-[var(--primary-hover-foreground)] transition-all duration-400 cursor-pointer hover:border-[var(--primary-hover-foreground)]"
              >
                {items.icons}
                {index === 0 && isNotificationOpen ? (
                  <Dropdown menu={notifications} />
                ) : (
                  ""
                )}
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
