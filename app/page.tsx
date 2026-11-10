
"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateImage() {
    if (!prompt.trim()) {
      setError("Décris ton image avant de commencer.");
      return;
    }

    setLoading(true);
    setError("");
    setImage("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur de génération.");
      }

      setImage(data.imageUrl);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#090914",
      color: "white",
      fontFamily: "Arial",
      padding: "30px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "42px" }}>
        IMAGINA <span style={{ color: "#a78bfa" }}>AI</span>
      </h1>

      <p>
        Donnez vie à votre imagination grâce à l'intelligence artificielle.
      </p>

      <h2>Créez des images extraordinaires</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Décrivez l'image que vous souhaitez créer..."
        style={{
          width: "90%",
          maxWidth: "600px",
          height: "120px",
          padding: "15px",
          borderRadius: "12px",
          marginTop: "25px",
          fontSize: "16px"
        }}
      />

      <br />

      <button
        onClick={generateImage}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "16px 30px",
          borderRadius: "12px",
          background: "#8b5cf6",
          color: "white",
          border: "none",
          fontSize: "17px",
          cursor: "pointer",
          opacity: loading ? 0.6 : 1
        }}
      >
        {loading ? "Génération en cours..." : "Générer mon image"}
      </button>

      {error && <p style={{ color: "#ff7777" }}>{error}</p>}

      {image && (
        <div style={{ marginTop: "30px" }}>
          <img
            src={image}
            alt="Image générée par IMAGINA AI"
            style={{
              width: "90%",
              maxWidth: "600px",
              borderRadius: "15px"
            }}
          />
        </div>
      )}

      <p style={{ marginTop: "35px", color: "#aaa" }}>
        3 créations gratuites pour commencer
      </p>
    </main>
  );
}
