"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dumbbell, HeartPulse, Salad, Flame, PersonStanding,
  Trophy, ChevronLeft, ChevronRight, Timer, Bike, Zap, Apple
} from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "One-on-one coaching to help you build strength, learn proper techniques, and reach your fitness goals faster." },
  { icon: PersonStanding, title: "Yoga & Flexibility", desc: "Improve flexibility, balance, and mental wellness with expert-led yoga sessions for all levels." },
  { icon: Salad, title: "Nutrition Guidance", desc: "Personalized diet plans to support your fitness journey and maximize your results every step of the way." },
  { icon: Flame, title: "HIIT Training", desc: "High-intensity interval training to burn fat, boost metabolism, and improve endurance rapidly." },
  { icon: HeartPulse, title: "Cardio Programs", desc: "Structured cardio workouts designed to improve heart health, stamina, and overall fitness." },
  { icon: Bike, title: "Spin Classes", desc: "High-energy cycling classes that torch calories and build serious lower body strength." },
  { icon: Timer, title: "CrossFit", desc: "Functional movements performed at high intensity to build overall athletic performance and coordination." },
  { icon: Trophy, title: "Athletic Coaching", desc: "Sport-specific training programs designed for competitive athletes seeking peak performance." },
  { icon: Zap, title: "Strength & Conditioning", desc: "Progressive overload programs tailored to build raw power, muscle mass, and functional strength." },
  { icon: Apple, title: "Wellness Coaching", desc: "Holistic lifestyle coaching covering sleep, stress, nutrition, and movement for total wellbeing." },
  { icon: HeartPulse, title: "Group Fitness", desc: "Fun and energetic group classes that keep you motivated, accountable, and coming back for more." },
  { icon: Dumbbell, title: "Powerlifting", desc: "Dedicated squat, bench, and deadlift coaching to build elite strength and competition-ready technique." },
];

const packages = [
  {
    title: "STARTER",
    desc: "Perfect for those just beginning their fitness journey. Includes gym access and basic group classes.",
    price: "LKR 3,000 PER MONTH",
    icon: Zap,
    features: ["Gym Access", "2 Group Classes/Week", "Locker Room Access"],
  },
  {
    title: "BEGINNER",
    desc: "Ideal for beginners. Helps you build strength, learn proper techniques, and start your fitness journey with confidence.",
    price: "LKR 4,500 PER MONTH",
    icon: Dumbbell,
    features: ["Gym Access", "Unlimited Group Classes", "1 PT Session/Month", "Nutrition Tips"],
  },
  {
    title: "PROFESSIONAL",
    desc: "Designed for experienced individuals focused on advanced training techniques to maximize strength and performance.",
    price: "LKR 9,500 PER MONTH",
    icon: Trophy,
    features: ["Full Gym Access", "Unlimited Classes", "4 PT Sessions/Month", "Custom Meal Plan", "Body Composition Analysis"],
  },
  {
    title: "ELITE",
    desc: "The ultimate package for serious athletes who demand the best coaching, facilities, and personalized programming.",
    price: "LKR 15,000 PER MONTH",
    icon: Flame,
    features: ["Priority Access", "Unlimited Everything", "Daily PT Sessions", "Full Nutrition Program", "Recovery & Physio", "Competition Prep"],
  },
];

const VISIBLE = 3;
const totalSlides = Math.ceil(services.length / VISIBLE);

export default function ServicesSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, totalSlides - 1));

  const visibleServices = services.slice(current * VISIBLE, current * VISIBLE + VISIBLE);

  return (
    <section id="services" className="w-full bg-[#e8e4dc]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
      `}</style>

      {/* ── SERVICES ── */}
      <div className="py-20 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold tracking-widest text-[#1a1a1a] mb-14 uppercase"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Our Services
        </motion.h2>

        <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Arrow Left */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 disabled:opacity-20 transition hover:scale-110"
          >
            <ChevronLeft size={42} color="#1a1a1a" />
          </button>

          {/* Cards */}
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {visibleServices.map((s, i) => {
              const Icon = s.icon;
              const isCenter = i === 1;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center rounded-2xl p-10"
                  style={{
                    backgroundColor: isCenter ? "#9a9690" : "#c8c4bc",
                    border: isCenter ? "2px solid #888480" : "2px solid transparent",
                    minHeight: "340px",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-2xl mb-7"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: isCenter ? "#7a7570" : "#b0aca6",
                    }}
                  >
                    <Icon size={48} color="#e8e4dc" strokeWidth={1.4} />
                  </div>
                  <h3
                    className="text-xl font-bold uppercase tracking-wide mb-3 text-[#1a1a1a]"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm text-[#2a2a2a] leading-relaxed"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "15px", letterSpacing: "0.04em" }}
                  >
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Arrow Right */}
          <button
            onClick={next}
            disabled={current === totalSlides - 1}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 disabled:opacity-20 transition hover:scale-110"
          >
            <ChevronRight size={42} color="#1a1a1a" />
          </button>

          {/* Dots — only as many as actual slide pages */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 28 : 10,
                  height: 10,
                  backgroundColor: i === current ? "#c9a227" : "#9a9690",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── MEMBERSHIP PACKAGES ── */}
      <div className="py-20 px-8 bg-[#dedad2]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold tracking-widest text-[#1a1a1a] mb-14 uppercase italic"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Membership Packages
        </motion.h2>

        <div
          className="grid gap-6 mx-auto"
          style={{
            maxWidth: "1200px",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between"
                style={{
                  backgroundColor: "#1e1e1e",
                  padding: "36px 28px",
                  minHeight: "340px",
                }}
              >
                {/* Decorative circles */}
                <div className="absolute rounded-full" style={{ width: 120, height: 120, backgroundColor: "#2e2e2e", bottom: -30, right: -30 }} />
                <div className="absolute rounded-full" style={{ width: 70, height: 70, backgroundColor: "#282828", bottom: 50, right: 60 }} />

                <div className="relative z-10">
                  <h3
                    className="text-xl font-extrabold tracking-widest text-white mb-4"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className="text-xs text-[#aaaaaa] leading-relaxed uppercase mb-5"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
                  >
                    {pkg.desc}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-[#cccccc]"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#c9a227", flexShrink: 0, display: "inline-block" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-8">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 44, height: 44, backgroundColor: "#2e2e2e", border: "1px solid #444" }}
                  >
                    <Icon size={20} color="#c9a227" strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-xs font-bold text-white tracking-wider text-right"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {pkg.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}