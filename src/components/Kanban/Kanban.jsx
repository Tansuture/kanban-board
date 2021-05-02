import React, {useState, useEffect} from 'react'
import Column from './Column/Column';
import './kanban.css'
import StoreApi from '../../data/storeApi'

const Kanban = ({data, setData}) => {

    // функция для добавления задания в backlog
    const addCard = (name, columnIndex) => {
        const card = {
            name
        }
        setData(prevState => {
            const {columns} = data
            columns[columnIndex]
                .cards
                .push(card)
            let cardId = columns[columnIndex].cards.length
            card.id = cardId
            let newData = new Date().toLocaleString()
            card.time = newData
            return {columns}
        })
    
    }
    
       
    
    // функция для дропдауна
        let addCardDrop = (orderNum, columnIndex) => {
            
            console.log(orderNum)
          
                setData(prevState=>{
                    const {columns} = prevState
                    columns[columnIndex - 1].cards.splice(orderNum, 1)
                    return{columns}
                })
               
        
    
        }
    
        useEffect(() => {
            localStorage.setItem('data', JSON.stringify(data))
        }, [data])
    
        return (
            <div className="kanban">
                <div className="main-wrapper">
                    <StoreApi.Provider
                        value={{addCard, addCardDrop }}>
                        {data
                            .columns
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