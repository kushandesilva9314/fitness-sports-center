"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "680px", backgroundColor: "#e8e4dc" }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");

        @media (max-width: 768px) {
          .about-wrapper {
            flex-direction: column !important;
            min-height: unset !important;
          }
          .about-image {
            width: 100% !important;
            min-height: 280px !important;
            height: 280px !important;
          }
          .about-right {
            width: 100% !important;
            margin-left: 0 !important;
          }
          .about-heading-box {
            padding: 36px 24px !important;
          }
          .about-body-box {
            padding: 32px 24px !important;
          }
          .about-divider {
            display: none !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1100px) {
          .about-heading-box {
            padding: 40px 32px 40px 80px !important;
          }
          .about-body-box {
            padding: 40px 32px 40px 80px !important;
          }
        }
      `}</style>

      <div
        className="about-wrapper relative flex w-full"
        style={{ minHeight: "680px" }}
      >
        {/* LEFT — Gym image with rounded left edges and fade into bg */}
        <div
          className="about-image relative overflow-hidden"
          style={{
            width: "50%",
            minHeight: "680px",
            borderRadius: "0 0 0 0",
          }}
        >
          <Image
            src="/assets/bg.jpg"
            alt="Gym interior"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Right fade into background color */}
          <div
            className="absolute inset-y-0 right-0"
            style={{
              width: "320px",
              background:
                "linear-gradient(to right, transparent 0%, rgba(232,228,220,0.15) 40%, rgba(232,228,220,0.7) 75%, rgba(232,228,220,1) 100%)",
              zIndex: 2,
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: "120px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(232,228,220,0.6) 70%, rgba(232,228,220,1) 100%)",
              zIndex: 2,
            }}
          />
          {/* Top fade */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: "80px",
              background:
                "linear-gradient(to top, transparent 0%, rgba(232,228,220,0.5) 80%, rgba(232,228,220,1) 100%)",
              zIndex: 2,
            }}
          />
        </div>

        {/* CENTER — Torn paper divider */}
        <div
          className="about-divider absolute inset-y-0 z-20 pointer-events-none"
          style={{ left: "33%", width: "340px" }}
        >
          <svg
            viewBox="0 0 340 680"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="torn-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#e8e4dc" stopOpacity="0" />
                <stop offset="22%"  stopColor="#c8c4bc" stopOpacity="0.5" />
                <stop offset="45%"  stopColor="#b8b4ac" stopOpacity="1" />
                <stop offset="68%"  stopColor="#a8a49c" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2a2a2a" stopOpacity="0" />
              </linearGradient>
              <filter id="paper-shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                <feOffset dx="-4" dy="1" result="offset" />
                <feComposite in="SourceGraphic" in2="offset" operator="over" />
              </filter>
            </defs>
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
                L 72 680
                L 262 680
                L 286 560
                L 256 475
                L 284 370
                L 252 268
                L 280 160
                L 254 52
                L 268 0
                Z
              "
            />
            <path
              fill="#e8e4dc"
              opacity="0.35"
              d="
                M 102 0
                L 80 68
                L 110 145
                L 84 230
                L 112 340
                L 82 448
                L 108 530
                L 94 680
                L 242 680
                L 266 560
                L 236 475
                L 264 370
                L 232 268
                L 260 160
                L 234 52
                L 248 0
                Z
              "
            />
          </svg>
        </div>

        {/* RIGHT — Two-tone content panel blending into bg */}
        <div
          className="about-right relative z-10 flex flex-col"
          style={{ width: "56%", marginLeft: "auto" }}
        >
          {/* Top — heading, blends from dark to bg */}
          <div
            className="about-heading-box"
            style={{
              backgroundColor: "#2a2a2a",
              padding: "64px 60px 64px 165px",
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
                fontSize: "clamp(18px, 2.4vw, 34px)",
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

          {/* Bottom — fades from gray into page bg color */}
          <div
            className="about-body-box relative"
            style={{
              background:
                "linear-gradient(to bottom, #b8b4ac 0%, #c8c4bc 50%, #e8e4dc 100%)",
              padding: "56px 60px 72px 165px",
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