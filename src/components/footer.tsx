"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600&display=swap");

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-brand {
            align-items: center !important;
          }
          .footer-contact-row {
            justify-content: center;
          }
          .footer-links {
            align-items: center !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "48px 40px 28px",
        }}
      >
        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Col 1: Logo + Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-brand"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #c9a227",
                flexShrink: 0,
              }}
            >
              <Image
                src="/assets/lg.jpg"
                alt="Fitness Sports Center Logo"
                width={80}
                height={80}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "15px",
                color: "#cccccc",
                letterSpacing: "0.05em",
                lineHeight: 1.3,
                textTransform: "uppercase",
              }}
            >
              Fitness Sports Center
            </p>
          </motion.div>

          {/* Col 2: Reach Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Reach Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                { icon: <Mail size={15} color="#c9a227" />, text: "info@fitnesssportscenter.com" },
                { icon: <Phone size={15} color="#c9a227" />, text: "+94 77 123 4567" },
                { icon: <MapPin size={15} color="#c9a227" />, text: "No. 78, Colombo Road,\nRatnapura 70000, Sri Lanka", multiline: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className="footer-contact-row"
                  style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "14px",
                      color: "#aaaaaa",
                      lineHeight: 1.6,
                      whiteSpace: item.multiline ? "pre-line" : "normal",
                      paddingTop: "6px",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Quick Links
            </h4>
            <div
              className="footer-links"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {["Home", "About Us", "Services"].map((link, i) => (
                <motion.a
                  key={i}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  whileHover={{ x: 4, color: "#c9a227" }}
                  transition={{ duration: 0.15 }}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "14px",
                    color: "#aaaaaa",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    display: "inline-block",
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {[
            { icon: <Facebook size={16} />, label: "Facebook" },
            { icon: <Instagram size={16} />, label: "Instagram" },
            { icon: <GoogleIcon />, label: "Google" },
          ].map(({ icon, label }, i) => (
            <motion.a
              key={i}
              href="#"
              aria-label={label}
              whileHover={{ scale: 1.12, backgroundColor: "#c9a227", color: "#ffffff" }}
              transition={{ duration: 0.18 }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                border: "1px solid #2a2a2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "#1e1e1e",
            margin: "24px 0 16px",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "0.08em",
            textAlign: "center",
            paddingBottom: "8px",
          }}
        >
          © 2025 . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}