"use client";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import Link from "./link";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 px-10 z-100 transition-all duration-300 ease-in-out text-white ${
        scrolled
          ? "top-4 w-[95%] max-w-6xl rounded-3xl bg-back/90 backdrop-blur-md shadow-lg p-3 lg:px-10"
          : "top-0 w-full bg-back p-5 lg:px-30"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="flex items-center gap-4 lg:gap-12">
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-10 text-white/80 font-medium text-xs sm:text-sm lg:text-base">
            <Link name="Plant" lien="#plant" />
            <Link name="About" lien="#about" />
            <Link name="Join" lien="#join" />
            <Link name="Shop" lien="#shop" />
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2">
          <a
            href="#footer"
            className="text-white text-xs sm:text-sm lg:text-base hidden sm:block"
          >
            Contact us
          </a>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E07A5F] hover:bg-[#d0694e] cursor-pointer shadow-sm flex items-center justify-center group-hover:scale-105 transition">
            <a href="#join">

            <Mail size={14} className="text-white stroke-[2.5] sm:size-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
