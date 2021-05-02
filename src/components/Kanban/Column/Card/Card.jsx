import '../../kanban.css'
import { NavLink } from "react-router-dom"
const Card = ({card,columnIndex}) => {
 
    return (
     
        <div className='card'>
             <NavLink className='cardName' to={`/${columnIndex}/${card.id}`}><p>{card.name}</p></NavLink>
        </div>
    
       
    )
}
export default Card