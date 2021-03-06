import { useContext, useState } from 'react'
import React from 'react'
import '../kanban.css'
import storeApi from '../../../data/storeApi'
const InputCard=({setOpen,columnIndex})=>{
   const[cardContent,setCard]=useState('')
   const {addCard}=useContext(storeApi)
 
  let handleBtnConfirm=()=>{
      addCard(cardContent,columnIndex)
      setOpen(false)
      setCard('') 
  }

    return(
        <>
        <div className='input-container card'>
        <input className='input'onChange={e=>setCard(e.target.value)} value={cardContent} ></input>
        </div>
        <div>
            <button className="submit-btn"  onClick={handleBtnConfirm}>Submit</button>
        </div>
        </>
    )
}
export default InputCard;