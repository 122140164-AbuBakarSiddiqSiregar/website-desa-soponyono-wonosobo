"use client";

import { useState, useEffect } from "react";

interface Berita {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function BeritaPage(): JSX.Element {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);

  useEffect(() => {
    // Data berita sementara (nanti bisa diambil dari server/database)
    const beritaMock: Berita[] = [
      {
        id: 1,
        title: "Pembangunan Jalan Baru di Desa Sompoyono",
        content: "Desa Sompoyono telah memulai pembangunan jalan baru yang menghubungkan beberapa dusun...",
        date: "2024-12-30",
      },
      {
        id: 2,
        title: "Kegiatan Gotong Royong Bersama",
        content: "Warga Desa Sompoyono melakukan gotong royong membersihkan area sekitar balai desa...",
        date: "2024-12-29",
      },
      {
        id: 3,
        title: "Pelatihan Digital untuk Pemuda Desa",
        content: "Pemuda Desa Sompoyono mengikuti pelatihan teknologi digital untuk meningkatkan keterampilan...",
        date: "2024-12-28",
      },
    ];
    setBeritaList(beritaMock);
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <header
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          textAlign: "center",
          padding: "20px 0",
          marginBottom: "20px",
        }}
      >
        <h1>Berita Terkini</h1>
        <p>Informasi terbaru seputar kegiatan di Desa Sompoyono</p>
      </header>

      <section>
        {beritaList.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {beritaList.map((berita) => (
              <article
                key={berita.id}
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2 style={{ color: "#007bff" }}>{berita.title}</h2>
                <p style={{ fontSize: "0.9rem", color: "#888" }}>{berita.date}</p>
                <p>{berita.content}</p>
              </article>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>Belum ada berita terbaru.</p>
        )}
      </section>
    </main>
  );
}
