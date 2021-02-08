import Nav from './components/nav/nav'
import InventoryCards from './components/inventory/inventoryCards'

import './App.css';
import {Route} from 'react-router-dom'

function App() {
  const inventoryData = require('./data/inventory.json')
  const usersData = require('./data/users.json')
  console.log(usersData)
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' render={props => (
        <InventoryCards {...props} inventoryData={inventoryData}/>
      )}/>
    </div>
  );
}

export default App;
