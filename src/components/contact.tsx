"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Mail, MessageSquare, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full"
      style={{ backgroundColor: "#e8e4dc", padding: "60px 20px" }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden mx-auto"
        style={{
          borderRadius: "32px",
          maxWidth: "1700px",
          minHeight: "580px",
          boxShadow: "0 12px 60px rgba(0,0,0,0.25)",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/contact-bg.jpg"
            alt="Contact background"
            fill
            className="object-cover object-left"
            priority
          />
          {/* Transparent on left (phone stays visible), darkens only on right where form sits */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 35%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.75) 100%)",
            }}
          />
        </div>

        {/* Content row — form on right */}
        <div className="relative z-10 flex items-center justify-end h-full min-h-[580px] pr-48 py-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col"
            style={{
              backgroundColor: "rgba(28, 28, 28, 0.93)",
              backdropFilter: "blur(8px)",
              borderRadius: "20px",
              padding: "52px 52px",
              width: "100%",
              maxWidth: "560px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
          >
            <h2
              className="text-white text-center font-bold mb-1"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "32px",
                letterSpacing: "0.06em",
              }}
            >
              Contact Us
            </h2>
            <p
              className="text-center mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "14px",
                color: "#999999",
                letterSpacing: "0.04em",
              }}
            >
              Any question or remarks? Just write us a message!
            </p>

            {/* Name */}
            <div className="mb-6">
              <label
                className="flex items-center gap-2 mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  color: "#bbbbbb",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <User size={12} color="#c9a227" />
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-transparent outline-none pb-2"
                style={{
                  borderBottom: "1px solid #444",
                  color: "#ffffff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "15px",
                }}
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                className="flex items-center gap-2 mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  color: "#bbbbbb",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <Mail size={12} color="#c9a227" />
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address here"
                className="w-full bg-transparent outline-none pb-2"
                style={{
                  borderBottom: "1px solid #444",
                  color: "#ffffff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "15px",
                }}
              />
            </div>

            {/* Message */}
            <div className="mb-9">
              <label
                className="flex items-center gap-2 mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  color: "#bbbbbb",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <MessageSquare size={12} color="#c9a227" />
                Message
              </label>
              <textarea
                placeholder="Enter your message here..."
                rows={3}
                className="w-full bg-transparent outline-none pb-2 resize-none"
                style={{
                  borderBottom: "1px solid #444",
                  color: "#ffffff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "15px",
                }}
              />
            </div>

            {/* Send */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#b8911f" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-12 py-3 rounded-full font-bold uppercase tracking-widest transition-colors duration-200"
                style={{
                  backgroundColor: "#c9a227",
                  color: "#ffffff",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  boxShadow: "0 4px 20px rgba(201,162,39,0.35)",
                }}
              >
                <Send size={14} />
                Send
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}