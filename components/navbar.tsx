import { Mail } from "lucide-react";
import Link from "./link";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-back text-white px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h2 className=" font-light text-3xl tracking-wide text-white flex items-center gap-1 select-none">
            plant
            <span className="w-10 h-10 bg-[#E07A5F] text-white text-4xl font-medium rounded-full flex items-center justify-center ml-0.5">
              s
            </span>
          </h2>
        </div>

        <nav className=" md:flex items-center gap-12">
          <ul className="flex items-center gap-10 text-white/80 font-medium">
            <Link name="Plant" lien="#plant" />
            <Link name="About" lien="#about" />
            <Link name="Pricing" lien="#pricing" />
            <Link name="Shop" lien="#shop" />
          </ul>
        </nav>

        <div className="flex items-center gap-3 px-4 py-2      ">
          <a href="#footer" className="text-white ² ">
            Contact us
          </a>
          <div className="w-10 h-10 rounded-full bg-[#E07A5F] hover:bg-[#d0694e] cursor-pointer shadow-sm flex items-center justify-center group-hover:scale-105 transition">
            <Mail
              size={16}
              className=" text-white stroke-[2.5] "
            />
          </div>
        </div>
      </div>
    </header>
  );
}
