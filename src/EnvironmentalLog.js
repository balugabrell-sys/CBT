import React, { useState, useEffect } from "react";

const STORAGE_KEY = "environmental_logs";

export default function EnvironmentalLog() {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({
    date: "",
    ppfd: "",
    ph: "",
    ec: "",
    temp: "",
    humidity: "",
    notes: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setLogs(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  }, [logs]);

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addLog = () => {
    if (!form.date) return;

    setLogs([...logs, form]);
    setForm({
      date: "",
      ppfd: "",
      ph: "",
      ec: "",
      temp: "",
      humidity: "",
      notes: ""
    });
  };

  const deleteLog = (index) => {
    const updated = logs.filter((_, i) => i !== index);
    setLogs(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Environmental Tracking</h2>

      <div style={{ display: "grid", gap: 8, maxWidth: 400 }}>
        <input name="date" type="date" value={form.date} onChange={updateField} />
        <input name="ppfd" placeholder="PPFD" value={form.ppfd} onChange={updateField} />
        <input name="ph" placeholder="pH" value={form.ph} onChange={updateField} />
        <input name="ec" placeholder="EC" value={form.ec} onChange={updateField} />
        <input name="temp" placeholder="Temperature (°C)" value={form.temp} onChange={updateField} />
        <input name="humidity" placeholder="Humidity (%)" value={form.humidity} onChange={updateField} />
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={updateField} />

        <button onClick={addLog}>Add Daily Log</button>
      </div>

      <hr />

      <h3>History</h3>

      {logs.length === 0 && <p>No logs yet.</p>}

      {logs.map((log, index) => (
        <div key={index} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <strong>{log.date}</strong>
          <div>PPFD: {log.ppfd}</div>
          <div>pH: {log.ph}</div>
          <div>EC: {log.ec}</div>
          <div>Temp: {log.temp}</div>
          <div>Humidity: {log.humidity}</div>
          <div>Notes: {log.notes}</div>

          <button onClick={() => deleteLog(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}