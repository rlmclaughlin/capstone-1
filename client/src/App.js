import Nav from './components/nav/nav'
import InventoryCards from './components/inventory/inventoryCards'
import Login from './components/forms/login'
import Register from './components/forms/register'

import './App.css';
import {Route} from 'react-router-dom'

function App() {
  const inventoryData = require('./data/inventory.json')
  const usersData = require('./data/users.json')

  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' render={props => (
        <InventoryCards {...props} inventoryData={inventoryData}/>
      )}/>
      <Route path='/login' render={props => (
        <Login {...props} usersData={usersData}/>
      )}/>
      <Route path='/register' render={props => (
        <Register {...props} usersData={usersData}/>
      )}/>
    </div>
  );
}

export default App;
