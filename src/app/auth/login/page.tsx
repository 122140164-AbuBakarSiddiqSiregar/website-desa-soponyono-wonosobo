"use client";

import { useState } from "react";

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false); // State untuk unhide password

  // Ambil email dan password dari environment variables
  const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Log untuk memastikan variabel environment terbaca
    console.log("ADMIN_EMAIL:", ADMIN_EMAIL);
    console.log("ADMIN_PASSWORD:", ADMIN_PASSWORD);
  
    // Validasi input
    if (!email || !password) {
      setError("Email dan password harus diisi!");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Format email tidak valid!");
      return;
    }
  
    // Cek login dengan environment variables
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setError(""); // Reset error jika validasi berhasil
      alert("Login berhasil!");
      window.location.href = "/dashboard"; // Redirect ke dashboard
    } else {
      setError("Email atau password salah!");
    }
  };
  

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#000" }}>
          Login Admin
        </h2>
        <form onSubmit={handleLogin}>
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}
          <div className="mb-3">
            <label
              htmlFor="email"
              style={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginTop: "5px",
                color: "#000",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              style={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  marginTop: "5px",
                  color: "#000",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "#28a745",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
