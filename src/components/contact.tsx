"use client";

import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full"
      style={{ backgroundColor: "#e8e4dc", padding: "40px 0" }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;500;600&display=swap");
        .contact-input::placeholder {
          color: #555555;
          font-family: 'Barlow Condensed', sans-serif;
          letter-spacing: 0.04em;
          font-size: 14px;
        }
        .contact-input:focus {
          border-bottom-color: #c9a227 !important;
          outline: none;
        }
        @media (max-width: 768px) {
          .contact-content {
            justify-content: center !important;
            padding: 24px 16px !important;
          }
          .contact-card {
            max-width: 100% !important;
          }
          .contact-wrapper {
            margin: 0 16px !important;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="contact-wrapper"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
          margin: "0 80px",
          minHeight: "560px",
          boxShadow: "0 12px 48px rgba(0,0,0,0.25)",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/assets/contact-bg.jpg"
            alt="Contact background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% center",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to left, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.02) 72%, rgba(0,0,0,0) 82%)",
            }}
          />
        </div>

        {/* Decorative rings */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", border: "2px solid rgba(201,162,39,0.18)", zIndex: 1 }} />
        <div style={{ position: "absolute", top: -20, right: -20, width: 130, height: 130, borderRadius: "50%", border: "1.5px solid rgba(201,162,39,0.12)", zIndex: 1 }} />

        {/* Content */}
        <div
          className="contact-content"
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            minHeight: "560px",
            padding: "40px 160px 40px 40px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="contact-card"
            style={{
              borderRadius: "18px",
              width: "100%",
              maxWidth: "460px",
              overflow: "hidden",
              boxShadow: "0 8px 48px rgba(0,0,0,0.65)",
            }}
          >
            {/* Gold accent bar */}
            <div style={{ height: "4px", background: "linear-gradient(to right, #c9a227, #f0d060, #c9a227)" }} />

            {/* Info strip */}
            <div
              style={{
                backgroundColor: "#1a1a1a",
                padding: "14px 28px",
                display: "flex",
                gap: "24px",
                alignItems: "center",
                borderBottom: "1px solid #2a2a2a",
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: <Phone size={12} color="#c9a227" />, text: "+94 77 123 4567" },
                { icon: <MapPin size={12} color="#c9a227" />, text: "Ratnapura, Sri Lanka" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {item.icon}
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", color: "#888", letterSpacing: "0.06em" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Form body */}
            <div
              style={{
                backgroundColor: "rgba(22, 22, 22, 0.97)",
                backdropFilter: "blur(12px)",
                padding: "32px 36px 36px",
              }}
            >
              {/* Heading */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <h2
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "28px",
                    letterSpacing: "0.06em",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  Contact Us
                </h2>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#c9a227", margin: "8px auto 10px" }} />
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", color: "#888", letterSpacing: "0.04em" }}>
                  Any question or remarks? Just write us a message!
                </p>
              </div>

              {/* Success message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <CheckCircle size={16} color="#22c55e" />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", color: "#22c55e", letterSpacing: "0.04em" }}>
                    Message sent successfully!
                  </span>
                </motion.div>
              )}

              {/* Error message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <XCircle size={16} color="#ef4444" />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", color: "#ef4444", letterSpacing: "0.04em" }}>
                    {errorMsg}
                  </span>
                </motion.div>
              )}

              {/* Name */}
              <div style={{ marginBottom: "18px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", color: "#c9a227", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                  <User size={12} color="#c9a227" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="contact-input"
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #333", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", paddingBottom: "8px", display: "block" }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "18px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", color: "#c9a227", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                  <Mail size={12} color="#c9a227" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address here"
                  className="contact-input"
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #333", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", paddingBottom: "8px", display: "block" }}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", color: "#c9a227", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                  <MessageSquare size={12} color="#c9a227" /> Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message here..."
                  rows={3}
                  className="contact-input"
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #333", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", paddingBottom: "8px", resize: "none", display: "block" }}
                />
              </div>

              {/* Send */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <motion.button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.05, backgroundColor: "#b8911f" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#c9a227",
                    color: "#fff",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "999px",
                    padding: "12px 44px",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    opacity: status === "loading" ? 0.7 : 1,
                    boxShadow: "0 4px 20px rgba(201,162,39,0.45)",
                    transition: "background-color 0.2s",
                  }}
                >
                  <Send size={14} />
                  {status === "loading" ? "Sending..." : "Send"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}