import '../kanban.css'
const InputCard=({setOpen})=>{
    return(
        <>
        <div className='input-container card'>
        <input className='input'></input>
        </div>
        <div>
            <button className="submit-btn" onClick={()=>setOpen(false)}>Submit</button>
        </div>
        </>
    )
}
export default InputCard;