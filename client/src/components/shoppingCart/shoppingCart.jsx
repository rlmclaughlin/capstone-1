import React, { useEffect } from 'react'
import '../../styles/inventory/inventoryCard.css'

function ShoppingCart(props){
    let total = 0; 

    const incrementPrice = (price) => {
        let answer = total += price
        answer = parseFloat(answer.toFixed(2))
        return price
    }

    const removeHandler = (targetId) => {
       return props.setCart(props.cart.filter(item => item.id !== targetId)) 
    }

    return(
        <section>
            {
                props.cart.map(item => (
                    <div>
                      <p>{item.description}</p>
                      <p>{incrementPrice(item.price)}</p>
                      <p>{item.product_name}</p>   
                      <button onClick={() => removeHandler(item.id)}>remove item</button>                                        
                    </div>
                ))
            }
            <p>TOTAL{total}</p> 
        </section>
    )
}

export default ShoppingCart


