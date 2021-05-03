import React, {useEffect} from 'react'
import Column from './Column/Column';
import './kanban.css'
import StoreApi from '../../data/storeApi'
const Kanban = ({data, setData}) => {

    // функция для добавления задания в backlog
    const addCard = (name, columnIndex) => {

    const { columns } = data
    
    let cardId = columns[columnIndex].cards.length + 1
    let newCard = {
        id: cardId,
        name,
        time: new Date().toLocaleString()
    }

    const newColumn = {...data.columns[columnIndex]};

    newColumn.cards = [...newColumn.cards, newCard];

    let newColumns = [...data.columns]
    newColumns[columnIndex] = newColumn

     setData ({
        columns: newColumns
     })



    };



    const addCardDrop = (cardIndex, columnIndex) => {
        console.log("cardIndex", cardIndex)
        console.log("columnIndex", columnIndex)

        cardIndex = +cardIndex

        const prevColumn = {...data.columns[columnIndex - 1]};
        let neededCard = { ...prevColumn.cards[cardIndex] }
        neededCard.id = data.columns[columnIndex].cards.length + 1

        const newColumn = {...data.columns[columnIndex]};
        newColumn.cards = [...newColumn.cards, neededCard]

        

        const newPrevColumnCards = [...prevColumn.cards.slice(0, cardIndex), ...prevColumn.cards.slice(cardIndex + 1)]
        prevColumn.cards = newPrevColumnCards

        let newColumns = [...data.columns]
        newColumns[columnIndex - 1] = prevColumn
        newColumns[columnIndex] = newColumn

         setData ({
            columns: newColumns
         })



    };

    console.log("data", data)



        useEffect(() => {
            localStorage.setItem('data', JSON.stringify(data))
        }, [data])
    
        return (
            <div className="kanban">
                <div className="main-wrapper">
                    <StoreApi.Provider
                        value={{addCard, addCardDrop}}>
                        {data.columns
                            .map((column, columnIndex, data) => (<Column
                                columnIndex={columnIndex} column = {column}
                                data={data}
                                key={columnIndex}/>))}
                    </StoreApi.Provider>
                </div>
            </div>
    
        );
    }
    
    export default Kanban