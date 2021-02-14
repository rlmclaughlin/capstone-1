import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/vinyl/vinylCard.css'

function VinylCard(props){
    const [inCart, setInCart] = useState(false)
    
    const cartAddHandler = () => { 
        setInCart(!inCart)
            props.setCart(items => ([
                ...items, {
                   id: props.vinyl.id,
                   product_name: props.vinyl.product_name,
                   description: props.vinyl.product_description,
                   price: props.vinyl.price,
                   image: props.vinyl.product_image,
                   category: props.vinyl.category,
                   serialNumber: props.vinyl.serial_number,
                   qty: props.vinyl.quantity,
                   quantity: 1
                }
            ]))  
            console.log(props.cart)
    }


    return(
        <section className='vinyl-card-container'>
            <Link to={`viewCard/${props.vinyl.id}`}>
                <img src={props.vinyl.product_image}/>
            </Link>
            <div className='vinyl-info'>
                <p className='band-info'>{props.vinyl.product_name}</p>
                <p className='manufacturer'>{props.vinyl.product_description} </p> 
                <div className='vinyl-price-button'> 
                    <h4>Price: ${props.vinyl.price}</h4> 
                    <p className={inCart === true ? 'isTrue' : 'isFalse'} onClick={() => {cartAddHandler()}}>        
                      <i class="fas fa-shopping-cart cart-icon"></i>
                    </p>
                </div>                      
            </div>
        </section>
    )
}

export default VinylCard;