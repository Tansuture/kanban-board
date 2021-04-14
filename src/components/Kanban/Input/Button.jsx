import { Collapse } from '@material-ui/core'
import { useState } from 'react'
import '../kanban.css'
import InputCard from './InputCard'


const Button=({columnIndex})=> {
const [open,setOpen]=useState(false)

        return (
        <>
        <Collapse in={open}>
        <InputCard setOpen={setOpen} columnIndex={columnIndex} />
        </Collapse>
        <Collapse in={!open}>
         <div className= "add" onClick={()=>setOpen(!open)}>+ Add card </div>
         </Collapse>
            </>
            )
            

}
export default Button