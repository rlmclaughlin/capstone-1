
import React,{useState, useEffect} from 'react'
import '../../styles/shoppingCart/shoppingCart.css'

function ShoppingCartInfo(props){

    const [qty, setQty] = useState(1)
    

    const incrementPrice = (e, item) => { 
        e.preventDefault()
        setQty(prev => prev + 1)
        if(props.item.qty <= qty){
            return setQty(props.item.qty)
        } else {
            props.setCart(props.cart.map((x) => x.id === props.item.id ? {...x, quantity: qty + 1} : x ))
            return props.setTotal(prev => prev + item)  
        }
        
    }


    const decrementPrice = (e, item) => { 
        e.preventDefault()
        setQty(prev => prev - 1)
        if(props.item.quantity <= 0){
            setQty(0)
            props.setCart(props.cart.map((x) => x.id === props.item.id ? {...x, quantity: qty } : x))
        } else {
            props.setCart(props.cart.map((x) => x.id === props.item.id ? {...x, quantity: qty - 1} : x))
            return props.setTotal(prev => prev - item)
        }
    }


    const removeHandler = (targetId) => {
        if(props.cart.length === 1){
            props.setTotal(0)
            return props.setCart(props.cart.filter(item => item.id !== targetId))    
        } else if(props.item.quantity === 0){
            props.setTotal(prevState => prevState - 0)
            return props.setCart(props.cart.filter(item => item.id !== targetId)) 
        } else {
        props.setTotal(prevState => prevState - props.item.price * props.item.quantity)
        return props.setCart(props.cart.filter(item => item.id !== targetId)) 
        }
    }

    const changeHandler = (event) => {
        setQty(Number(event.target.value))
        console.log(qty)
        props.setTotal(item => item + props.item.price)
    }

    console.log(props.cart)

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
                        <input type='number' name='qty'  onChange={changeHandler} max={props.item.qty} value={props.item.quantity} readOnly/>    
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