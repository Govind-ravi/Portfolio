import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Header = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      data-aos="fade-down"
      className="flex justify-between items-center z-[5]"
    >
      <span className="logo font-bold text-[2.5rem] sm:text-4xl cursor-pointer">
        Tech<span className="text-theme">Portfolio</span>
      </span>
      <div className="tabs relative flex gap-4 nav-items items-center justify-between w-1/2 font-semibold">
        <a className={activeSection === "home" ? "active" : ""} href="#home">
          Home
        </a>
        <a className={activeSection === "about" ? "active" : ""} href="#about">
          About
        </a>
        <a
          className={activeSection === "projects" ? "active" : ""}
          href="#projects"
        >
          Projects
        </a>
        <a
          className={activeSection === "service" ? "active" : ""}
          href="#service"
        >
          Service
        </a>
        <a
          className={activeSection === "contact" ? "active" : ""}
          href="#contact"
        >
          Contact
        </a>
        <div
          className="arrow cursor-pointer text-secondary"
          onClick={handleMenuToggle}
        >
          <CgMenuRight size={18} />
        </div>
        {menuOpen && (
          <div
            onClick={handleMenuToggle}
            className="absolute top-0 left-0 h-screen w-screen z-[9]"
          ></div>
        )}
        {menuOpen && (
          <div
            className="menu text-box absolute right-0 top-16 bg-white shadow-lg z-10 space-y-2"
            style={{ padding: "10px" }}
          >
            {["home", "about", "projects", "service", "contact"].map(
              (section) =>
                activeSection !== section && (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={handleMenuToggle}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
