import React from 'react'
import './Card-List.style.css'
import SCard from '../Card/Card.component'

export const CardList = props => (
  

     <div className="card-list"> 
      
         {props.series.map(serie => 
             <SCard  key={serie.id} serie={serie} /> 
             )}
            
       
     </div>
         
)