import React from 'react'
import '../../styles/vinyl/vinylCard.css'

function VinylCard(props){
    
    const cartAddHandler = () => {
        props.setCart(items => ([
             ...items, {
                id: props.vinyl.id,
                product_name: props.vinyl.product_name,
                description: props.vinyl.product_description,
                price: props.vinyl.price
               }
             ]))     
    }

    return(
        <section className='vinyl-card-container'>
            <img src={props.vinyl.product_image}/>
            <div className='vinyl-info'>
                <p className='band-info'>{props.vinyl.product_name}</p>
                <p className='manufacturer'>{props.vinyl.product_description} </p> 
                <div> 
                    <h4>Price: ${props.vinyl.price}</h4> 
                    <p onClick={() => {cartAddHandler()}}>+</p>
                </div>                      
            </div>
        </section>
    )
}

export default VinylCard;