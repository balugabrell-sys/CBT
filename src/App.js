import React, { useState, useEffect } from "react";

export default function App() {
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("plants");
    if (saved) setPlants(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const addPlant = () => {
    if (!name) return;
    setPlants([
      ...plants,
      {
        id: Date.now(),
        name,
        logs: [],
        mother: "",
        father: "",
      },
    ]);
    setName("");
  };

  const addLog = (id) => {
    const ppfd = prompt("PPFD:");
    const ph = prompt("pH:");
    const ec = prompt("EC:");
    const note = prompt("Notes:");

    setPlants(
      plants.map((p) =>
        p.id === id
          ? {
              ...p,
              logs: [
                ...p.logs,
                {
                  date: new Date().toLocaleDateString(),
                  ppfd,
                  ph,
                  ec,
                  note,
                },
              ],
            }
          : p
      )
    );
  };

  const setParents = (id) => {
    const mother = prompt("Mother:");
    const father = prompt("Father:");

    setPlants(
      plants.map((p) =>
        p.id === id ? { ...p, mother, father } : p
      )
import React from "react";
import EnvironmentalLog from "./EnvironmentalLog";

function App() {
  return (
    <div>
      <h1>Cultivar Tracker</h1>
      <EnvironmentalLog />
    </div>
  );
}

export default App;