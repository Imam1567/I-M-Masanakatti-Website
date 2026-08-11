import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import { business, getWhatsAppLink } from "../config/business";

export default function FloatingWhatsApp({ onNavigate }) {
  return (
    <>
      {/* Floating WhatsApp Button (Desktop/Tablet) */}
      <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex flex-col items-end space-y-2">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#16A34A] hover:bg-emerald-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current text-white" />
          
          <span className="absolute right-full mr-3 bg-[#0F172A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
            Chat on WhatsApp
          </span>
          
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none"></span>
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A] border-t border-slate-800 p-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${business.phoneRaw}`}
          className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg flex items-center justify-center space-x-1.5 border border-slate-700"
        >
          <Phone className="w-4 h-4 text-[#C58A16]" />
          <span>Call</span>
        </a>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 bg-[#16A34A] hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center justify-center space-x-1.5 shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => onNavigate("contact")}
          className="flex-1 py-2.5 bg-[#C58A16] hover:bg-amber-600 text-white text-xs font-extrabold rounded-lg flex items-center justify-center"
        >
          <span>Contact</span>
        </button>
      </div>
    </>
  );
}
