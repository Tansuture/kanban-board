import {useState} from "react"
import Button from "../../Input/Button"

const Card = ({card}) => {
    

    
    return (
        <>
        <div
            className='card'>
            <p className='title'>{card.name}</p>
        </div>

        </>
    )
}
export default Card