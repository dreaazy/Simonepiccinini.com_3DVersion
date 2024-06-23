import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      {location.pathname === "/" && <Hero />}
    </div>
  );
};

export default Header;
