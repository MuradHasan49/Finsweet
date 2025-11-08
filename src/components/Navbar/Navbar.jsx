import React, { useState } from "react";
import Logo1 from "../../assets/BannerImg/logo1.png";
import Button from "../Global/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1C1E53]">
      <nav className="container mx-auto flex justify-between items-center py-8 px-4 md:px-0">
        {/* Logo */}
        <div>
          <img src={Logo1} alt="logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center text-[#BBBBCB]">
          <ul className="flex gap-8">
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              About us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Features
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Pricing
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              FAQ
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Blog
            </li>
          </ul>
          <Button>Contact us</Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#BBBBCB] focus:outline-none transition-transform duration-300"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rotate-90 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Smooth Animation) */}
      <div
        className={`md:hidden bg-[#1C1E53] text-[#BBBBCB] px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li className="hover:text-white active:text-white focus:text-white cursor-pointer transition-colors duration-300">
            Home
          </li>
          <li className="hover:text-white active:text-white focus:text-white cursor-pointer transition-colors duration-300">
            About us
          </li>
          <li className="hover:text-white active:text-white focus:text-white cursor-pointer transition-colors duration-300">
            Features
          </li>
          <li className="hover:text-white active:text-white focus:text-white cursor-pointer transition-colors duration-300">
            Pricing
          </li>
          <li className="hover:text-white active:text-white focus:text-white cursor-pointer transition-colors duration-300">
            FAQ
          </li>
          <li className="hover:text-white active:text-white focus:text-white cursor-pointer transition-colors duration-300">
            Blog
          </li>
        </ul>
        <div
          className={`mt-4 flex justify-center transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
