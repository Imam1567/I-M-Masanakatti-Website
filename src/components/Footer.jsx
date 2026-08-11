import React from "react";
import { Phone, MessageSquare, Mail, MapPin, ArrowUp } from "lucide-react";
import { business, getWhatsAppLink } from "../config/business";

export default function Footer({ setActiveSection }) {
  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800 text-sm">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#C58A16] flex items-center justify-center font-extrabold text-white text-xl">
                IM
              </div>
              <div>
                <div className="font-extrabold text-xl text-white tracking-tight leading-none">
                  {business.name}
                </div>
                <div className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                  {business.tagline}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional tax, accounting and legal assistance with a focus on reliable service, accurate return filings, and clear guidance.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold hover:bg-emerald-900/60 transition-colors flex items-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${business.phoneRaw}`}
                className="px-3 py-1.5 rounded bg-slate-900 text-slate-200 border border-slate-800 font-semibold hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C58A16]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Our Services" },
                { id: "why-us", label: "Why Choose Us" },
                { id: "contact", label: "Contact Us" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-[#C58A16] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>Income Tax Return (ITR) & TDS/TCS Filing</li>
              <li>GST Return, Appeal & Tribunal Cases</li>
              <li>Audit, Compliance & Accounting Services</li>
              <li>Legal Advisory, Deeds & Gazette</li>
              <li>Firm, Company & Trademark Registration</li>
              <li>Labour Law & PF/ESI Compliance</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C58A16] flex-shrink-0 mt-0.5" />
                <span>{business.officeAddress}, {business.cityState}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C58A16] flex-shrink-0" />
                <a href={`tel:${business.phoneRaw}`} className="hover:text-white">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C58A16] flex-shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 I M Associates Tax and Law Practitioner. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span>Professional & Confidential</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
