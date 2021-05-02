import './footer.css'
const Footer=({data})=>{
  const active=data.columns.filter(column=>column.id===0).map(column=>column.cards.length)
  const finished = data.columns.filter(column=>column.id===3).map(column=>column.cards.length)
 
    
    return(
        <div className='footer'>
        <div className='footer-wrapper'>
            
            <p className='active '>Active task	&#60;{active}&#62; </p>
            <p >Finished task	&#60;{finished}&#62; </p>
            <p className='name-year'>Kanban board by &#60;Tansu&#62;,&#60;2021&#62; </p>
            

          
        </div>

     </div>
    )
}
export default Footer