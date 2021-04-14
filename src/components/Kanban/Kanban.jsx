import React, {Component, useState} from 'react'
import Column from './Column/Column';
import './kanban.css'
import state from '../../data/state'
import StoreApi from '../../data/storeApi'
import {v4 as uuid} from 'uuid';

const Kanban = () => {
    const [data,
        setData] = useState(state)

    const addCard = (name, columnId) => {
        console.log(name,columnId)
        const newCardId = uuid();
        const newCard = {
            id: newCardId,
            name,
        }
        
    const column = data.columns[columnId]
    column.cards=[ ...column.cards,newCard]
    const newState = {
        ...data,
        columns: {
          ...data.columns,
          [columnId]: column,
        }
      };
      setData(newState);

    }

    return (

        <div className="kanban">
            <StoreApi.Provider value={{ addCard}}>
                {data.columns
                    .map((column,columnId) => (
                    <Column column ={column} key={columnId}/>
                    ))}

            </StoreApi.Provider>

        </div>

    );
}

export default Kanban;