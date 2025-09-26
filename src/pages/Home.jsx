import React from "react";
import Logo from "../components/logo";
import NigeriaLogo from "../components/NigeriaLogo";
import AppStore from "../components/AppStore";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <nav className="bg-transparent top-20 left-20 md:bg-white md:flex md:items-center md:justify-between md:px-[25px] md:py-[10px]">
        <Logo />
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <NigeriaLogo />
          <AppStore />
        </div>
      </nav>
      <Hero/>
    </div>
  );
};

export default Home;
