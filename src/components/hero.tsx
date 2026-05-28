"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#e8e4dc] font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
      `}</style>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 bg-[#e8e4dc]">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Fitness Sports Center Logo"
            width={52}
            height={52}
            className="object-contain"
          />
          <span
            className="text-sm font-bold tracking-[0.2em] uppercase text-[#1a1a1a]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Fitness Sports Center
          </span>
        </div>

        <ul className="flex items-center gap-10 mr-16">
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
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px" }}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-between min-h-[calc(100vh-72px)] px-16 lg:px-24 overflow-hidden">

        {/* Left Content */}
        <div className="flex flex-col justify-center z-10 w-[50%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[2px] bg-[#c9a227]" />
            <span
              className="text-xs tracking-[0.25em] uppercase text-[#c9a227] font-semibold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Premium Fitness
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-6xl lg:text-7xl font-extrabold leading-[1.05] text-[#1a1a1a] mb-6"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            Your <span className="text-[#c9a227]">Strength</span>
            <br />
            Starts Here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-[13px] text-[#555] leading-relaxed mb-10"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              maxWidth: "360px",
            }}
          >
            Join the best fitness community and achieve your goals with expert
            trainers, modern equipment, and personalized workout plans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 items-center"
          >
            <Link href="#about">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#b8911f" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-full bg-[#c9a227] text-white text-sm font-bold tracking-widest uppercase shadow-lg transition-colors duration-200"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Read More
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#b8911f" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-full bg-[#c9a227] text-white text-sm font-bold tracking-widest uppercase shadow-lg transition-colors duration-200"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Our Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-10 mt-14 border-t border-[#ccc8be] pt-8"
          >
            {[
              { value: "500+", label: "Members" },
              { value: "20+", label: "Trainers" },
              { value: "15+", label: "Programs" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs uppercase tracking-widest text-[#888] mt-0.5"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Hero Image — vertically centered with text */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center w-[40%]"
        >
          <div
            className="absolute rounded-full bg-[#c9a227] opacity-10"
            style={{ width: "320px", height: "320px" }}
          />
          <Image
            src="/assets/hero-image.png"
            alt="Fitness athlete with dumbbells"
            width={380}
            height={420}
            className="object-contain select-none relative z-10"
            priority
            style={{ height: "68vh", width: "auto", maxWidth: "100%" }}
          />
        </motion.div>
      </section>
    </div>
  );
}