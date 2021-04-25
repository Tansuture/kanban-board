import {useContext, useEffect, useState} from 'react'
import './ChooseDropDown.css'
import storeApi from '../../../data/storeApi'
import React from 'react'

const ChooseDropDown = ({columnIndex, data}) => {
    const {addCardDrop} = useContext(storeApi)
    const [dropData, setDropData] = useState('')

    let cardList = data
        .filter(column => column.id === columnIndex - 1)
        .map(column => column.cards)
        .flat()

    useEffect(() => {
      console.log(dropData) 
      // if(dropData !==''){
      //   addCardDrop(dropData,columnIndex)
      // }
     },[dropData])
       
  let handleOnChange=(e)=>{
    setDropData(e.target.value)
    addCardDrop(dropData,columnIndex)
  }
    

return (
    <div className="dropdown">
        <select className="selector" value={dropData}  onChange={handleOnChange}>
            <option></option>
            {cardList.map(card => <option value={card.id} key={card.id}>{card.name}</option>)}
        </select>
       
    
    </div>

)
}

export default ChooseDropDown