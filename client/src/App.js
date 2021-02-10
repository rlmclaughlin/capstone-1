
import React, {useEffect, useState} from 'react'
import Nav from './components/nav/nav'
import InventoryCards from './components/inventory/inventoryCards'
import Login from './components/forms/login'
import Register from './components/forms/register'
import Landing from './components/landing/landing'
import VinylCards from './components/vinyl/vinylCards'

import './App.css';
import {Route} from 'react-router-dom'
import axios from 'axios'

const userData = require('./data/userData.json')
const inventoryData = require('./data/inventoryData.json')

function App() {
    const [users, setUsers] = useState(userData)
    const [inventory, setInventory] = useState(inventoryData)

    console.log(users)
    
  return (
    <div className="App">
      <Nav/>

      <Route exact path='/' render={props => (
        <Landing {...props} />
      )}/>

      <Route path='/inventory' render={props => (
        <InventoryCards {...props} inventory={inventory}/>
      )}/>
            <Route path='/vinyl' render={props => (
        <VinylCards {...props} inventory={inventory}/>
      )}/>

      <Route path='/login' render={props => (
        <Login {...props} users={users} setUsers={setUsers}/>
      )}/>
      <Route path='/register' render={props => (
        <Register {...props}  setUsers={setUsers} users={users}/>
      )}/>
    </div>
  );
}

export default App;
