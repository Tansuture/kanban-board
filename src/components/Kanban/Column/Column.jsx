
import Card from './Card/Card'
import '../../Kanban/kanban.css'
import Button from '../Input/Button'
import InputCard from '../addCardInput/InputCard'
import { Collapse } from '@material-ui/core'
import { useState } from 'react'
import ChooseDropDown from '../ChooseDropDown/ChooseDropDown'

const Column=({column, columnIndex, data}) => {

    const backlog = column.name === 'Backlog'
    const [isOpen,setOpen]=useState(false)
   
    return(
    
        <>
            <div className="column">
                <p className="title">{column.name}</p>
                
                { column.cards.map((card,cardIndex) => <Card card={card} cardIndex={cardIndex} />) }
                
                {isOpen ?(
                backlog ? ( <Collapse in={isOpen}><InputCard setOpen={setOpen }columnIndex={columnIndex}/></Collapse>) : 
                (<ChooseDropDown data={data} columnIndex={columnIndex} column={column}/>)
                 ):(
                    <Button  setOpen ={setOpen} isOpen={isOpen} columnIndex={columnIndex}/>
                    )
                }
            </div>
        </>
    )

}

export default Column