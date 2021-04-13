

import Header from './components/Header/Header';
import Kanban from './components/Kanban/Kanban';


function App(props) {
  return (

    <div>
    <Header/>
    <Kanban state={props.state}/>
    </div>
    
  );
}

export default App;
