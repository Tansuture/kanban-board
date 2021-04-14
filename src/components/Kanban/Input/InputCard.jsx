import { useContext, useState } from 'react'
import React from 'react'
import '../kanban.css'
import storeApi from '../../../data/storeApi'
const InputCard=({setOpen,columnId})=>{
   const[cardContent,setCard]=useState('')
   const {addCard}=useContext(storeApi)
  let handleOnChange=(e)=>{
      setCard(e.target.value)

  }
 
  let handleBtnConfirm=()=>{
      addCard(cardContent,columnId)
      setOpen(false)

  }

    return(
        <>
        <div className='input-container card'>
        <input className='input'onChange={handleOnChange} value={cardContent} ></input>
        </div>
        <div>
            <button className="submit-btn"  onClick={handleBtnConfirm}>Submit</button>
        </div>
        </>
    )
}
export default InputCard;