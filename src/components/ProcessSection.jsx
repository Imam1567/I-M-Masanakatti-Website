import React from "react";
import { processSteps } from "../data/whyUs";
import { ArrowRight } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3 shadow-xs">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            How We Work
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A simple 4-step workflow to handle your tax, compliance, and legal documentation requirements efficiently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative flex flex-col justify-between hover:border-[#C58A16]/60 group transition-all duration-300"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#C58A16] font-mono mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#C58A16] mb-2 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-[#C58A16]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
