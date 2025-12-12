import React from 'react';
import { RefreshCw, ShieldCheck, GraduationCap } from "lucide-react";

const Mission = () => {
  const principles = [
    {
      icon: RefreshCw,
      step: "01",
      title: "Circular Responsibility",
      description: "We reduce waste in Germany by collecting old and forgotten frames and redirecting them to where they are valued most.",
      color: "text-[#4F97A0]", // Turquoise accent
      bg: "bg-[#4F97A0]/10"
    },
    {
      icon: ShieldCheck,
      step: "02",
      title: "Professional Standards",
      // Hier haben wir den String in JSX umgewandelt, um den Link einzufügen
      description: (
          <>
            We don't just dump boxes. Every pair is professionally cleaned, repaired, and measured by our Partner{' '}
            <a
                href="https://brillenweltweit.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-gray-400 underline-offset-2 hover:text-[#D48B53] transition-colors"
            >
              BrillenWeltWeit
            </a>.
          </>
      ),
      color: "text-[#D48B53]", // Terracotta accent
      bg: "bg-[#D48B53]/10"
    },
    {
      icon: GraduationCap,
      step: "03",
      title: "Access to Opportunity",
      description: "Good vision is the foundation for independence. We want to enable people to partake in education and life in general.",
      color: "text-[#295E49]", // Green accent
      bg: "bg-[#295E49]/10"
    }
  ];

  return (
      <section className="py-24 px-4 bg-reframe-whiteice relative overflow-hidden">
        {/* Decorative Background Blob - Optional subtle detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D48B53]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6 font-sans tracking-tight">
              The <span className="text-[#D48B53]">Reframe</span> Mission
            </h2>
            <p className="text-xl text-[#555] max-w-2xl mx-auto leading-relaxed font-sans">
              "We are reframing the eyewear lifecycle. From unused resources in Germany to accessible tools for education in Ghana."
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative">

            {/* Desktop Connector Line (Visualizes the flow) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-10 transform translate-y-4" />

            {principles.map((principle, index) => (
                <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  {/* Top Row: Icon and Step Number */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 ${principle.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <principle.icon className={`h-8 w-8 ${principle.color}`} />
                    </div>
                    <span className="text-4xl font-black text-gray-100 font-sans select-none group-hover:text-gray-200 transition-colors">
                      {principle.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-3 font-sans group-hover:text-[#D48B53] transition-colors">
                    {principle.title}
                  </h3>

                  {/* Hier wird das description-Element (jetzt JSX) gerendert */}
                  <div className="text-gray-600 leading-relaxed mb-6">
                    {principle.description}
                  </div>

                  {/* Bottom Color Bar */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${principle.color.replace('text-', '')} to-transparent opacity-50`} />
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Mission;