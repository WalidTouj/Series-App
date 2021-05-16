import React from 'react'
import {CardBrBa} from '../Card/CardBreakingBad.component'
import './Card-List.style.css'

export const CardListBrBa = props =>(
<div className="card-list">
    {props.charactersBrBa.map(
        character => <CardBrBa character={character} />
    )}
</div>
)

