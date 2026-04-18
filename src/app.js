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
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Cultivar Tracker</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Plant name"
      />
      <button onClick={addPlant}>Add</button>

      {plants.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h2>{p.name}</h2>

          <p>Mother: {p.mother || "—"}</p>
          <p>Father: {p.father || "—"}</p>

          <button onClick={() => setParents(p.id)}>Set Parents</button>
          <button onClick={() => addLog(p.id)}>Add Daily Log</button>

          <h4>Logs:</h4>
          {p.logs.map((log, i) => (
            <div key={i}>
              {log.date} | PPFD: {log.ppfd} | pH: {log.ph} | EC: {log.ec} | {log.note}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}