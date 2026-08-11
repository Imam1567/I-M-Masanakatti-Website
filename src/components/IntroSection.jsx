import React from "react";
import { ShieldCheck, FileCheck2, Scale, BookOpen } from "lucide-react";
import { business } from "../config/business";

export default function IntroSection() {
  return (
    <section className="bg-[#F8FAFC] text-slate-800 border-b border-slate-200 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
            Professional Guidance for Your Tax & Legal Needs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At <strong>{business.name}</strong>, we assist individuals, sole proprietors, partnership firms, and small businesses with comprehensive income tax filings, GST compliance, accounting records, legal document drafting, and regulatory advice.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#C58A16]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#F5E7C3]/60 text-[#C58A16] flex items-center justify-center mb-3">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1.5">Tax Filings & Returns</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Timely and accurate preparation of Income Tax Returns and GST compliance forms.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#C58A16]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#F5E7C3]/60 text-[#C58A16] flex items-center justify-center mb-3">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1.5">Legal Advisory</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Practical consultation regarding statutory legal compliance, deeds, and court matters.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#C58A16]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#F5E7C3]/60 text-[#C58A16] flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1.5">Accounting & Audits</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Structured financial bookkeeping, balance sheet updates, and audit file assembly.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#C58A16]/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#F5E7C3]/60 text-[#C58A16] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1.5">Client Confidentiality</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Strict adherence to professional confidentiality for all tax and legal client records.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
