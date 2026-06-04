"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: "#111111",
          border: "1px solid #222",
          borderRadius: "16px",
          padding: "48px 40px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
        }}
      >
        {/* Logo area */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#c9a227",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              fontSize: "22px",
            }}
          >
            🏋️
          </div>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              marginBottom: "4px",
            }}
          >
            Admin Panel
          </h1>
          <p style={{ color: "#555", fontSize: "13px" }}>Fitness Sports Center</p>
        </div>

        {/* Username */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", color: "#888", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
            style={{
              width: "100%",
              backgroundColor: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: "8px",
              padding: "12px 14px",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", color: "#888", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%",
              backgroundColor: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: "8px",
              padding: "12px 14px",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "16px", textAlign: "center" }}>
            {error}
          </p>
        )}

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03, backgroundColor: "#b8911f" }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLogin}
          style={{
            width: "100%",
            backgroundColor: "#c9a227",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "13px",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
        >
          Login
        </motion.button>
      </motion.div>
    </div>
  );
}