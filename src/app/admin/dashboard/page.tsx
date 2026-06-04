"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const [viewMsg, setViewMsg] = useState<Message | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("admin_auth") !== "true") {
        router.replace("/admin/login");
        return;
      }
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
      if (viewMsg?._id === id) setViewMsg(null);
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
      <div style={{ backgroundColor: "#111", borderBottom: "1px solid #1e1e1e", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
          style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "8px", color: "#aaa", padding: "8px 20px", fontSize: "13px", cursor: "pointer" }}
        >
          Logout
        </motion.button>
      </div>

      {/* Content */}
      <div style={{ padding: "32px" }}>
        <div style={{ marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 4px" }}>Contact Messages</h2>
            <p style={{ color: "#555", fontSize: "13px", margin: 0 }}>{messages.length} total message{messages.length !== 1 ? "s" : ""}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            onClick={fetchMessages}
            style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "8px", color: "#c9a227", padding: "8px 20px", fontSize: "13px", cursor: "pointer" }}
          >
            ↻ Refresh
          </motion.button>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "#555", padding: "60px 0", fontSize: "14px" }}>Loading messages...</div>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: "center", color: "#555", padding: "60px 0", fontSize: "14px" }}>No messages yet.</div>
        ) : (
          <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #1e1e1e" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#111" }}>
                  {["#", "Name", "Email", "Message", "Date", "Actions"].map((h) => (
                    <th key={h} style={{ padding: "14px 18px", textAlign: "left", color: "#c9a227", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid #1e1e1e", whiteSpace: "nowrap" }}>
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
                    style={{ backgroundColor: i % 2 === 0 ? "#0e0e0e" : "#111", borderBottom: "1px solid #1a1a1a" }}
                  >
                    <td style={{ padding: "14px 18px", color: "#444", fontSize: "13px" }}>{i + 1}</td>
                    <td style={{ padding: "14px 18px", color: "#ffffff", fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap" }}>{msg.name}</td>
                    <td style={{ padding: "14px 18px", color: "#aaa", fontSize: "13px", whiteSpace: "nowrap" }}>{msg.email}</td>
                    <td style={{ padding: "14px 18px", color: "#888", fontSize: "13px", maxWidth: "260px" }}>
                      <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{msg.message}</div>
                    </td>
                    <td style={{ padding: "14px 18px", color: "#555", fontSize: "12px", whiteSpace: "nowrap" }}>
                      {new Date(msg.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                    </td>
                    <td style={{ padding: "14px 18px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        {/* View button */}
                        <motion.button
                          whileHover={{ scale: 1.06, backgroundColor: "#1a2e1a" }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setViewMsg(msg)}
                          style={{ backgroundColor: "#0e1e0e", border: "1px solid #1a3a1a", borderRadius: "6px", color: "#22c55e", padding: "6px 14px", fontSize: "12px", cursor: "pointer" }}
                        >
                          View
                        </motion.button>
                        {/* Delete button */}
                        <motion.button
                          whileHover={{ scale: 1.06, backgroundColor: "#7f1d1d" }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => handleDelete(msg._id)}
                          disabled={deletingId === msg._id}
                          style={{ backgroundColor: "#1e1010", border: "1px solid #3a1a1a", borderRadius: "6px", color: "#ef4444", padding: "6px 14px", fontSize: "12px", cursor: "pointer", opacity: deletingId === msg._id ? 0.5 : 1 }}
                        >
                          {deletingId === msg._id ? "..." : "Delete"}
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Message Modal */}
      <AnimatePresence>
        {viewMsg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewMsg(null)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.75)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: "#111", border: "1px solid #222", borderRadius: "16px", padding: "36px", width: "100%", maxWidth: "520px", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}
            >
              {/* Gold bar */}
              <div style={{ height: "3px", background: "linear-gradient(to right, #c9a227, #f0d060, #c9a227)", borderRadius: "2px", marginBottom: "24px" }} />

              <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, marginBottom: "20px", letterSpacing: "0.04em" }}>
                Message Details
              </h3>

              {/* Name */}
              <div style={{ marginBottom: "16px" }}>
                <p style={{ color: "#c9a227", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Name</p>
                <p style={{ color: "#ffffff", fontSize: "15px", backgroundColor: "#1a1a1a", padding: "10px 14px", borderRadius: "8px", margin: 0 }}>{viewMsg.name}</p>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "16px" }}>
                <p style={{ color: "#c9a227", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Email</p>
                <p style={{ color: "#aaa", fontSize: "14px", backgroundColor: "#1a1a1a", padding: "10px 14px", borderRadius: "8px", margin: 0 }}>{viewMsg.email}</p>
              </div>

              {/* Date */}
              <div style={{ marginBottom: "16px" }}>
                <p style={{ color: "#c9a227", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Date</p>
                <p style={{ color: "#555", fontSize: "13px", backgroundColor: "#1a1a1a", padding: "10px 14px", borderRadius: "8px", margin: 0 }}>
                  {new Date(viewMsg.createdAt).toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "28px" }}>
                <p style={{ color: "#c9a227", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Message</p>
                <p style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.7, backgroundColor: "#1a1a1a", padding: "14px", borderRadius: "8px", margin: 0, whiteSpace: "pre-wrap" }}>{viewMsg.message}</p>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  onClick={() => setViewMsg(null)}
                  style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "8px", color: "#aaa", padding: "10px 24px", fontSize: "13px", cursor: "pointer" }}
                >
                  Close
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: "#7f1d1d" }}
                  onClick={() => handleDelete(viewMsg._id)}
                  disabled={deletingId === viewMsg._id}
                  style={{ backgroundColor: "#1e1010", border: "1px solid #3a1a1a", borderRadius: "8px", color: "#ef4444", padding: "10px 24px", fontSize: "13px", cursor: "pointer" }}
                >
                  {deletingId === viewMsg._id ? "Deleting..." : "Delete"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}