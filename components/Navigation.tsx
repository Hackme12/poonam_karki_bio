"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onExperienceClick: () => void;
}

export default function Navigation({ onExperienceClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    //{ name: "Skills", href: "#skills" },
    { name: "Conferences", href: "#conferences" },
    { name: "Research", href: "#research" },
    // { name: 'Data', href: '#data-viz' },
    // { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#"
            className={`text-2xl font-bold transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Poonam Karki
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? "text-gray-700" : "text-white hover:text-blue-200"
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={onExperienceClick}
              className={`font-medium transition-colors hover:text-blue-600 ${
                scrolled ? "text-gray-700" : "text-white hover:text-blue-200"
              }`}
            >
              Experience
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onExperienceClick();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
