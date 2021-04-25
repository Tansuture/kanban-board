import {BrowserRouter, Route} from 'react-router-dom';
import {useState} from 'react';
import state from './data/state'

import Header from './components/Header/Header';
import Kanban from './components/Kanban/Kanban';
import Footer from './components/Footer/Footer';
import './app.css'
import Description from './components/cardFullDesc/Description';

function App() {
    const [data, setData] = useState(state)


    return (
        <BrowserRouter>

            <div className='page'>
                <Header/>
                <Route exact path='/' render= {()=><Kanban data={data}setData={setData}/>}/>
                 <Route path='/desc'  render = {()=><Description  data={data}/>}/>
        

                <Footer data={data}/>
            </div>

        </BrowserRouter>

    );
}

export default App;
