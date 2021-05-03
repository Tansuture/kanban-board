import {useContext, useEffect, useState} from 'react'
import './ChooseDropDown.css'
import storeApi from '../../../data/storeApi'
import React from 'react'


const ChooseDropDown = ({columnIndex, data}) => {
    const {addCardDrop} = useContext(storeApi)
    const [dropData, setDropData] = useState('')

    let prevColumnCardList = data
        .filter(column => column.id === columnIndex - 1)
        .map(column => column.cards)
        .flat()
        
 

 
return (
    <div className="dropdown">
       
        <select className="selector" onChange={(e) => addCardDrop(e.target.value, columnIndex)}>
            <option></option>
            {prevColumnCardList.map( (currElement, index) => <option value={index} key={currElement.id}> {currElement.name} </option>)}
        </select>
 
     
       
    
    </div>

)
}

export default ChooseDropDown