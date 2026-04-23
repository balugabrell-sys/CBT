
import React,{useState} from "react";
import Plants from "./Plants";
import Breeding from "./Breeding";
import Environment from "./Environment";

export default function App(){
  const [tab,setTab]=useState("plants");
  return(
    <div style={{padding:20}}>
      <h1>CBT Advanced</h1>
      <button onClick={()=>setTab("plants")}>Plants</button>
      <button onClick={()=>setTab("breeding")}>Breeding</button>
      <button onClick={()=>setTab("env")}>Environment</button>
      {tab==="plants"&&<Plants/>}
      {tab==="breeding"&&<Breeding/>}
      {tab==="env"&&<Environment/>}
    </div>
  );
}
