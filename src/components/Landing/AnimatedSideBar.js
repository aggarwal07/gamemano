"use client";
import { useRouter } from "next/navigation";
import { RiHomeLine } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiStore2Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import React from "react";

const AnimatedSideBar = () => {
  const router = useRouter();
  const tabs = [
    { icon: <RiHomeLine size={22} />, name: "Home" },
    { icon: <HiOutlineEnvelope size={22} />, name: "Messages" },
    { icon: <RiStore2Line size={22} />, name: "Game Store" },
    { icon: <MdOutlinePayment size={23} />, name: "Payments" },
    { icon: <BsTrophy size={21} />, name: "Leaderboard" },
  ];
  return (
    <div className="w-fit py-10 bg-[#3D352A80] backdrop-blur-[40px] shadow-[0px_4px_24px_-1px_#00000033]">
      <p
        onClick={() => {
          router.push("/");
        }}
        className="font-press2p text-2xl text-[var(--secondary-foreground)] text-center cursor-pointer px-5"
      >
        GameQuest
      </p>
      <div className="flex flex-col py-14 border-b border-[var(--secondary-border-color)] w-full gap-9 text-white">
        {tabs.map((tab, index) => (
          <button
            className="flex items-center gap-4 cursor-pointer px-5 transition-all duration-400 hover:text-[var(--primary-button-color)]"
            key={index}
          >
            {tab.icon}
            <p className="text-lg">{tab.name}</p>
          </button>
        ))}
      </div>
      <div className="flex flex-col py-16 gap-9">
        <button className="flex items-center gap-4 cursor-pointer px-5 transition-all duration-400 hover:text-[var(--primary-button-color)]">
          <IoSettingsOutline size={22} />
          <p className="text-lg">Settings</p>
        </button>
        <button className="flex items-center gap-4 cursor-pointer px-5 transition-all duration-400 hover:text-[var(--primary-button-color)]">
          <MdLogout size={22} />
          <p className="text-lg">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default AnimatedSideBar;
