import ClearIcon from '@material-ui/icons/Clear';
import {IconButton} from '@material-ui/core'
import './Description.css'
import {NavLink} from 'react-router-dom'


const Description = ({data,match}) => {
    console.log(data)
    console.log(match)

    const cards = data.columns.map((column) => column.cards).flat();
    const card = cards.find(card=>card.id === match.params.id)
    console.log(card)
  

    return (

        <div className='desc-container'>
            <NavLink to='/'>
                <IconButton className='clear'>
                 
                    <ClearIcon/>
                </IconButton>
            </NavLink>
        </div>

    )
}
export default Description