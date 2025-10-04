"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [activeButton, setActiveButton] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cv = "/files/Adeyemi-Temitope-Adejare-FlowCV-Resume-20250905.pdf";

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setIsMenuOpen(false); // Close menu when a button is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getButtonStyles = (buttonName: string) => {
    if (activeButton === buttonName) {
      // Active button: normal button styling
      return "rounded-full text-white dark:text-black";
    } else {
      // Inactive button: no background, white text
      return "rounded-full bg-transparent text-white hover:bg-white/10 border-none shadow-none text-white dark:text-black";
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block w-11/12 p-2 mx-auto bg-black dark:bg-white shadow-sm shadow-white/10 rounded-full">
        <nav>
          <ul className="flex items-center justify-between">
            <div className="flex md:space-x-10">
              <Link href="#home">
                <Button
                  className={getButtonStyles("Home")}
                  variant={activeButton === "Home" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Home")}
                >
                  Home
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  className={getButtonStyles("About")}
                  variant={activeButton === "About" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("About")}
                >
                  About
                </Button>
              </Link>
              <Link href="#experience">
                <Button
                  className={getButtonStyles("Experience")}
                  variant={activeButton === "Experience" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Experience")}
                >
                  Experience
                </Button>
              </Link>
            </div>

            <span className="font-semibold text-white dark:text-black">AD</span>

            <div className="flex md:space-x-10">
              <Link href={cv} download={true}>
                <Button
                  className={getButtonStyles("Resume")}
                  variant={activeButton === "Resume" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Resume")}
                >
                  Resume
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  className={getButtonStyles("Projects")}
                  variant={activeButton === "Projects" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Projects")}
                >
                  Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  className={getButtonStyles("Contact")}
                  variant={activeButton === "Contact" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Contact")}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </ul>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden w-11/12 py-3 px-5 mx-auto bg-black dark:bg-white rounded-full relative md:shadow-none shadow-sm shadow-white/10">
        <div className="flex items-center justify-between">
          {/* AD Logo/Text on the left */}
          <span className="font-semibold text-white dark:text-black text-lg">
            AD
          </span>

          {/* Hamburger menu button on the right */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="text-white dark:text-black hover:bg-white/10 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black dark:bg-white text-white dark:text-black rounded-3xl shadow-lg z-50 p-4 space-y-2">
            <Link href="#home" className="block">
              <Button
                className={`w-full text-left justify-start text-white dark:text-black ${getButtonStyles(
                  "Home"
                )}`}
                variant={activeButton === "Home" ? "default" : "ghost"}
                onClick={() => handleButtonClick("Home")}
              >
                Home
              </Button>
            </Link>
            <Link href="#about" className="block">
              <Button
                className={`w-full text-left justify-start text-white dark:text-black ${getButtonStyles(
                  "About"
                )}`}
                variant={activeButton === "About" ? "default" : "ghost"}
                onClick={() => handleButtonClick("About")}
              >
                About
              </Button>
            </Link>
            <Link href="#experience" className="block">
              <Button
                className={`w-full text-left justify-start text-white dark:text-black ${getButtonStyles(
                  "Experience"
                )}`}
                variant={activeButton === "Experience" ? "default" : "ghost"}
                onClick={() => handleButtonClick("Experience")}
              >
                Experience
              </Button>
            </Link>
            <Link href={cv} download={true} className="block">
              <Button
                className={`w-full text-left justify-start text-white dark:text-black ${getButtonStyles(
                  "Resume"
                )}`}
                variant={activeButton === "Resume" ? "default" : "ghost"}
                onClick={() => handleButtonClick("Resume")}
              >
                Resume
              </Button>
            </Link>
            <Link href="#projects" className="block">
              <Button
                className={`w-full text-left justify-start text-white dark:text-black ${getButtonStyles(
                  "Projects"
                )}`}
                variant={activeButton === "Projects" ? "default" : "ghost"}
                onClick={() => handleButtonClick("Projects")}
              >
                Projects
              </Button>
            </Link>
            <Link href="#contact" className="block">
              <Button
                className={`w-full text-left justify-start text-white dark:text-black${getButtonStyles(
                  "Contact"
                )}`}
                variant={activeButton === "Contact" ? "default" : "ghost"}
                onClick={() => handleButtonClick("Contact")}
              >
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
