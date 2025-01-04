"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

interface Berita {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function BeritaPage(): JSX.Element {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [editMode, setEditMode] = useState<number | null>(null);

  const handleAddOrEditBerita = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Judul dan konten berita harus diisi!");
      return;
    }

    if (editMode !== null) {
      // Edit mode
      setBeritaList(
        beritaList.map((berita) =>
          berita.id === editMode ? { ...berita, title, content } : berita
        )
      );
      alert("Berita berhasil diperbarui!");
    } else {
      // Add mode
      const newBerita: Berita = {
        id: beritaList.length + 1,
        title,
        content,
        date: new Date().toISOString().split("T")[0], // Format tanggal YYYY-MM-DD
      };
      setBeritaList([...beritaList, newBerita]);
      alert("Berita berhasil ditambahkan!");
    }

    setTitle("");
    setContent("");
    setEditMode(null);
  };

  const handleEdit = (id: number) => {
    const berita = beritaList.find((b) => b.id === id);
    if (berita) {
      setTitle(berita.title);
      setContent(berita.content);
      setEditMode(id);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      setBeritaList(beritaList.filter((berita) => berita.id !== id));
      alert("Berita berhasil dihapus!");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        <h1>Kelola Berita & Artikel</h1>

        {/* Form Tambah/Edit Berita */}
        <section style={{ marginBottom: "40px" }}>
          <h2>{editMode !== null ? "Edit Berita" : "Tambah Berita Baru"}</h2>
          <form
            onSubmit={handleAddOrEditBerita}
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="title"
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Judul Berita
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="content"
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Konten Berita
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  minHeight: "100px",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {editMode !== null ? "Simpan Perubahan" : "Tambahkan Berita"}
            </button>
          </form>
        </section>

        {/* Daftar Berita */}
        <section>
          <h2>Daftar Berita</h2>
          {beritaList.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {beritaList.map((berita) => (
                <li
                  key={berita.id}
                  style={{
                    padding: "20px",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                  }}
                >
                  <h3>{berita.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#888" }}>{berita.date}</p>
                  <p>{berita.content}</p>
                  <button
                    onClick={() => handleEdit(berita.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(berita.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Belum ada berita.</p>
          )}
        </section>
      </main>
    </div>
  );
}
