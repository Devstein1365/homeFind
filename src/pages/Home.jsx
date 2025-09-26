import React from "react";
import Logo from "../components/logo";
import NigeriaLogo from "../components/NigeriaLogo";
import AppStore from "../components/AppStore";

const Home = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-[25px] py-[10px]">
        <Logo />
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <NigeriaLogo />
          <AppStore />
        </div>
      </nav>
    </div>
  );
};

export default Home;
