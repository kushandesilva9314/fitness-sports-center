"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#e8e4dc]"
      style={{ minHeight: "560px" }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
      `}</style>

      <div className="relative flex w-full h-full" style={{ minHeight: "560px" }}>

        {/* LEFT — Gym image, half width */}
        <div className="relative w-[52%] overflow-hidden" style={{ minHeight: "560px" }}>
          <Image
            src="/assets/bg.jpg"
            alt="Gym interior"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* TORN PAPER EFFECT — absolutely positioned in the middle */}
        <div
          className="absolute top-0 bottom-0 z-10"
          style={{
            left: "44%",
            width: "160px",
          }}
        >
          <svg
            viewBox="0 0 160 600"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="
                M80,0
                L85,18 L72,32 L90,44 L68,60 L88,74
                L65,90 L84,104 L70,120 L92,134
                L66,150 L86,164 L72,180 L94,196
                L64,212 L88,228 L70,244 L90,258
                L68,274 L86,290 L74,306 L92,320
                L66,336 L84,352 L70,368 L90,382
                L68,398 L88,414 L72,428 L92,444
                L66,460 L86,476 L74,492 L90,506
                L68,522 L84,538 L72,554 L80,600
                L160,600 L160,0 Z
              "
              fill="#e8e4dc"
            />
            {/* White torn highlight strip */}
            <path
              d="
                M80,0
                L85,18 L72,32 L90,44 L68,60 L88,74
                L65,90 L84,104 L70,120 L92,134
                L66,150 L86,164 L72,180 L94,196
                L64,212 L88,228 L70,244 L90,258
                L68,274 L86,290 L74,306 L92,320
                L66,336 L84,352 L70,368 L90,382
                L68,398 L88,414 L72,428 L92,444
                L66,460 L86,476 L74,492 L90,506
                L68,522 L84,538 L72,554 L80,600
                L95,600
                L98,554 L82,538 L100,522
                L82,506 L102,492 L88,476 L106,460
                L80,444 L100,428 L86,414 L104,398
                L82,382 L102,368 L88,352 L104,336
                L82,320 L100,306 L88,290 L100,274
                L82,258 L102,244 L90,228 L106,212
                L82,196 L100,180 L88,164 L104,150
                L80,134 L100,120 L86,104 L102,90
                L80,74 L98,60 L82,44 L100,32 L90,18 L95,0 Z
              "
              fill="white"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* RIGHT — Dark brown content panel */}
        <div
          className="relative flex flex-col justify-center z-20 bg-[#3b2f1e]"
          style={{ width: "56%", marginLeft: "auto", padding: "60px 56px 60px 80px" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white font-extrabold uppercase leading-tight mb-8"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(22px, 2.8vw, 36px)",
              letterSpacing: "0.05em",
            }}
          >
            Transform Your Body And
            <br />
            Build Strength In A Space
            <br />
            Designed For Real Results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#d4cfc7] leading-relaxed mb-10"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(13px, 1.4vw, 16px)",
              letterSpacing: "0.04em",
              maxWidth: "460px",
              textAlign: "justify",
            }}
          >
            We are dedicated to helping you achieve your fitness goals through
            expert guidance, modern equipment, and a supportive environment.
            Whether you're a beginner or an athlete, our gym is built to inspire
            strength, confidence, and consistency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#b8911f" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-full bg-[#c9a227] text-white font-bold uppercase tracking-widest shadow-lg transition-colors duration-200"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                }}
              >
                Reach Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}