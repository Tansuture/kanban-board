import { useState } from 'react'
import './Description.css'

const Description =({data})=>{


    return(
        <>
        <div className='desc-container'>
            {data.columns.map(column=>column.cards.map(card=><p className='card-name'>{card.name}</p>))}
        </div>
       </>
    )
}
export default Description