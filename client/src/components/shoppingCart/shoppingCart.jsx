import React, { useEffect, useState } from 'react'
import '../../styles/shoppingCart/shoppingCart.css'
import ShoppingCartInfo from './shoppingCartInfo'
import StripeCheckout from 'react-stripe-checkout'

function ShoppingCart(props){
    const [total, setTotal] = useState()

    useEffect(() => {
        let myTotal = 0 
        props.cart.map(item => 
           item.quantity === 0 ? myTotal += 0 : myTotal += item.price
        )
       setTotal(myTotal)
    }, [])

    const handleToken = (token, address) => {
        console.log({token, address})
        props.history.push('/orderConfirmation')
    }

    if(!props.cart.length && !total){
        return <div className='empty-cart'>Your Cart Is Empty</div>}
    if(!total){
        return <div className='empty-cart'>Your Cart Is Empty</div>
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
                    <ShoppingCartInfo item={item} 
                                      key={index}  
                                      total={total} 
                                      setTotal={setTotal} 
                                      setCart={props.setCart} 
                                      cart={props.cart} 
                                      inventory={props.inventory} 
                                      setInventory={props.setInventory}/> 
                ))
            }
            <section className='total'>
                {!total ? "loading ..." : <h2>Total: ${total.toFixed(2)}</h2>}
                <StripeCheckout stripeKey="pk_test_51INMqZJa1mRCNszpMNOKrLfgHJEf8ww3XD4D4TIhyTFCKMSLgjMTFUPE0QnJd9Pjeb5Z9RPFcA6NmdttMK5e6TiR00znYVrmbs"
                                token={handleToken}
                                billingAddress
                                shippingAddress
                                amount={total * 100} />
            </section>
        </section>
    )
}

export default ShoppingCart








