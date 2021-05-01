import { Collapse } from '@material-ui/core'
import '../kanban.css'


const Button=({setOpen,isOpen})=> {
  

        return (
        <>
        <Collapse in={!isOpen}>
         <div className= "add" onClick={()=>setOpen(!isOpen)}>+ Add card </div>
         </Collapse>
            </>
            )
            

}
export default Button