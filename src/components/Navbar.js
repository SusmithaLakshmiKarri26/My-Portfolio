import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-lavender/30">
      <div className="max-w-6xl mx-auto px-6 py-4 sm:py-5 lg:py-6 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" onClick={() => setOpen(false)}>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-lavender name-font cursor-pointer">
            Susmitha Lakshmi
          </h1>
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#achievements" className="nav-link">Achievements</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-primary text-white hover:bg-lavender transition"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-primary"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (Animated) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-white dark:bg-zinc-900">
          <a onClick={() => setOpen(false)} href="#about" className="nav-link">About</a>
          <a onClick={() => setOpen(false)} href="#skills" className="nav-link">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects" className="nav-link">Projects</a>
          <a onClick={() => setOpen(false)} href="#achievements" className="nav-link">Achievements</a>
          <a onClick={() => setOpen(false)} href="#certifications" className="nav-link">Certifications</a>
          <a onClick={() => setOpen(false)} href="#contact" className="nav-link">Contact</a>
        </div>
      </div>

    </nav>
  );
}
