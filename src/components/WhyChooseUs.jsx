import React from "react";
import { Briefcase, ShieldCheck, MessageSquare, UserCheck, Lock } from "lucide-react";
import { whyChoosePoints } from "../data/whyUs";

export default function WhyChooseUs() {
  const iconMap = {
    Briefcase,
    ShieldCheck,
    MessageSquare,
    UserCheck,
    Lock
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C58A16]" />
            <span>Our Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Why Choose I M Associates?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We provide clear, accurate, and dependable professional tax and legal services built on ethical practices and total client confidentiality.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoosePoints.map((point, index) => {
            const IconComponent = iconMap[point.iconName] || ShieldCheck;
            return (
              <div
                key={point.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#C58A16]/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F5E7C3]/60 text-[#C58A16] group-hover:bg-[#0F172A] group-hover:text-white flex items-center justify-center transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#C58A16]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#C58A16] transition-colors">
                  {point.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
