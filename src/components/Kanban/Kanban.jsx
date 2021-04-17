import React, {Component, useState,useEffect} from 'react'
import Column from './Column/Column';
import './kanban.css'
import state from '../../data/state'
import StoreApi from '../../data/storeApi'

const Kanban = () => {
    const [data,setData] = useState(state)
   
    const addCard = (name, columnIndex) => {
        const card = {name}
        setData(prevState => {
            const {columns}= data
            columns[columnIndex].cards.push(card)
            return {columns}
      
        })   
    }
useEffect(()=>{
localStorage.setItem('data',JSON.stringify(data))
},[data])


    return (
        <div className="kanban">
            <StoreApi.Provider value={{addCard}}>
                {data.columns
                    .map((column,columnIndex,data) => (
                    <Column column ={column} columnIndex={columnIndex}  data={data} key={columnIndex}/>
                    ))}
            </StoreApi.Provider>

        </div>

    );
}

    export default Kanban