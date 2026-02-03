"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/evologo.png"
            alt="Company Logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h1 className="font-heading text-2xl text-primary tracking-wider">
              EVOMARKET
            </h1>
            <p className="text-xs text-gray-400 -mt-1">Academy</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-white hover:text-primary transition-colors duration-300 font-medium"
            >
              Accueil
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("formation")}
              className="text-white hover:text-primary transition-colors duration-300 font-medium"
            >
              Formation
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("planning")}
              className="text-white hover:text-primary transition-colors duration-300 font-medium"
            >
              Planning
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("formateurs")}
              className="text-white hover:text-primary transition-colors duration-300 font-medium"
            >
              Formateurs
            </button>
          </li>
          <li>
            <a
              href="tel:0624458847"
              className="bg-primary text-dark px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Appelez maintenant
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 my-1 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-dark/98 backdrop-blur-lg md:hidden transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            <li>
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-white text-2xl font-heading hover:text-primary transition-colors duration-300"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("formation")}
                className="text-white text-2xl font-heading hover:text-primary transition-colors duration-300"
              >
                Formation
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("planning")}
                className="text-white text-2xl font-heading hover:text-primary transition-colors duration-300"
              >
                Planning
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("formateurs")}
                className="text-white text-2xl font-heading hover:text-primary transition-colors duration-300"
              >
                Formateurs
              </button>
            </li>
            <li>
              <a
                href="tel:0624458847"
                className="bg-primary text-dark px-8 py-3 rounded-full font-bold text-xl hover:bg-yellow-400 transition-all duration-300"
              >
                Appelez maintenant
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
