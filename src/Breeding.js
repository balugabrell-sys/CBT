
import React,{useState,useEffect} from "react";

export default function Breeding(){
  const [list,setList]=useState([]);
  const [m,setM]=useState("");
  const [f,setF]=useState("");

  useEffect(()=>{
    const s=localStorage.getItem("breed");
    if(s) setList(JSON.parse(s));
  },[]);

  useEffect(()=>{
    localStorage.setItem("breed",JSON.stringify(list));
  },[list]);

  const add=()=>{
    if(!m||!f) return;
    setList([...list,{id:Date.now(),m,f}]);
    setM("");setF("");
  };

  return(
    <div>
      <h2>Breeding</h2>
      <input value={m} onChange={e=>setM(e.target.value)} placeholder="Mother"/>
      <input value={f} onChange={e=>setF(e.target.value)} placeholder="Father"/>
      <button onClick={add}>Add</button>
      {list.map(c=>(<div key={c.id}>{c.m} x {c.f}</div>))}
    </div>
  );
}
