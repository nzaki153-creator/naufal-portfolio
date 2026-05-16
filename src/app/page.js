"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function CopywriterPortfolio() {
 const [activeService, setActiveService] = React.useState(null);
 const [cardPosition, setCardPosition] = React.useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const projects = [
  {
    title: "Instagram Caption Copywriting – Brightening Sheet Mask",
    description:
      "Caption Instagram untuk produk Brightening Sheet Mask yang dirancang untuk menarik perhatian, menyentuh pain point, lalu CTA pembelian cepat.",
  },
  {
    title: "Coffee Shop Rebranding",
    description:
      "Brand voice + tagline + promo copy untuk coffee shop lokal.",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Headline + CTA untuk meningkatkan conversion rate landing page.",
  },
];

  const services = [
  {
  title: "Instagram Sales Copy",
  subtitle: "Brightening Sheet Mask Campaign",
  hook: "Kulit kusam lagi? Makeup tebal nggak nutup rasa minder?",

  problem: "Setiap pagi lihat cermin rasanya capek duluan karena kulit kusam bikin kurang percaya diri.",

  emotion: "Perasaan insecure muncul walau sudah pakai makeup tebal.",

  solution: "Brightening Sheet Mask bikin kulit lebih lembap, cerah, dan glowing alami dalam 20 menit.",

  cta: "Chat admin sekarang sebelum stok habis di WhatsApp."
  },
  {
    title: "Brand Storytelling",
    subtitle: "Coffee Shop Rebranding",
    hook: "Membangun voice brand yang lebih kuat dan konsisten",
    result: "Membuat brand lebih memorable dan punya identitas jelas"
  },
  {
    title: "Landing Page Copy",
    subtitle: "Startup Conversion Copy",
    hook: "Fokus pada struktur headline → benefit → CTA",
    result: "Meningkatkan potensi konversi halaman landing"
  },
  {
    title: "Email Marketing",
    subtitle: "Sales Funnel Copy",
    hook: "Copy berbasis urgency & emotional trigger",
    result: "Meningkatkan open rate dan click rate email"
  },
  {
    title: "Product Descriptions",
    subtitle: "E-commerce Copy",
    hook: "Menjelaskan produk dengan bahasa yang menjual",
    result: "Meningkatkan minat beli dari deskripsi produk"
  },
  {
    title: "Creative Campaign Writing",
    subtitle: "Brand Campaign Concept",
    hook: "Konsep campaign berbasis storytelling",
    result: "Membantu brand lebih standout di sosial media"
  }
];

 return (
  <LayoutGroup>
   <motion.div 
   className="relative min-h-screen bg-black text-white font-sans">

 {/* BACKGROUND GLOBAL */}
<div className="fixed inset-0 pointer-events-none z-[0]">

  {/* GRID */}
  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:80px_80px]" />

  {/* GLOW */}
  <div className="absolute top-[-200px] left-1/2 w-[700px] h-[700px] -translate-x-1/2 bg-purple-500/30 blur-[140px] rounded-full" />
  <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-500/30 blur-[140px] rounded-full" />

  {/* TEXT */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white/40 text-2xl md:text-4xl font-bold text-center px-8 leading-relaxed">
      “Jika tidak menjual, itu bukanlah sesuatu yang kreatif.” — David Ogilvy
    </div>
  </div>

</div>

{/* Hero */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative overflow-hidden border-b border-white/10"
>
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-80" />

  <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
      }}
    >
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
    </motion.div>

  </div>
</motion.section>

      {/* About */}
      <motion.section
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1]
  }}
  viewport={{ amount: 0.3 }}
  className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12"
>
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
      </motion.section>

      {/* Services */}
    <section
  id="services"
  className="scroll-mt-24 border-y border-white/10 bg-zinc-950"
>
  <div className="max-w-6xl mx-auto px-6 py-24">
    <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-8">
      Services
    </p>

  <div
  className="grid md:grid-cols-3 gap-6"
  style={{ perspective: "1200px" }}
>
      {services.map((service, index) => {
        const isActive = activeService === index;

        return (
          <motion.div
  key={index}
  layoutId={`service-card-${index}`}
  initial={{
  opacity: 0,
  y: 60,
  scale: 0.92,
  rotateX: 8
}}
  whileInView={{
  opacity: 1,
  y: 0,
  scale: 1,
  rotateX: 0
}}
  transition={{
  delay: index * 0.12,
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1]
}}
whileHover={{
  scale: 1.03,
  z: 40
}}
whileTap={{
  scale: 0.98
}}
  viewport={{ once: true, amount: 0.2 }}
  onClick={(e) => {
   const rect = e.currentTarget.getBoundingClientRect();

  setCardPosition({
    x: rect.left + rect.width / 2 - window.innerWidth / 2,
    y: rect.top + rect.height / 2 - window.innerHeight / 2,
  });

  setActiveService(index);
}}
  className="rounded-3xl border border-white/10 p-8 cursor-pointer hover:bg-white/5 origin-center will-change-transform"
>
            <h3 className="text-2xl font-semibold mb-4">
              0{index + 1}
            </h3>

            <p className="text-2xl font-semibold mb-2">
  {service.title}
</p>

<p className="text-zinc-500 text-sm mb-4">
  {service.subtitle}
</p>

<div className="space-y-2 text-sm text-zinc-400">
  <p>
    <span className="text-white/60">Hook:</span>{" "}
    {service.hook.slice(0, 60)}...
  </p>

  <p>
    <span className="text-white/60">Result:</span>{" "}
    {service.result?.slice(0, 70) || "No result"}...
  </p>
</div>

<p className="text-zinc-600 text-xs mt-4">
  Klik untuk lihat full case study →
</p>
          </motion.div >
        );
      })}
    </div>
  </div>
</section>

      {/* Portfolio */}
      <motion.section
  initial={{ opacity: 0, y: 140 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1]
  }}
  viewport={{ amount: 0.3 }}
  className="max-w-6xl mx-auto px-6 py-24"
>
        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-8">
          Selected Works
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
           <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: index * 0.15,
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]
  }}
  viewport={{ once: true, amount: 0.4 }}
  className="rounded-3xl border border-white/10 p-8 cursor-pointer hover:bg-white/5"
>
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {project.description}
              </p>
           </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
<motion.section
  id="contact"
  initial={{ opacity: 0, y: 140 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1]
  }}
  viewport={{ once: true, amount: 0.3 }}
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
      </motion.section>
    
    
<AnimatePresence>
  {activeService !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl text-white">
  
  <div className="relative w-full max-w-3xl px-6 py-10 bg-zinc-900 rounded-3xl border border-white/10">

    <button
      onClick={() => setActiveService(null)}
      className="absolute top-4 left-4 bg-white/10 px-4 py-2 rounded-xl"
    >
      Back
    </button>

    <h1 className="text-4xl font-bold mb-6">
      {services[activeService].title}
    </h1>

    <div className="space-y-5 text-lg">
      <div>
        <p className="text-white/60">Hook</p>
        <p>{services[activeService].hook}</p>
      </div>

      <div>
        <p className="text-white/60">Problem</p>
        <p>{services[activeService].problem}</p>
      </div>

      <div>
        <p className="text-white/60">Emotion</p>
        <p>{services[activeService].emotion}</p>
      </div>

      <div>
        <p className="text-white/60">Solution</p>
        <p>{services[activeService].solution}</p>
      </div>

      <div>
        <p className="text-white/60">CTA</p>
        <p>{services[activeService].cta}</p>
      </div>
    </div>

  </div>
</div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
    </LayoutGroup>
  );
}