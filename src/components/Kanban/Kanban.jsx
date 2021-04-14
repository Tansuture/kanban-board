import React, {Component, useState} from 'react'
import Column from './Column/Column';
import './kanban.css'
import state from '../../data/state'
import StoreApi from '../../data/storeApi'
import {v4 as uuid} from 'uuid';

const Kanban = () => {
  

    const [data,
        setData] = useState(state)
      
    const addCard = (name, columnIndex) => {
       const card ={name}
 
    
    setData(prevState=>{
        const {columns}= data
        columns[columnIndex].cards.push(card)
        return {columns}
      
    })
        
    }




    return (

        <div className="kanban">
            <StoreApi.Provider value={{ addCard}}>
                {data.columns
                    .map((column,columnIndex) => (
                    <Column column ={column} columnIndex={columnIndex} key={columnIndex}/>
                    ))}

            </StoreApi.Provider>

        </div>

    );
}

export default Kanban;