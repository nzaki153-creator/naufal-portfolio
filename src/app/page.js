"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CopywriterPortfolio() {
  const [activeService, setActiveService] = React.useState(null);


  const projects = [
    {
      title: "Instagram Caption Copywriting – Brightening Sheet Mask",
      description:
        "Caption Instagram untuk produk Brightening Sheet Mask yang dirancang untuk menarik perhatian sejak awal, menyentuh masalah kulit kusam yang dialami target audiens, lalu menjelaskan manfaat produk secara sederhana, dan ditutup dengan ajakan bertindak yang jelas untuk mendorong pembelian.",
    },
    {
      title: "Coffee Shop Rebranding",
      description:
        "Created a new brand voice, tagline, and promotional copy for a local coffee business.",
    },
    {
      title: "Landing Page Optimization",
      description:
        "Wrote conversion-focused headlines and CTA sections for a startup landing page.",
    },
  ];

  const services = [
    {
      title: "Social Media Copywriting",
      example: "Created emotionally engaging Instagram captions...",
    },
    {
      title: "Brand Storytelling",
      example: "Developed a complete storytelling direction...",
    },
    {
      title: "Landing Page Copy",
      example: "Wrote conversion-focused headlines...",
    },
    {
      title: "Email Marketing",
      example: "Created persuasive email campaigns...",
    },
    {
      title: "Product Descriptions",
      example: "Crafted compelling product descriptions...",
    },
    {
      title: "Creative Campaign Writing",
      example: "Built creative campaign concepts...",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-80" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
              Freelance Copywriter
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Words that
              <span className="text-zinc-400"> sell, connect, </span>
              and stay remembered.
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-8">
              I help brands turn attention into emotion and emotion into action
              through strategic, human-centered copywriting.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform"
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Writing with strategy,
            <br />
            not just aesthetics.
          </h2>
        </div>

        <div>
          <p className="text-zinc-300 leading-relaxed text-lg">
            I'm a freelance copywriter focused on helping brands communicate in
            a way that feels authentic, persuasive, and memorable.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-white/10 bg-zinc-950">
  <div className="max-w-6xl mx-auto px-6 py-24">
    <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-8">
      Services
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service, index) => {
        const isActive = activeService === index;

        return (
          <motion.div
            key={index}
            layoutId={`service-${index}`}
            onClick={() => setActiveService(index)}
            className="rounded-3xl border border-white/10 p-8 cursor-pointer hover:bg-white/5"
          >
            <h3 className="text-2xl font-semibold mb-4">
              0{index + 1}
            </h3>

            <p className="text-zinc-300 text-lg mb-4">
              {service.title}
            </p>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-zinc-400 pt-4 border-t border-white/10">
                {service.example}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* Portfolio */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-8">
          Selected Works
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-8 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >
        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let's create copy
          <br />
          people actually remember.
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform cursor-pointer">
            Email Me
          </button>

          <a
            href="https://instagram.com/nzaki30"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition inline-block"
          >
            Instagram
          </a>
        </div>
      </section>
    
    
<AnimatePresence>
  {activeService !== null && (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        layoutId={`service-${activeService}`}
        className="w-full max-w-4xl bg-zinc-900 rounded-3xl p-8 relative"
      >
        {/* CLOSE */}
        <button
          onClick={() => setActiveService(null)}
          className="absolute top-6 right-6 text-white/70 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* SAFETY CHECK (WAJIB) */}
        {activeService !== null && (
          <>
            <h2 className="text-3xl font-bold mb-6">
              {services[activeService].title}
            </h2>

            <div className="h-64 bg-zinc-800 rounded-2xl mb-6" />

            <p className="text-zinc-300 leading-relaxed">
              {services[activeService].example}
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}