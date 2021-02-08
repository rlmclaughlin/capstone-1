import React from 'react'
import '../../styles/inventory/inventoryCard.css'

function inventoryCard(props){
    return(
        <div>
            <h2>{props.data.product_name}</h2>
            <img src={props.data.product_image}/>            
            <p>Qty: {props.data.quantity}</p>
            <p>Price: {props.data.price}</p>

        </div>
    )
}

export default inventoryCard