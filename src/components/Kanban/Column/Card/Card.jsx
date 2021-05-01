import '../../kanban.css'
import { NavLink } from "react-router-dom"
const Card = ({card}) => {
    return (
     
        <div className='card'>
             <NavLink className='cardName' to={`/${card.id}`}><p>{card.name}</p></NavLink>
        </div>
    
       
    )
}
export default Card