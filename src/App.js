import { Route, Switch} from 'react-router-dom';
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
     <Switch>

            <div className='page'>
                <Header/>
                <Route exact path='/' render= {()=><Kanban data={data}setData={setData}/>}/>
                <Route path='/:id'   render={(props) => <Description data={data} {...props}/>}/>


                <Footer data={data}/>
            </div>
            </Switch>

    );
}

export default App;
