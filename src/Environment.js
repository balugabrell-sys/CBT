
import React,{useState,useEffect} from "react";

export default function Environment(){
  const [logs,setLogs]=useState([]);
  const [ppfd,setP]=useState("");

  useEffect(()=>{
    const s=localStorage.getItem("env");
    if(s) setLogs(JSON.parse(s));
  },[]);

  useEffect(()=>{
    localStorage.setItem("env",JSON.stringify(logs));
  },[logs]);

  const add=()=>{
    setLogs([...logs,{ppfd}]);
    setP("");
  };

  return(
    <div>
      <h2>Environment</h2>
      <input value={ppfd} onChange={e=>setP(e.target.value)} placeholder="PPFD"/>
      <button onClick={add}>Add</button>
      {logs.map((l,i)=>(<div key={i}>{l.ppfd}</div>))}
    </div>
  );
}
