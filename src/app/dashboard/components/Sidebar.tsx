"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: isOpen ? "250px" : "70px",
          backgroundColor: "#343a40",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s",
          padding: isOpen ? "20px" : "10px",
          overflow: "hidden",
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px",
            textAlign: isOpen ? "right" : "center",
          }}
        >
          {isOpen ? "←" : "→"}
        </button>
        <h2 style={{ marginBottom: "20px", display: isOpen ? "block" : "none" }}>
          Admin Dashboard
        </h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link href="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
            {isOpen ? "Dashboard" : "D"}
          </Link>
          <Link href="/dashboard/berita" style={{ color: "#fff", textDecoration: "none" }}>
            {isOpen ? "Berita & Artikel" : "B"}
          </Link>
          <Link href="/guest" style={{ color: "#fff", textDecoration: "none" }}>
            {isOpen ? "Logout" : "L"}
          </Link>
        </nav>
      </aside>
    </div>
  );
}
