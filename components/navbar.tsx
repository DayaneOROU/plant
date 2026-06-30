import { Mail } from "lucide-react";
import Link from "./link";

export default function Navbar() {
  return (
    <header className="px-4 sm:px-10 lg:px-30 py-3 sm:py-5 w-full bg-back text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="font-light text-2xl sm:text-3xl tracking-wide text-white flex items-center gap-1 select-none">
            plant
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E07A5F] text-white text-3xl sm:text-4xl font-medium rounded-full flex items-center justify-center ml-0.5">
              s
            </span>
          </h2>
        </div>

        <nav className="flex items-center gap-4 lg:gap-12">
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-10 text-white/80 font-medium text-xs sm:text-sm lg:text-base">
            <Link name="Plant" lien="#plant" />
            <Link name="About" lien="#about" />
            <Link name="Pricing" lien="#pricing" />
            <Link name="Shop" lien="#shop" />
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2">
          <a href="#footer" className="text-white text-xs sm:text-sm lg:text-base hidden sm:block">
            Contact us
          </a>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E07A5F] hover:bg-[#d0694e] cursor-pointer shadow-sm flex items-center justify-center group-hover:scale-105 transition">
            <Mail size={14} className="text-white stroke-[2.5] sm:size-4" />
          </div>
        </div>
      </div>
    </header>
  );
}