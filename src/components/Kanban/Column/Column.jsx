
import Card from './Card/Card'
import '../../Kanban/kanban.css'
import Button from '../Input/Button'


const Column=({column})=>{


return(
    <>
    <div className='column'>
        <p className="title">{column.name}</p>
        {column.cards.map((card,cardIndex)=>(
            <Card card={card} cardIndex={cardIndex} />
        ))}
            <Button columnId={column.id}/>
    </div>

    </>
)

}

export default Column