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
import React, { useState, useEffect } from "react";
import EnvironmentalLog from "./EnvironmentalLog";

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
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Cultivar Tracker</h1>

      <EnvironmentalLog />

      <hr />

      <h2>Plants</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Plant name"
      />
      <button onClick={addPlant}>Add</button>

      {plants.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>

          <p>Mother: {p.mother || "N/A"}</p>
          <p>Father: {p.father || "N/A"}</p>

          <button onClick={() => setParents(p.id)}>Set Parents</button>
          <button onClick={() => addLog(p.id)}>Add Log</button>

          <div>
            {p.logs.map((l, i) => (
              <div key={i}>
                {l.date} | PPFD: {l.ppfd} | pH: {l.ph} | EC: {l.ec} | {l.note}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
