
import { BrowserRouter,Route } from 'react-router-dom';
import Description from './components/cardFullDesc/Description';
import Header from './components/Header/Header';
import state from './data/state'

import Kanban from './components/Kanban/Kanban';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
    const [data,setData] = useState(state)
   

    return (
        <BrowserRouter>

        <div>
            <Header/>
            <Route exact path='/' render = {()=><Kanban data={data} setData={setData}/>}/>
            <Route path='/desc' render = {()=><Description data={data}/>}/>
            <Footer/>
        </div>


        </BrowserRouter>
 
    );
}

export default App;
