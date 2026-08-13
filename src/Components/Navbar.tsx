import { Link } from "react-router-dom";
import MKC from "../assets/MKC logo.jpg";
import Buttons from "./Button";
import { FaUser, FaGlobe } from "react-icons/fa";

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b shadow-lg border-white/30">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={MKC}
            alt="MKC Logo"
            className="w-11 h-11 object-contain rounded-full border border-amber-200/50 shadow-xs transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-cinzel font-bold text-xl sm:text-2xl tracking-wide text-gray-900 group-hover:text-[#B58F4D] transition-colors duration-200">
            Yeka Meserete Kirstos
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/Home"
            className="font-manrope text-sm font-semibold text-gray-900 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C9A253]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-manrope text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-manrope text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/partner"
            className="font-manrope text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Partner
          </Link>
          <Link
            to="/donate"
            className="font-manrope text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Donate
          </Link>
          <Link
            to="/contact"
            className="font-manrope text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions: Sign In & Language Toggle */}
        <div className="flex items-center gap-4">
          <Buttons text="Sign In" icon={FaUser} />

          <button
            aria-label="Language Selector"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <FaGlobe className="text-base" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
