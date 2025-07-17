"use client";

import { useState } from "react";
// ... autres imports

export function ClientLayoutWrapper({ children }) {
  const [count, setCount] = useState(0);
  // ... toute votre logique client ici
  return (
    <>
      <header>{/* ... contenu interactif ... */}</header>
      {children}
    </>
  );
}
