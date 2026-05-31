"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "620px" }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
      `}</style>

      <div className="relative flex w-full" style={{ minHeight: "620px" }}>

        {/* LEFT — Gym image */}
        <div className="relative overflow-hidden" style={{ width: "50%", minHeight: "620px" }}>
          <Image
            src="/assets/bg.jpg"
            alt="Gym interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-y-0 right-0"
            style={{
              width: "280px",
              background: "linear-gradient(to right, transparent 0%, rgba(15,15,15,0.2) 50%, rgba(15,15,15,0.72) 100%)",
              zIndex: 2,
            }}
          />
        </div>

        {/* CENTER — Torn paper divider */}
        <div
          className="absolute inset-y-0 z-20 pointer-events-none"
          style={{ left: "34%", width: "320px" }}
        >
          <svg
            viewBox="0 0 320 620"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="torn-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#111" stopOpacity="0" />
                <stop offset="18%"  stopColor="#888" stopOpacity="0.35" />
                <stop offset="42%"  stopColor="#d0d0d0" stopOpacity="1" />
                <stop offset="70%"  stopColor="#acacac" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#2a2a2a" stopOpacity="0" />
              </linearGradient>
              <filter id="paper-shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
                <feOffset dx="-4" dy="1" result="offset"/>
                <feComposite in="SourceGraphic" in2="offset" operator="over"/>
              </filter>
            </defs>

            {/*
              Left edge: 7 tears, randomly placed — not evenly spaced
              y positions: 0, 68, 145, 230, 340, 448, 530, 620
              Right edge: also 7 tears, different y positions
              y positions: 0, 52, 160, 268, 370, 475, 560, 620
              Width of each tear: varies between 24–38px, gentle angles
            */}
            <path
              fill="url(#torn-fill)"
              filter="url(#paper-shadow)"
              d="
                M 80 0
                L 58 68
                L 88 145
                L 62 230
                L 90 340
                L 60 448
                L 86 530
                L 72 620

                L 246 620
                L 270 560
                L 240 475
                L 268 370
                L 236 268
                L 264 160
                L 238 52
                L 252 0

                Z
              "
            />

            {/* Inner lighter strip */}
            <path
              fill="#e2e2e2"
              opacity="0.45"
              d="
                M 102 0
                L 80 68
                L 110 145
                L 84 230
                L 112 340
                L 82 448
                L 108 530
                L 94 620

                L 226 620
                L 250 560
                L 220 475
                L 248 370
                L 216 268
                L 244 160
                L 218 52
                L 232 0

                Z
              "
            />
          </svg>
        </div>

        {/* RIGHT — Two-tone content panel */}
        <div
          className="relative z-10 flex flex-col"
          style={{ width: "56%", marginLeft: "auto" }}
        >
          {/* Top dark charcoal — heading */}
          <div
            style={{
              backgroundColor: "#2a2a2a",
              padding: "56px 60px 56px 155px",
              flex: "0 0 auto",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-extrabold uppercase leading-tight"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(20px, 2.4vw, 32px)",
                letterSpacing: "0.07em",
                color: "#e8e8e8",
              }}
            >
              Transform Your Body And
              <br />
              Build Strength In A Space
              <br />
              <span style={{ color: "#c9a227" }}>Designed For Real Results</span>
            </motion.h2>
          </div>

          {/* Bottom warm gray — description + button */}
          <div
            style={{
              backgroundColor: "#b8b4ac",
              padding: "52px 60px 52px 155px",
              flex: "1 1 auto",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="leading-relaxed mb-10"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(13px, 1.4vw, 17px)",
                letterSpacing: "0.03em",
                textAlign: "justify",
                maxWidth: "460px",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              We are dedicated to helping you achieve your fitness goals through
              expert guidance, modern equipment, and a supportive environment.
              Whether you're a beginner or an athlete, our gym is built to
              inspire strength, confidence, and consistency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#b8911f" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-9 py-3 rounded-full bg-[#c9a227] text-white font-bold uppercase tracking-widest shadow-md transition-colors duration-200"
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: "14px" }}
                >
                  Reach Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}