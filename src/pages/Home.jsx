import React from "react";
import Logo from "../components/logo";
import NigeriaLogo from "../components/NigeriaLogo";
import AppStore from "../components/AppStore";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <nav className="bg-white flex items-center justify-between px-[25px] py-[10px]">
        <Logo />
        <div className="hidden md:flex md:items-center md:gap-6">
          <NigeriaLogo />
          <AppStore />
        </div>
      </nav>
      <Hero/>
    </div>
  );
};

export default Home;
