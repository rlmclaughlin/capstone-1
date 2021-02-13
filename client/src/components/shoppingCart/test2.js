
import React,{useState, useEffect} from 'react'
import '../../styles/shoppingCart/shoppingCart.css'

function ShoppingCartInfo(props){

    const [qty, setQty] = useState(1)
    

    const incrementPrice = (e, item) => { 
        e.preventDefault()
        setQty(prev => prev + 1)
        console.log(qty)
        if(props.item.qty <= qty){
            return setQty(props.item.qty.toFixed(2))
        } else {
            return props.setTotal(prev => prev + item)  
        }
    }

    const decrementPrice = (e, item) => { 
        e.preventDefault()
        setQty(prev => prev - 1)
        if(qty <= 0){
             setQty(0)
        } else {
        return props.setTotal(prev => prev - item)
        }
    }

    const removeHandler = (targetId) => {
        if(props.cart.length === 1){
            props.setTotal(0)
            return props.setCart(props.cart.filter(item => item.id !== targetId))    
        } else if(qty === 0){
            props.setTotal(prevState => prevState - 0)
            return props.setCart(props.cart.filter(item => item.id !== targetId)) 
        } else {
        props.setTotal(prevState => prevState - props.item.price)
        return props.setCart(props.cart.filter(item => item.id !== targetId)) 
        }
    }

         const changeHandler = (event) => {
             setQty(Number(event.target.value))
            console.log(qty)
            props.setTotal(item => item + props.item.price)
       }

    return(
        <div className='shopping-cart-card'>
        <div className='cart-left-container'>
            <img src={props.item.image}/>
            <section>
                <div>
                    <h4>{props.item.product_name}</h4>  
                    <h5>{props.item.description}</h5>
                    <p>UPC:{props.item.serialNumber}</p>
                </div>
                <div className='button-qty-section'>
                    <button onClick={() => removeHandler(props.item.id)}>remove item</button> 
                    <form className='cart-form-container'>
                        <label for='qty'>Qty: </label>
                        <input type='number' name='qty'  onChange={changeHandler} min={1} max={props.item.qty} value={qty} readOnly/>    
                        <div className='button-container'>
                        <p onClick={(e) => {incrementPrice(e, props.item.price)}}></p>
                        <p onClick={(e) => {decrementPrice(e, props.item.price)}}></p>
                        </div>

                    {props.item.qty <= qty ? <p style={{color: 'red', marginLeft: '6px', display: 'flex', alignItems: 'center' }}>Maximum Qty Available</p> : ' '}
                    </form>                              
                </div>
            </section>
        </div>
        <div style={{display: "flex", flexDirection: 'column', justifyContent:"space-between", alignItems: "flex-end"}}>
            <i class="fas fa-record-vinyl vinyl-icon"></i>
            <h3 className='price'>Price: ${props.item.price}</h3> 
        </div>
                                            
    </div>       

    )
}

export default ShoppingCartInfo















































import React, { useEffect, useState } from 'react'
import '../../styles/shoppingCart/shoppingCart.css'
import ShoppingCartInfo from './shoppingCartInfo'

function ShoppingCart(props){

    const [total, setTotal] = useState(0)

    if(!props.cart.length){
        return <div className='empty-cart'>Your Cart Is Empty</div>}


    return(
        <section className='shopping-cart-container'>     
            <section className='cart-header cart-header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1 className='shop'>Lollipop Shoppe Checkout</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>  
            {
                props.cart.map((item, index) => (
                    <ShoppingCartInfo setTotal={setTotal} total={total} item={item} cart={props.cart} setCart={props.setCart}/>
                ))
            }
            <section className='total'>
                <h2>Total: ${total}</h2>     
            </section>
        </section>
    )
}

export default ShoppingCart
