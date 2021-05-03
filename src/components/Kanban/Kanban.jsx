import React, {useState, useEffect} from 'react'
import Column from './Column/Column';
import './kanban.css'
import StoreApi from '../../data/storeApi'
import { v4 as uuid } from 'uuid';
const Kanban = ({data, setData}) => {

    // функция для добавления задания в backlog
    const addCard = (name, columnIndex) => {
       
      const {columns}=data
    
      let cardId = columns[columnIndex].cards.length
            let card = {
                id:cardId,
                name,
                time: new Date().toLocaleString()
     
             }
            setData(prevState=>{
                const column = data.columns[columnIndex];
             column.cards = [...column.cards,card];
     
             const newState = {
                 ...data,
                 columns: {
                   ...data.columns,
                   [columnIndex]: column,
                 },
               };
               return {newState}
            })
           
             
               
             
       
        };

    
       
        useEffect(() => {
            localStorage.setItem('data', JSON.stringify(data))
        }, [data])
    
        return (
            <div className="kanban">
                <div className="main-wrapper">
                    <StoreApi.Provider
                        value={{addCard}}>
                        {data.columns
                            .map((column, columnIndex, data) => (<Column
                                columnIndex={columnIndex}column ={column}
                                data={data}
                                key={columnIndex}/>))}
                    </StoreApi.Provider>
                </div>
            </div>
    
        );
    }
    
    export default Kanban