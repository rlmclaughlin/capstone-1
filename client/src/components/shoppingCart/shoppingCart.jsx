import React, { useEffect, useState } from 'react'
import '../../styles/shoppingCart/shoppingCart.css'
import ShoppingCartInfo from './shoppingCartInfo'

function ShoppingCart(props){
    const [total, setTotal] = useState()

    useEffect(() => {
        let myTotal = 0 
        props.cart.map(item => 
            myTotal += item.price
        )
       setTotal(myTotal)
    }, [])

    if(!props.cart.length && !total){
        return <div className='empty-cart'>Your Cart Is Empty</div>}
    if(!total){
        return "..loading"
    }

    return(
        <section className='shopping-cart-container'>     
            <section className='cart-header cart-header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1 className='shop'>Lollipop Shoppe Checkout</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>  
            {
                props.cart.map((item, index) => (
                    <ShoppingCartInfo item={item} key={index} total={total} setTotal={setTotal} setCart={props.setCart} cart={props.cart}/> 
                ))
            }
            <section className='total'>
                {!total ? "loading ..." : <h2>Total: ${total.toFixed(2)}</h2>}
                <button>Submit Order</button>
            </section>
        </section>
    )
}

export default ShoppingCart

