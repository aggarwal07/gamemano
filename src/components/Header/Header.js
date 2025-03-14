"use client";
import { notifications } from "@/appConstants/AppConstants";
import Dropdown from "@/utilities/Dropdown";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { MdNotifications } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiStore2Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  const hamburgerTabs = [
    { icon: <RiHomeLine size={17} />, name: "Home", onClickAction: null },
    {
      icon: <HiOutlineEnvelope size={17} />,
      name: "Messages",
      onClickAction: null,
    },
    {
      icon: <RiStore2Line size={17} />,
      name: "Game Store",
      onClickAction: null,
    },
    {
      icon: <MdOutlinePayment size={17} />,
      name: "Payments",
      onClickAction: null,
    },
    { icon: <BsTrophy size={17} />, name: "Leaderboard", onClickAction: null },
    {
      icon: <IoSettingsOutline size={17} />,
      name: "Settings",
      onClickAction: null,
    },
    { icon: <MdLogout size={17} />, name: "Logout", onClickAction: null },
  ];

  return (
    <div className="relative flex justify-between items-center max-sm:gap-2 py-5 max-sm:pl-2">
      <div className="flex items-center gap-0 md:gap-7">
        <p
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer text-[var(--secondary-foreground)] font-press2p text-xl md:text-2xl lg:text-4xl min-w-[8vw] md:min-w-[7vw] text-center"
        >
          GQ
        </p>

        {/* Hamburger Menu Icon Visible only on small screens starts */}
        <button
          className="sm:hidden text-2xl ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
        {/* Hamburger Menu Icon Visible only on small screens ends */}

        {/* Desktop Navigation Hidden on small screens starts */}
        <div className="hidden sm:flex items-center">
          {navItems.map((items, index) => (
            <button
              onClick={() => router.push(items.link)}
              key={index}
              className={`max-lg:text-sm px-3 lg:px-6 py-1 ${
                index !== 2
                  ? "border-r-[0.1px] border-[var(--secondary-border-color)]"
                  : ""
              } hover:text-[var(--primary-hover-foreground)] cursor-pointer transition-all duration-400`}
            >
              {items.name}
            </button>
          ))}
        </div>
      </div>
      {/* Desktop Navigation Hidden on small screens ends */}

      {/* Mobile Menu starts */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--secondary-foreground)] shadow-lg flex flex-col items-center sm:hidden z-[100]">
          {hamburgerTabs.map((items, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(items.link);
                setIsMenuOpen(false); // Close menu on click
              }}
              className="py-2 w-full text-center border-b border-gray-200 last:border-0 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              {items.icon}
              <p className="text-xs">{items.name}</p>
            </button>
          ))}
        </div>
      )}
      {/* Mobile Menu ends */}

      {/* Search and Functionalities */}
      <div className="flex items-center">
        <div className="border border-[var(--primary-border-color)] px-3 lg:px-5 py-1 lg:py-2 rounded-full w-[50%] sm:w-[25vw] text-xs flex items-center gap-3 mr-6">
          <GrSearch size={17} />
          <input
            style={{ outline: "none", border: "none" }}
            type="text"
            placeholder="What are you looking for?"
            className="w-full"
          />
        </div>
        {functionalitiesItems.map((items, index) => (
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
              {index === 0 && isNotificationOpen && (
                <Dropdown menu={notifications} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
