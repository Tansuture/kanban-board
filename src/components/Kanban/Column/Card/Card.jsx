import {useState} from "react"
import Button from "../../Input/Button"

const Card = ({card}) => {
    const [currentCard,
        setCurrentCard] = useState(null)
     let dragStart = (e, card) => {
        console.log(card)
        setCurrentCard(card)

    }

     let dragEnd = (e) => {
         e.target.style.background='white'
       

    }
     let dragOver = (e) => {
        e.preventDefault()
        e.target.style.background='lightgray'

    }
    let  dragHandler=(e,card)=>{
        e.preventDefault()
        console.log(card)

    }
    return (
        <>
        <div
            className='card'
            draggable={true}
            onDragStart={(e)=>dragStart(e,card)}
            onDragLeave={(e)=>dragEnd(e)}
            onDragEnd={(e)=>dragEnd(e)} 
            onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>dragHandler(e,card)}>
            <p className='title'>{card.name}</p>
        </div>
        <Button/>
        </>
    )
}
export default Card