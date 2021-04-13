
import Card from './Card/Card'
import '../../Kanban/kanban.css'
const Column=({column,props})=>{
return(
    <div className='column'>
        <p className="title">{column.name}</p>
        {column.cards.map((card,cardIndex)=>(
            <Card card={card} cardIndex={cardIndex} />
        ))}
    </div>
)
}
export default Column