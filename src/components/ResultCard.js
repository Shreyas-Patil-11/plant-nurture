import React from "react";
import "../styles/resultcard.css";
import { IoSearch } from 'react-icons/io5'

export default function ResultCard(props) {
  return (
  
    <div className="result-card" style={{flexDirection: "column", gap: 0}} >
     {console.log("loaded")}
      <div className="card-header" style={{position:"relative"}}>
        <h5 className="card-title">{props.number} : &nbsp; {props.commonNames[0]? props.commonNames[0] : "No Common Name"}</h5>
        <a href={`https://www.google.com/search?q=${props.commonNames[0]}`} target="_blank" className="search-icon">
          <IoSearch/>
        </a>
      </div>
      <div className="card-body" style={{flexDirection:"column", gap: 0}}>
        <p className="card-text"><span className="bold"> Match </span> : {props.score} %</p>
        <p className="card-text"><span className="bold"> Scientific Name </span> : {props.scientificName}</p>
        {props.commonNames.length !== 0 ? (
          <p className="card-text">
           <span className="bold"> Common Names </span> : {props.commonNames.join(", ")}
          </p>
        ) : (
          <p className="card-text">
           <span className="bold"> Common Names </span> : <span className="text-muted">Not found</span>
          </p>
        )}
        <p className="card-text"><span className="bold">Family </span>: {props.family}</p>
      </div>
    </div>
    
  );
}
