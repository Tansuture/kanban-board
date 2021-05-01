import './header.css'
import logo from './img/user-avatar.png'
import arrow from './img/arrow-down.png'
import Dropdown from './DropDown/Dropdown'
import React,{Component} from 'react'


class Header extends Component {
    constructor(){
        super()
        this.state={
            isVisible:false
        }
        this.showDrop = this.showDrop.bind(this)
      
    }
    showDrop=(e)=>{
        e.preventDefault();
        this.setState({isVisible: !this.state.isVisible});
    }
    render(){
        return ( 
            <div className="navbar">
             <div className='nav-wrapper' >
               <p className='kanbanName'>Awesome Kanban Board</p>
                <div className="header-image" onClick={this.showDrop}>
                    <img src={logo} className="avatar-user"></img>
                    <img src ={arrow} className={this.state.isVisible ? 'rotate':null } onClick={this.showDrop} ></img>
                </div>
            
           </div>
            {this.state.isVisible ? <Dropdown/>:null}
            </div>
            )
    }
    

}

export default Header