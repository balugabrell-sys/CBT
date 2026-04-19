import React, { useState } from "react";

export default function EnvironmentLog() {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState("");

  const add = () => {
    if (!date) return;
    setLogs([...logs, date]);
    setDate("");
  };

  return (
    <div>
      <h2>Environment</h2>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
      <button onClick={add}>Add Log</button>

      {logs.map((l,i)=><div key={i}>{l}</div>)}
    </div>
  );
}
