import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Scale } from "lucide-react";
import { business, getWhatsAppLink } from "../config/business";

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Us" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white py-3 transition-all duration-300">
      
      {/* Top Bar with Quick Phone & Email */}
      <div className="hidden md:block bg-slate-900 text-slate-300 text-xs py-1.5 border-b border-slate-800 mb-3 -mt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`tel:${business.phoneRaw}`} className="flex items-center space-x-1.5 hover:text-[#C58A16] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C58A16]" />
              <span>{business.phone}</span>
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {business.whatsapp}</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <Scale className="w-3.5 h-3.5 text-[#C58A16]" />
            <span>Taxation • Compliance • Legal Advisory</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Light Green Rounded Navbar Pill Container */}
        <div className={`bg-[#ECF4E8] border border-[#D6E6D1] rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 shadow-sm transition-all duration-300 ${
          isScrolled ? "shadow-md bg-[#E8F2E4]" : ""
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#C58A16] flex items-center justify-center font-bold text-xl shadow-sm group-hover:bg-[#C58A16] group-hover:text-white transition-all">
                IM
              </div>
              <div>
                <div className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-red-700 transition-colors">
                  {business.name}
                </div>
                <div className="text-[10px] sm:text-xs text-red-600 font-bold tracking-wider uppercase mt-0.5">
                  {business.tagline}
                </div>
              </div>
            </a>

            {/* Desktop Nav Links (Centered) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-transparent">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "text-[#C58A16] bg-white shadow-xs"
                        : "text-[#0F172A] hover:text-[#C58A16] hover:bg-white/60"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => handleNavClick("contact")}
                className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0F172A] hover:bg-slate-800 text-white shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => handleNavClick("contact")}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0F172A] text-white"
              >
                Contact
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#0F172A] hover:bg-white/80 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="bg-[#ECF4E8] border border-[#D6E6D1] rounded-2xl p-4 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    activeSection === link.id
                      ? "bg-white text-[#C58A16] shadow-xs"
                      : "text-[#0F172A] hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#D6E6D1] flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-2.5 rounded-xl text-center text-sm font-bold bg-[#0F172A] text-white shadow-sm"
              >
                Contact Us
              </button>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-sm font-semibold bg-[#16A34A] text-white flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
