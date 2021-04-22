import React, { useState,useEffect} from 'react'
import Column from './Column/Column';
import './kanban.css'
import StoreApi from '../../data/storeApi'


const Kanban = ({data,setData}) => {

   
    const addCard = (name, columnIndex) => {
        const card = {name}
        setData(prevState => {
            const {columns}= data
            columns[columnIndex].cards.push(card)
            return {columns}
      
        })   
    }
    let addCardDrop=(name,columnIndex)=>{
        
        const card = {name}
       setData(prevState=>{
        const {columns}= prevState
        columns[columnIndex].cards.push(card)
        return {columns}
         
       })

    }

   
useEffect(()=>{
localStorage.setItem('data',JSON.stringify(data))
},[data])



    return (
        <div className="kanban">
            <StoreApi.Provider value={{addCard,addCardDrop}}>
                {data.columns
                    .map((column,columnIndex,data) => (
                    <Column column ={column}columnIndex={columnIndex}  data={data} key={columnIndex}/>
                    ))}
            </StoreApi.Provider>

        </div>

    );
}

    export default Kanban