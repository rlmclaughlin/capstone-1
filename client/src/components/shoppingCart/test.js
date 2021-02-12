


import React, { useEffect, useState } from 'react'
import '../../styles/shoppingCart/shoppingCart.css'

function ShoppingCart(props){
    const [qty, setQty] = useState(1)
    let total = 0; 

    const incrementPrice = (price) => {
        let answer = total += (price * qty)
        answer = answer.toFixed(2)
        return price
    }

    const removeHandler = (targetId) => {
       return props.setCart(props.cart.filter(item => item.id !== targetId)) 
    }

    const changeHandler = (event) => {
         setQty(Number(event.target.value))
    }


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
                    <div key={index} className='shopping-cart-card'>
                        <div className='cart-left-container'>
                            <img src={item.image}/>
                            <section>
                                <div>
                                    <h4>{item.product_name}</h4>  
                                    <h5>{item.description}</h5>
                                    <p>UPC:{item.serialNumber}</p>
                                </div>
                                <div className='button-qty-section'>
                                    <button onClick={() => removeHandler(item.id)}>remove item</button> 
                                    <form>
                                       <label for='qty'>Qty: </label>
                                       <input type='number' name='qty' onChange={e => changeHandler(e)}  min={1} max={item.qty} value={qty}/>    
                                    </form>                              
                                </div>
                            </section>
                        </div>
                        <h3 className='price'>Price: ${incrementPrice(item.price)}</h3>                                             
                    </div>
                ))
            }
            <section className='total'>
                <h2>Total: ${total}</h2>     
            </section>
        </section>
    )
}

export default ShoppingCart


