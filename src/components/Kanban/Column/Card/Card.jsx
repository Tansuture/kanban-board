import '../../kanban.css'
import { NavLink } from "react-router-dom"
const Card = ({card}) => {
    return (
     
        <div className='card'>
         <NavLink className='cardName' to='/desc'><p>{card.name}</p></NavLink>
        </div>
    
       
    )
}
export default Card