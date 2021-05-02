import ClearIcon from '@material-ui/icons/Clear';
import {IconButton} from '@material-ui/core'
import './Description.css'
import {NavLink} from 'react-router-dom'

const Description = ({data, match}) => {

    let columnId = +match.params.colId
    let cardId = +match.params.cardId

    const column = data .columns.find(column => column.id === columnId)
    const card = column.cards.find(card => card.id === cardId)

    return (

        <div className='desc-container'>
            <NavLink to='/'>
                <IconButton className='clear'>
                    <ClearIcon/>
                </IconButton>
            </NavLink>
            <h3 className='card-name'>{card.name}</h3>
            <p className='cardDesc'>{card.desc}</p>
            <p className='cardTime'>{card.time}</p>
        </div>

    )
}
export default Description