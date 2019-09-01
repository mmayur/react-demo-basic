import React from 'react';
import './card.styles.css';

export const Card = (props) => (
   <div className="card-container">
    <img alt="heroes" 
    src={`https://robohash.org/${props.man.id}?set=set2&size=150x150`}></img>
    <h1>{props.man.name}</h1>
    <p>{props.man.email}</p>
   </div>   
)
   
   
