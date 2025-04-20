// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./../assets/images/LOGO-VECTOR.png";

export default function Navbar({ lenis }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(el, { offset: 0, immediate: false });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg px-8 py-3 rounded-full flex items-center justify-between w-[40%] max-w-4xl text-sm text-[#FE4F2D] font-semibold shadow-xl">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("hero")}
      >
        <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex font-[Minecraft] text-xs tracking-normal gap-6">
        <button
          onClick={() => scrollTo("hero")}
          className="hover:text-white transition duration-300"
        >
          HOME
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="hover:text-white transition duration-300"
        >
          PROJECTS
        </button>
        <button
          onClick={() => scrollTo("services")}
          className="hover:text-white transition duration-300"
        >
          SERVICES
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="hover:text-white transition duration-300"
        >
          CONTACT ME
        </button>
      
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden relative">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="p-1"
        >
          {open ? (
            <X className="h-6 w-6 text-[#FE4F2D]" />
          ) : (
            <Menu className="h-6 w-6 text-[#FE4F2D]" />
          )}
        </button>

        {open && (
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-lg rounded-xl p-4 flex flex-col items-center gap-4 font-['Minecraft'] text-xs text-[#FE4F2D] shadow-lg">
            <button
              onClick={() => {
                scrollTo("hero");
                setOpen(false);
              }}
              className="hover:text-white transition duration-300"
            >
              HOME
            </button>
            <button
              onClick={() => {
                scrollTo("projects");
                setOpen(false);
              }}
              className="hover:text-white transition duration-300"
            >
              PROJECTS
            </button>
            <button
              onClick={() => {
                scrollTo("services");
                setOpen(false);
              }}
              className="hover:text-white transition duration-300"
            >
              SERVICES
            </button>
            <button
              onClick={() => {
                scrollTo("contact");
                setOpen(false);
              }}
              className="hover:text-white transition duration-300"
            >
              CONTACT ME
            </button>
          
          </div>
        )}
      </div>
    </nav>
  );
}
