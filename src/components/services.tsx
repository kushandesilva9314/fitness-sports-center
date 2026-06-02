"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(0);

  const prev = () => { setDirection(-1); setCurrent((c) => Math.max(c - 1, 0)); };
  const next = () => { setDirection(1); setCurrent((c) => Math.min(c + 1, totalSlides - 1)); };

  const visibleServices = services.slice(current * VISIBLE, current * VISIBLE + VISIBLE);

  return (
    <section id="services" className="w-full bg-[#e8e4dc]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
      `}</style>

      {/* ── SERVICES ── */}
      <div style={{ padding: "clamp(48px, 8vw, 100px) clamp(24px, 6vw, 80px)" }}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-bold tracking-widest text-[#1a1a1a] uppercase"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            marginBottom: "clamp(32px, 5vw, 64px)",
          }}
        >
          Our Services
        </motion.h2>

        <div className="relative w-full">
          {/* Arrow Left */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute z-10 disabled:opacity-20 transition-all hover:scale-110"
            style={{
              left: "clamp(-8px, -2vw, -20px)",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronLeft style={{ width: "clamp(28px, 3vw, 44px)", height: "clamp(28px, 3vw, 44px)" }} color="#1a1a1a" />
          </button>

          {/* Cards */}
          <div style={{ overflow: "hidden", padding: "0 clamp(16px, 2vw, 32px)" }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "clamp(12px, 2vw, 28px)",
                }}
              >
                {visibleServices.map((s, i) => {
                  const Icon = s.icon;
                  const isCenter = i === 1;
                  return (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex flex-col items-center text-center rounded-2xl"
                      style={{
                        backgroundColor: isCenter ? "#9a9690" : "#c8c4bc",
                        border: isCenter ? "2px solid #888480" : "2px solid transparent",
                        padding: "clamp(24px, 4vw, 56px) clamp(16px, 3vw, 40px)",
                        minHeight: "clamp(280px, 35vw, 420px)",
                      }}
                    >
                      {/* Icon box */}
                      <div
                        className="flex items-center justify-center rounded-2xl"
                        style={{
                          width: "clamp(72px, 9vw, 120px)",
                          height: "clamp(72px, 9vw, 120px)",
                          backgroundColor: isCenter ? "#7a7570" : "#b0aca6",
                          marginBottom: "clamp(16px, 2.5vw, 32px)",
                          flexShrink: 0,
                        }}
                      >
                        <Icon
                          style={{ width: "clamp(32px, 4vw, 56px)", height: "clamp(32px, 4vw, 56px)" }}
                          color="#e8e4dc"
                          strokeWidth={1.4}
                        />
                      </div>

                      <h3
                        className="font-bold uppercase tracking-wide text-[#1a1a1a]"
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "clamp(15px, 1.8vw, 24px)",
                          marginBottom: "clamp(8px, 1.2vw, 16px)",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-[#2a2a2a] leading-relaxed"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "clamp(13px, 1.3vw, 17px)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {s.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Right */}
          <button
            onClick={next}
            disabled={current === totalSlides - 1}
            className="absolute z-10 disabled:opacity-20 transition-all hover:scale-110"
            style={{
              right: "clamp(-8px, -2vw, -20px)",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronRight style={{ width: "clamp(28px, 3vw, 44px)", height: "clamp(28px, 3vw, 44px)" }} color="#1a1a1a" />
          </button>

          {/* Dots */}
          <div className="flex justify-center" style={{ gap: "clamp(6px, 1vw, 12px)", marginTop: "clamp(24px, 3vw, 48px)" }}>
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "clamp(20px, 2.5vw, 32px)" : "clamp(8px, 1vw, 12px)",
                  height: "clamp(8px, 1vw, 12px)",
                  backgroundColor: i === current ? "#c9a227" : "#9a9690",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── MEMBERSHIP PACKAGES ── */}
      <div
        className="bg-[#dedad2]"
        style={{ padding: "clamp(48px, 8vw, 100px) clamp(24px, 6vw, 80px)" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-bold tracking-widest text-[#1a1a1a] uppercase italic"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            marginBottom: "clamp(32px, 5vw, 64px)",
          }}
        >
          Membership Packages
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(14px, 2vw, 28px)",
            maxWidth: "1400px",
            margin: "0 auto",
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
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between"
                style={{
                  backgroundColor: "#1e1e1e",
                  padding: "clamp(28px, 4vw, 52px) clamp(20px, 3vw, 40px)",
                  minHeight: "clamp(340px, 40vw, 480px)",
                }}
              >
                {/* Decorative circles */}
                <div className="absolute rounded-full" style={{ width: "clamp(80px, 10vw, 140px)", height: "clamp(80px, 10vw, 140px)", backgroundColor: "#2e2e2e", bottom: -30, right: -30 }} />
                <div className="absolute rounded-full" style={{ width: "clamp(50px, 6vw, 80px)", height: "clamp(50px, 6vw, 80px)", backgroundColor: "#282828", bottom: 50, right: 60 }} />

                <div className="relative z-10">
                  <h3
                    className="font-extrabold tracking-widest text-white"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "clamp(18px, 2.2vw, 28px)",
                      marginBottom: "clamp(10px, 1.5vw, 20px)",
                    }}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className="text-[#aaaaaa] leading-relaxed uppercase"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(12px, 1.2vw, 15px)",
                      letterSpacing: "0.06em",
                      marginBottom: "clamp(12px, 2vw, 24px)",
                    }}
                  >
                    {pkg.desc}
                  </p>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 1vw, 12px)" }}>
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-[#cccccc]"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "clamp(12px, 1.2vw, 15px)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        <span style={{ width: "clamp(5px, 0.6vw, 8px)", height: "clamp(5px, 0.6vw, 8px)", borderRadius: "50%", backgroundColor: "#c9a227", flexShrink: 0, display: "inline-block" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="relative z-10 flex items-center justify-between" style={{ marginTop: "clamp(20px, 3vw, 40px)" }}>
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "clamp(36px, 4vw, 52px)",
                      height: "clamp(36px, 4vw, 52px)",
                      backgroundColor: "#2e2e2e",
                      border: "1px solid #444",
                    }}
                  >
                    <Icon style={{ width: "clamp(16px, 1.8vw, 24px)", height: "clamp(16px, 1.8vw, 24px)" }} color="#c9a227" strokeWidth={1.8} />
                  </div>
                  <span
                    className="font-bold text-white tracking-wider text-right"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(11px, 1.1vw, 15px)",
                    }}
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