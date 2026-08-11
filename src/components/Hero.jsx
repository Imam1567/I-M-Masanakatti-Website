import React from "react";
import { MessageSquare, ArrowRight, CheckCircle2, Scale } from "lucide-react";
import { business, getWhatsAppLink } from "../config/business";

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative bg-white text-slate-800 border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#0F172A] text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-4 h-4 text-[#C58A16]" />
              <span>Tax & Law Practice</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Professional Tax & Legal Services <span className="text-[#C58A16]">You Can Rely On</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {business.introStatement}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate("contact")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-bold bg-[#0F172A] hover:bg-slate-800 text-white shadow-md transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-bold bg-[#16A34A] hover:bg-emerald-700 text-white shadow-md transition-all flex items-center justify-center space-x-2.5"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C58A16] flex-shrink-0" />
                <span>Income Tax & ITR Filing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C58A16] flex-shrink-0" />
                <span>GST Return & Appeal</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C58A16] flex-shrink-0" />
                <span>Legal Advisory & Drafting</span>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 group">
              <img
                src="/hero-tax-image.jpg"
                alt="Tax Summary Sheet and Legal Consultation"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0F172A]">Taxation & Compliance Practice</div>
                  <div className="text-slate-500 text-[11px]">Accurate filings & statutory legal guidance</div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
