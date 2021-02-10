import React from 'react'
import '../../styles/vinyl/vinylCard.css'

function InventoryAllCards(props){

    const cartAddHandler = () => {
        props.setCart(items => ([
            ...items, {
                id: props.card.id,
                product_name: props.card.product_name,
                description: props.card.product_description,
                price: props.card.price
            }
        ]))     
    }
    
    return(
        <section className='vinyl-card-container'>
            <img src={props.card.product_image}/>
            <div className='vinyl-info'>
                <p className='band-info'>{props.card.product_name}</p>
                <p className='manufacturer'>{props.card.product_description} </p> 
                <div> 
                    <h4>Price: ${props.card.price} </h4> 
                </div>
            </div>
            <p onClick={() => {cartAddHandler()}}>+</p>
        </section>
    )
}

export default InventoryAllCards;