"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin_auth") !== "true") {
      router.push("/admin/login");
      return;
    }
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      setMessages(data.messages || []);
    } catch {
      console.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    setDeletingId(id);
    try {
      await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch {
      console.error("Failed to delete");
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#111",
          borderBottom: "1px solid #1e1e1e",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", backgroundColor: "#c9a227", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
            🏋️
          </div>
          <div>
            <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px", margin: 0 }}>Admin Panel</p>
            <p style={{ color: "#555", fontSize: "12px", margin: 0 }}>Fitness Sports Center</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLogout}
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            color: "#aaa",
            padding: "8px 20px",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Logout
        </motion.button>
      </div>

      {/* Content */}
      <div style={{ padding: "32px" }}>
        {/* Stats */}
        <div style={{ marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 4px" }}>
              Contact Messages
            </h2>
            <p style={{ color: "#555", fontSize: "13px", margin: 0 }}>
              {messages.length} total message{messages.length !== 1 ? "s" : ""}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            onClick={fetchMessages}
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: "8px",
              color: "#c9a227",
              padding: "8px 20px",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            ↻ Refresh
          </motion.button>
        </div>

        {/* Table */}
        {loading ? (
          <div style={{ textAlign: "center", color: "#555", padding: "60px 0", fontSize: "14px" }}>
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: "center", color: "#555", padding: "60px 0", fontSize: "14px" }}>
            No messages yet.
          </div>
        ) : (
          <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #1e1e1e" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#111" }}>
                  {["#", "Name", "Email", "Message", "Date", "Action"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#c9a227",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid #1e1e1e",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, i) => (
                  <motion.tr
                    key={msg._id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      backgroundColor: i % 2 === 0 ? "#0e0e0e" : "#111",
                      borderBottom: "1px solid #1a1a1a",
                    }}
                  >
                    <td style={{ padding: "14px 18px", color: "#444", fontSize: "13px" }}>{i + 1}</td>
                    <td style={{ padding: "14px 18px", color: "#ffffff", fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap" }}>
                      {msg.name}
                    </td>
                    <td style={{ padding: "14px 18px", color: "#aaa", fontSize: "13px", whiteSpace: "nowrap" }}>
                      {msg.email}
                    </td>
                    <td style={{ padding: "14px 18px", color: "#888", fontSize: "13px", maxWidth: "320px" }}>
                      <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {msg.message}
                      </div>
                    </td>
                    <td style={{ padding: "14px 18px", color: "#555", fontSize: "12px", whiteSpace: "nowrap" }}>
                      {new Date(msg.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit", month: "short", year: "numeric",
                      })}
                    </td>
                    <td style={{ padding: "14px 18px" }}>
                      <motion.button
                        whileHover={{ scale: 1.06, backgroundColor: "#7f1d1d" }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleDelete(msg._id)}
                        disabled={deletingId === msg._id}
                        style={{
                          backgroundColor: "#1e1010",
                          border: "1px solid #3a1a1a",
                          borderRadius: "6px",
                          color: "#ef4444",
                          padding: "6px 16px",
                          fontSize: "12px",
                          cursor: "pointer",
                          opacity: deletingId === msg._id ? 0.5 : 1,
                        }}
                      >
                        {deletingId === msg._id ? "..." : "Delete"}
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}