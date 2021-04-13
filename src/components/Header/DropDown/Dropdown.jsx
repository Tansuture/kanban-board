import React,{Component} from 'react'
import '../../Header/header.css'

class Dropdown extends Component {
    render() { 
        return (
            <>
            <div className="drop-container">
            <ul className="drop-list">
                <li><a>My account</a></li>
                <li><a>My Task</a></li>
                <li><a>Log out</a></li>
            </ul>
            </div>
            </>
          );
    }
}
 
export default Dropdown;