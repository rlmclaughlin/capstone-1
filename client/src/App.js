import Nav from './components/nav/nav'
import InventoryCards from './components/inventory/inventoryCards'

import './App.css';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' render={props => (
        <InventoryCards {...props} />
      )}/>
    </div>
  );
}

export default App;
