import React, { useState } from "react";
import BreedingDashboard from "./modules/breeding/BreedingDashboard";
import PlantHealth from "./modules/plants/PlantHealth";
import EnvironmentLog from "./modules/environment/EnvironmentLog";

export default function App() {
  const [tab, setTab] = useState("breeding");

  return (
    <div style={{ padding: 20 }}>
      <h1>Cultivar Tracker</h1>
      <button onClick={() => setTab("breeding")}>Breeding</button>
      <button onClick={() => setTab("plants")}>Plants</button>
      <button onClick={() => setTab("environment")}>Environment</button>

      {tab === "breeding" && <BreedingDashboard />}
      {tab === "plants" && <PlantHealth />}
      {tab === "environment" && <EnvironmentLog />}
    </div>
  );
}
