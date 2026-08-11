import React from "react";
import { 
  FileText, 
  Receipt, 
  TrendingUp, 
  Calculator, 
  CheckCircle, 
  Scale, 
  Building, 
  FolderCheck,
  Briefcase,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { services } from "../data/services";
import { getWhatsAppLink } from "../config/business";

export default function ServicesSection({ onNavigate }) {
  const iconMap = {
    FileText,
    Receipt,
    TrendingUp,
    Calculator,
    CheckCircle,
    Scale,
    Building,
    FolderCheck,
    Briefcase
  };

  const handleEnquire = (serviceTitle) => {
    const text = `Hello I M Associates, I would like to enquire about your ${serviceTitle}. I would appreciate guidance on the procedures and fees.`;
    window.open(getWhatsAppLink(text), "_blank");
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-[#C58A16]" />
            <span>Scope of Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Professional assistance across direct and indirect taxation, financial accounting, statutory compliance, legal services, and labour law compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || FileText;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#C58A16]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#F5E7C3]/60 text-[#C58A16] group-hover:bg-[#0F172A] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#C58A16] mb-2 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center text-[11px] text-slate-600 space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C58A16] flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleEnquire(service.title)}
                    className="flex-1 py-2 px-3 rounded bg-[#16A34A] hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </button>

                  <button
                    onClick={() => onNavigate("contact")}
                    className="py-2 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center justify-center"
                    title="Direct Contact"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
