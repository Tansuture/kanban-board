import {useContext, useState} from 'react'
import './ChooseDropDown.css'
import storeApi from '../../../data/storeApi'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ChooseDropDown = ({columnIndex, data}) => {
    let cardData = data
    .filter(column => column.id === columnIndex - 1)
    .map(column => column.cards)
    .flat()

    const {addCardDrop} = useContext(storeApi)
    const [dropData,setDropData] = useState('')

    let handleChange = (e) => {
       
        setDropData(e.target.value)
        addCardDrop(dropData,columnIndex)
       

    }




    return (
        <div className="dropdown">
            {/* <Dropdown options={cardData}  value={dropData} onChange={handleChange} placeholder="Select an option" /> */}
      <select className="selector" value={dropData} onChange={handleChange}>

        {cardData.map(card=><option>{card.name}</option>)}
      </select>
      </div>

    )
}

export default ChooseDropDown