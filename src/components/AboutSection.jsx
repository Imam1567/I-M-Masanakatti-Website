import React from "react";
import { CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { business } from "../config/business";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
              <img
                src="/about-im-associates.png"
                alt="I M Associates Tax and Law Practice"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-slate-200 text-xs shadow-md">
                <div className="font-bold text-[#0F172A] text-sm mb-0.5">Confidential & Dependable Practice</div>
                <div className="text-slate-600">Structured financial & legal advisory adhering strictly to statutory guidelines.</div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#C58A16]" />
              <span>Practice Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              About {business.name}
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>{business.name} {business.tagline}</strong> is a dedicated tax advisory and legal consultancy practice helping individuals, professionals, firms, and companies navigate regulatory compliance.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus on delivering accurate work with emphasis on precision, complete transparency, clear explanations of legal statutory clauses, and strict client confidentiality.
            </p>

            {/* Principles */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-[#C58A16] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-sm">Accurate Documentation</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Meticulous check of tax computations & compliance forms.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-[#C58A16] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-sm">Clear Communication</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Plain-language explanations of tax rules and legal notices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-[#C58A16] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-sm">Practical Guidance</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Realistic advisory tailored to individual client situations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-[#C58A16] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-sm">Strict Confidentiality</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Ethical and secure management of your financial & legal data.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3 text-slate-700 bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-[#C58A16] flex-shrink-0" />
              <span>We prioritize building long-term client trust through reliable, honest professional support.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
