import './footer.css'
const Footer=({data})=>{
  const active=data.columns.filter(column=>column.id===0).map(column=>column.cards.length)
  const finished = data.columns.filter(column=>column.id===3).map(column=>column.cards.length)
 
    
    return(
        <div className='footer'>
        <div className='footer-wrapper'>
            
            <p className='count-task'>Active task	&#60; {active}	&#62; </p>
            <p className='count-finished'>Finished task	&#60; {finished}	&#62; </p>

          
        </div>

     </div>
    )
}
export default Footer