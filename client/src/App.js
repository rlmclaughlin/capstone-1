
import React, {useEffect, useState} from 'react'
import Nav from './components/nav/nav'
import InventoryCards from './components/inventory/inventoryCards'
import Login from './components/forms/login'
import Register from './components/forms/register'
import Landing from './components/landing/landing'
import VinylCards from './components/vinyl/vinylCards'
import DvdCards from './components/dvds/dvdCards'
import ShoppingCart from './components/shoppingCart/shoppingCart'
import {Route} from 'react-router-dom'

import './App.css';

const userData = require('./data/userData.json')
const inventoryData = require('./data/inventoryData.json')

function App() {
    const [users, setUsers] = useState(userData)
    const [inventory, setInventory] = useState(inventoryData)
    const [cart, setCart] = useState([])
    console.log(cart)
  return (
    <div className="App">
      <Nav/>

      <Route exact path='/' render={props => (
        <Landing {...props} />
      )}/>

      <Route path='/inventory' render={props => (
        <InventoryCards {...props} setCart={setCart} inventory={inventory}/>
      )}/>
            <Route path='/vinyl' render={props => (
        <VinylCards {...props} setCart={setCart} inventory={inventory}/>
      )}/>

      <Route path='/dvd' render={props => (
          <DvdCards {...props} setCart={setCart} inventory={inventory}/>
      )}/>
      <Route path='/cart' render={props => (
          <ShoppingCart {...props}  inventory={inventory}/>
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
