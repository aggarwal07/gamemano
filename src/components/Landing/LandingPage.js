import React from "react";
import SideBar from "./SideBar";
import HomePage from "./HomePage";

const LandingPage = () => {
  return (
    <div className="w-full flex">
      <div className="md:w-[7vw]">
        <SideBar />
      </div>
      <div className="md:w-[93vw]">
        <HomePage />
      </div>
    </div>
  );
};

export default LandingPage;
