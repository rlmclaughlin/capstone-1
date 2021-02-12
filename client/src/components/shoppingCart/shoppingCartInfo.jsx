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
            props.setTotal(prevState => prevState - props.item.price)
            return props.setCart(props.cart.filter(item => item.id !== targetId)) 
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
                    <form>
                       <label for='qty'>Qty: </label>
                       <input type='number' name='qty'  onChange={changeHandler} min={1} max={props.item.qty} value={qty}/>    
                        <button onClick={(e) => {incrementPrice(e, props.item.price)}}>up</button>
                        <button onClick={(e) => {decrementPrice(e, props.item.price)}}>down</button>
                    
                    </form>                              
                </div>
            </section>
        </div>
        <h3 className='price'>Price: ${props.item.price}</h3>                                             
    </div>       

    )
}

export default ShoppingCartInfo