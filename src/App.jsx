import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero onNavigate={handleNavigate} />

        {/* Introduction */}
        <IntroSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Grid */}
        <ServicesSection onNavigate={handleNavigate} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Process Roadmap */}
        <ProcessSection />

        {/* Contact & Enquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp onNavigate={handleNavigate} />
    </div>
  );
}
