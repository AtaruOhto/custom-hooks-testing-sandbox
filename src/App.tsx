import React from "react";

import { useTokyoCities } from "./hooks/useTokyoCities";

export default function AppContainer() {
  // Inject Logics with Custom Hook
  const { cities } = useTokyoCities();

  return (
    <ul>
      {cities.map((city) => (
        // Kanji (Chinese Character)
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
}
