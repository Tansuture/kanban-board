import React,{Component} from 'react'
import Column from './Column/Column';
import './kanban.css'
const Kanban=(props)=>{
        return (
        
            <div  className="kanban">
                {props.state.columns.map((column, columnIndex) => (
                    <Column column={column} columnIndex={columnIndex} key={columnIndex}/>))}
            </div>
           

        );
    }

export default Kanban;