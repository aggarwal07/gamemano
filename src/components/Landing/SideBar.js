import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiStore2Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const SideBar = () => {
  const tabs = [
    { icon: <RiHomeLine size={22} />, name: "Home" },
    { icon: <HiOutlineEnvelope size={22} />, name: "Messages" },
    { icon: <RiStore2Line size={22} />, name: "Game Store" },
    { icon: <MdOutlinePayment size={23} />, name: "Payments" },
    { icon: <BsTrophy size={21} />, name: "Leaderboard" },
  ];
  return (
    <div className="w-full h-full flex flex-col px-auto items-center py-6">
      {/* logo starts */}
      <p className="text-[var(--secondary-foreground)] font-press2p text-4xl">
        GQ
      </p>
      {/* logo ends */}
      {/* tabs starts */}
      <div className="flex flex-col items-center py-16 border-b border-[var(--secondary-border-color)] w-full gap-9">
        {tabs.map((tab, index) => (
          <button key={index}>{tab.icon}</button>
        ))}
      </div>
      {/* tabs ends */}
      {/* setting and logout starts */}
      <div className="flex flex-col items-center py-16 gap-9">
        <button>
          <IoSettingsOutline size={22} />
        </button>
        <button>
          <MdLogout size={22} />
        </button>
      </div>
      {/* setting and logout ends */}
    </div>
  );
};

export default SideBar;
