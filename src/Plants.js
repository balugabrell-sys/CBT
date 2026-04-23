
import React,{useState,useEffect} from "react";

export default function Plants(){
  const [plants,setPlants]=useState([]);
  const [name,setName]=useState("");

  useEffect(()=>{
    const s=localStorage.getItem("plants");
    if(s) setPlants(JSON.parse(s));
  },[]);

  useEffect(()=>{
    localStorage.setItem("plants",JSON.stringify(plants));
  },[plants]);

  const add=()=>{
    if(!name) return;
    setPlants([...plants,{id:Date.now(),name,logs:[]}]);
    setName("");
  };

  const log=(id)=>{
    const ppfd=prompt("PPFD");
    setPlants(plants.map(p=>p.id===id?{...p,logs:[...p.logs,{ppfd}]}:p));
  };

  return(
    <div>
      <h2>Plants</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <button onClick={add}>Add</button>
      {plants.map(p=>(
        <div key={p.id}>
          {p.name}
          <button onClick={()=>log(p.id)}>Log</button>
        </div>
      ))}
    </div>
  );
}
