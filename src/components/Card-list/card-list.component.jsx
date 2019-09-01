import React from 'react';
import {Card} from '../Card/card.component';
import './card-list.style.css';

export const CardList = (props) => { 
return(
   <div>
        
    <div className="card-list">
        
        {
         props.hros.map(man => (
                 <Card key={man.id} man={man}/>
             ))
       }
    </div>
   </div>
)
}