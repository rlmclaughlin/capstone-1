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
