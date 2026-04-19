import React, { useState } from "react";

export default function BreedingDashboard() {
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    if (!mother || !father) return;
    setList([...list, { mother, father }]);
    setMother(""); setFather("");
  };

  return (
    <div>
      <h2>Breeding</h2>
      <input value={mother} onChange={e => setMother(e.target.value)} placeholder="Mother"/>
      <input value={father} onChange={e => setFather(e.target.value)} placeholder="Father"/>
      <button onClick={add}>Add Cross</button>

      {list.map((c,i)=><div key={i}>{c.mother} x {c.father}</div>)}
    </div>
  );
}
