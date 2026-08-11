import React, { useState } from "react";
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { business, getWhatsAppLink } from "../config/business";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Income Tax Services",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Hello I M Associates,
I would like to enquire about your ${formData.service}.
My name is ${formData.name}.
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
My requirement is: ${formData.message || "Requesting tax & legal consultation."}`;

    window.open(getWhatsAppLink(text), "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-[#C58A16]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Reach out to I M Associates for tax filings, GST returns, accounting advice, or legal documentation assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-[#C58A16] font-extrabold text-xl mb-1">{business.name}</div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {business.tagline}
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-[#C58A16] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Phone Call</div>
                    <a href={`tel:${business.phoneRaw}`} className="font-semibold text-white hover:text-[#C58A16] transition-colors text-base">
                      {business.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp Lead Chat</div>
                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors text-base"
                    >
                      {business.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-[#C58A16] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Official Email</div>
                    <a href={`mailto:${business.email}`} className="font-medium text-slate-200 hover:text-white transition-colors">
                      {business.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-[#C58A16] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Office Address</div>
                    <div className="font-normal text-slate-300 text-xs leading-relaxed mt-0.5">
                      {business.officeAddress}, {business.cityState}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3.5 pt-2 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-[#C58A16] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-300 space-y-1">
                    <div className="font-semibold text-white">Consultation Hours</div>
                    <div className="text-slate-400">{business.hours}</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-[#16A34A] hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                Send Us an Enquiry
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Fill in your contact details and service requirements below. Clicking send will open WhatsApp with your prepared enquiry.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-6 text-center space-y-3 my-6 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg">Enquiry Message Ready!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Your details have been formatted and opened in WhatsApp. If WhatsApp did not open automatically, click the button below.
                  </p>
                  <div className="pt-2">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#16A34A] text-white font-semibold rounded-lg text-xs hover:bg-emerald-700"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#C58A16] focus:border-[#C58A16] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#C58A16] focus:border-[#C58A16] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#C58A16] focus:border-[#C58A16] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#C58A16] focus:border-[#C58A16] transition-all"
                    >
                      <option value="Income Tax Services">Income Tax Services (ITR, TDS/TCS & Advisory)</option>
                      <option value="GST Services">GST Registration & Return Filing</option>
                      <option value="Audit, Compliance and Accounting Services">Audit, Compliance and Accounting Services</option>
                      <option value="Legal Services">Legal Services (Civil, Criminal, Economic Law & POA)</option>
                      <option value="Business Registration">Business Registration (Proprietorship / MSME / Company)</option>
                      <option value="Labour Law Services">Labour Law Services (PF, ESI, Shop License & Disputes)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Your Message / Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your tax or legal query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#C58A16] focus:border-[#C58A16] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-base shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-[#C58A16]" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>

                  <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C58A16]" />
                    <span>Confidentiality guaranteed. Your details remain private.</span>
                  </div>

                </form>
              )}
            </div>

            {/* Google Map Embed Placeholder */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">Office Location Map</h4>
              <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Office Location Map"
                  src={business.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
