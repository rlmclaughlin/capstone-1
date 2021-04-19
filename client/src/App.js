import React, {useEffect, useState} from 'react'
import Nav from './components/nav/nav'
import InventoryCards from './components/inventory/inventoryCards'
import Login from './components/forms/login'
import SignOut from './components/forms/signOut'
import Landing from './components/landing/landing'
import VinylCards from './components/vinyl/vinylCards'
import ShoppingCart from './components/shoppingCart/shoppingCart'
import SearchResults from './components/searchResults/searchResults'
import {Route} from 'react-router-dom'
import ViewCard from './components/viewCard/viewCard'
import AdminView from './components/adminView/adminView.jsx'
import OrderConfirmation from './components/orderConfirmation/orderConfirmation.jsx'
import axios from 'axios'
import './App.css';

const userData = require('./data/userData.json')
const inventoryData = require('./data/inventoryData.json')

function App() {
    const [users, setUsers] = useState(userData)
    //const [inventory, setInventory] = useState(inventoryData)
    const [cart, setCart] = useState([])
    const [match, setMatch] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9191/products")
          .then(response => {
            setInventory(response.data)
          })
          .catch(error => {
            console.log("There was an error gathering your data", error)
          })
    }, [])

    console.log(inventory)

  return (
      <div className="App">

          <Nav inventory={inventory} setMatch={setMatch} match={match}/>
    
          <Route exact path='/' render={props => (
            <Landing {...props} />
          )}/>

          <Route path='/searchResults' render={props => (
            <SearchResults {...props} match={match} setMatch={setMatch} inventory={inventory} setInventory={setInventory}/>
          )}/>
          
          <Route path='/inventory' render={props => (
            <InventoryCards {...props} setCart={setCart}  inventory={inventory}/>
          )}/>          

          <Route path='/adminView' render={props => (
              <AdminView {...props} inventory={inventory} setInventory={setInventory}/> 
          )}/>

          <Route path='/vinyl' render={props => (
            <VinylCards {...props} setCart={setCart} cart={cart} setInventory={setInventory} inventory={inventory}/>
          )}/>

          <Route path='/cart' render={props => (
              <ShoppingCart {...props}  cart={cart} setCart={setCart} inventory={inventory} setInventory={setInventory}/>
          )}/>

          <Route path='/viewCard/:id' render={props => (
              <ViewCard {...props} inventory={inventory} setInventory={setInventory} cart={cart} setCart={setCart}/> 
          )}/>

          <Route path='/orderConfirmation' render={props => (
              <OrderConfirmation {...props} setCart={setCart}/> 
          )}/>

          <Route path='/login' render={props => (
            <Login {...props}  setUsers={setUsers} setLoggedIn={setLoggedIn} loggedIn={loggedIn} users={users}/>
          )}/>       

          <Route path='/signOut' render={props => (
            <SignOut {...props} />
          )}/>

      </div>
  );
}

export default App;
