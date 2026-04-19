import React, { useState } from "react";

export default function PlantHealth() {
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState("");

  const add = () => {
    if (!name) return;
    setPlants([...plants, name]);
    setName("");
  };

  return (
    <div>
      <h2>Plants</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Plant Name"/>
      <button onClick={add}>Add</button>

      {plants.map((p,i)=><div key={i}>{p}</div>)}
    </div>
  );
}
