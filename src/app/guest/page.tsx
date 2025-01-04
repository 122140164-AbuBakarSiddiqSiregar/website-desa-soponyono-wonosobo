"use client";

import Link from "next/link";

export default function GuestPage(): JSX.Element {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#28a745",
          padding: "10px 20px",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Desa Digital Sompoyono</h1>
        </div>
        <div>
          <Link href="#about" style={{ color: "#fff", marginRight: "15px" }}>
            Tentang
          </Link>
          <Link href="#news" style={{ color: "#fff", marginRight: "15px" }}>
            Berita
          </Link>
          <Link href="#contact" style={{ color: "#fff", marginRight: "15px" }}>
            Kontak
          </Link>
          <Link href="/auth/login" style={{ color: "#fff" }}>
            Login
          </Link>
        </div>
      </nav>

      <main style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
        <header
          style={{
            textAlign: "center",
            padding: "40px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          <h1>Selamat Datang di Desa Digital Sompoyono</h1>
          <p>Menyajikan informasi terkini untuk masyarakat desa</p>
        </header>

        <section id="about" style={{ padding: "20px 0", textAlign: "center" }}>
          <h2 style={{ color: "#000" }}>Tentang Desa</h2>
          <p style={{ maxWidth: "800px", margin: "10px auto", color: "#000" }}>
            Desa Digital Sompoyono adalah inisiatif modern untuk memberikan akses informasi yang
            cepat dan akurat kepada masyarakat desa. Dengan platform ini, kami berharap dapat
            meningkatkan keterhubungan antarwarga dan memajukan desa.
          </p>
        </section>

        <section id="news" style={{ padding: "20px 0", textAlign: "center" }}>
          <h2 style={{ color: "#000" }}>Berita Terkini</h2>
          <p style={{ maxWidth: "800px", margin: "10px auto", color: "#000" }}>
            Temukan berita terbaru seputar kegiatan dan informasi penting desa kami.
          </p>
          <Link href="/guest/berita" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Lihat Berita
            </button>
          </Link>
        </section>

        <section id="contact" style={{ padding: "20px 0", textAlign: "center" }}>
          <h2 style={{ color: "#000" }}>Kontak</h2>
          <section style={{ color: "#000" }}>
            <p>Hubungi kami untuk informasi lebih lanjut.</p>
            <p>Email: sompoyono@example.com</p>
            <p>Telepon: 0812-3456-7890</p>
          </section>
        </section>

        <footer
          style={{
            backgroundColor: "#343a40",
            color: "#fff",
            textAlign: "center",
            padding: "10px 0",
            marginTop: "20px",
          }}
        >
          <p>&copy; 2024 Desa Digital Sompoyono. Semua hak dilindungi.</p>
        </footer>
      </main>
    </>
  );
}
