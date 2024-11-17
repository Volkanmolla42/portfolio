"use client";

import React from "react";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Bir Hata Oluştu</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tekrar Dene</button>
    </div>
  );
}
