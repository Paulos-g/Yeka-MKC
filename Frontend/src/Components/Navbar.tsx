import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MKC from "../assets/MKC logo.jpg";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

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
          <span className="max-w-[8rem] truncate font-cinzel text-sm font-bold tracking-wide text-gray-900 group-hover:text-[#B58F4D] transition-colors duration-200 sm:max-w-none sm:whitespace-nowrap sm:text-xl md:text-2xl">
            Yeka Meserete Kirstos
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/Home"
            className="font-manrope text-base font-bold  text-gray-900 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C9A253]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-manrope text-base font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-manrope text-base font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Services
          </Link>

          <Link
            to="/donate"
            className="font-manrope text-base font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Donate
          </Link>
          <Link
            to="/contact"
            className="font-manrope text-base font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          <FaBars aria-hidden="true" />
        </button>

        {/* Right Actions: Sign In & Language Toggle */}
        <div className="flex items-center gap-4">
          {/* <Buttons
            text="Sign In"
            icon={FaUser}
            className="max-sm:px-3 max-sm:py-2 max-sm:text-sm"
          /> */}

          <button
            aria-label="Language Selector"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <FaGlobe className="text-base" />
          </button>
        </div>
      </div>
      <div
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
        className={`fixed inset-0 bg-gray-950/30 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 flex h-dvh w-[min(20rem,85vw)] flex-col bg-white px-6 py-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 pb-5">
          <span className="font-cinzel text-lg font-bold text-gray-900">
            Navigation
          </span>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 pt-6">
          <Link
            onClick={closeMenu}
            to="/Home"
            className="rounded-md px-3 py-3 font-manrope text-base font-bold text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            to="/about"
            className="rounded-md px-3 py-3 font-manrope text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            onClick={closeMenu}
            to="/services"
            className="rounded-md px-3 py-3 font-manrope text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            onClick={closeMenu}
            to="/donate"
            className="rounded-md px-3 py-3 font-manrope text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Donate
          </Link>
          <Link
            onClick={closeMenu}
            to="/contact"
            className="rounded-md px-3 py-3 font-manrope text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>
      </aside>
    </header>
  );
}

export default Nav;
