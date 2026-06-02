"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-[#e8e4dc] font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
      `}</style>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 sm:px-10 py-5 bg-[#e8e4dc] relative z-50">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Fitness Sports Center Logo"
            width={58}
            height={58}
            className="object-contain"
          />
          <span
            className="font-bold tracking-[0.2em] uppercase text-[#1a1a1a]"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(13px, 1.4vw, 17px)",
            }}
          >
            Fitness Sports Center
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 mr-6">
          {["Home", "About", "Services", "Contact"].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className={`font-medium tracking-wide transition-colors duration-200 ${
                  item === "Home"
                    ? "text-[#1a1a1a] font-semibold border-b-2 border-[#c9a227] pb-0.5"
                    : "text-[#555] hover:text-[#c9a227]"
                }`}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(15px, 1.4vw, 19px)",
                }}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-7 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-7 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-[#e8e4dc] shadow-lg px-6 py-5 flex flex-col gap-5 md:hidden"
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`font-medium tracking-wide transition-colors duration-200 ${
                  item === "Home" ? "text-[#c9a227] font-semibold" : "text-[#555]"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px" }}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-76px)] px-6 sm:px-12 lg:px-24 py-10 md:py-0 overflow-hidden gap-8 md:gap-0">

        {/* Left Content */}
        <div className="flex flex-col justify-center z-10 w-full md:w-[52%] text-center md:text-left items-center md:items-start">

          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-10 h-[2px] bg-[#c9a227]" />
            <span
              className="uppercase text-[#c9a227] font-semibold tracking-[0.25em]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(12px, 1.1vw, 15px)",
              }}
            >
              Premium Fitness
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-extrabold leading-[1.04] text-[#1a1a1a] mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(44px, 7vw, 88px)",
            }}
          >
            Your <span className="text-[#c9a227]">Strength</span>
            <br />
            Starts Here.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-[#555] leading-relaxed mb-10"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              maxWidth: "440px",
              fontSize: "clamp(13px, 1.3vw, 17px)",
            }}
          >
            Join the best fitness community and achieve your goals with expert
            trainers, modern equipment, and personalized workout plans.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 items-center justify-center md:justify-start"
          >
            <Link href="#about">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#b8911f" }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[#c9a227] text-white font-bold tracking-widest uppercase shadow-lg transition-colors duration-200"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  padding: "clamp(10px, 1vw, 14px) clamp(24px, 2.5vw, 36px)",
                }}
              >
                Read More
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#b8911f" }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[#c9a227] text-white font-bold tracking-widest uppercase shadow-lg transition-colors duration-200"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  padding: "clamp(10px, 1vw, 14px) clamp(24px, 2.5vw, 36px)",
                }}
              >
                Our Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-10 mt-14 border-t border-[#ccc8be] pt-8 w-full justify-center md:justify-start"
          >
            {[
              { value: "500+", label: "Members" },
              { value: "20+", label: "Trainers" },
              { value: "15+", label: "Programs" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-bold text-[#1a1a1a]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(22px, 2.6vw, 36px)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="uppercase tracking-widest text-[#888] mt-1"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(11px, 1vw, 14px)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Hero image with animated blob */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center w-full md:w-[44%]"
        >
          {mounted && (
            <motion.div
              className="absolute"
              style={{
                width: "min(420px, 85vw)",
                height: "min(420px, 85vw)",
                backgroundColor: "#c9a227",
                opacity: 0.15,
              }}
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "50% 60% 40% 60% / 30% 70% 60% 40%",
                  "40% 60% 60% 40% / 60% 40% 60% 40%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
                scale: [1, 1.06, 0.97, 1.04, 1],
                rotate: [0, 10, -6, 8, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {mounted && (
            <motion.div
              className="absolute"
              style={{
                width: "min(500px, 95vw)",
                height: "min(500px, 95vw)",
                border: "1.5px solid #c9a227",
                opacity: 0.12,
              }}
              animate={{
                borderRadius: [
                  "40% 60% 60% 40% / 40% 40% 60% 60%",
                  "60% 40% 40% 60% / 60% 60% 40% 40%",
                  "50% 50% 60% 40% / 40% 60% 50% 50%",
                  "40% 60% 60% 40% / 40% 40% 60% 60%",
                ],
                rotate: [0, -12, 6, 0],
                scale: [1, 1.03, 0.98, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          )}

          <Image
            src="/assets/hero-image.png"
            alt="Fitness athlete with dumbbells"
            width={480}
            height={520}
            className="object-contain select-none relative z-10"
            priority
            sizes="(max-width: 768px) 75vw, 44vw"
            style={{
              height: "clamp(280px, 58vw, 74vh)",
              width: "auto",
              maxWidth: "100%",
            }}
          />
        </motion.div>
      </section>
    </div>
  );
}