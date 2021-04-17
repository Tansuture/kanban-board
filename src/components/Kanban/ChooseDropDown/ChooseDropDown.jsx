
const ChooseDropDown = ({columnIndex,data}) => {
  
   if(columnIndex!=0){
    data.filter(column => column.id === columnIndex-1).map(filtered => (
      filtered.cards))
      
  }

    return (
        <div>
            <div className="choose-drop-container">
              

            </div>
            </div>
         
    )
}

export default ChooseDropDown