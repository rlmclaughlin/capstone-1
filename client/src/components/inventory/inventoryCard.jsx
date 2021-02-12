import React from 'react'
import '../../styles/inventory/inventoryCard.css'

function inventoryCard(props){

    return(
        <section className='inventory-card-container'>
            <div className='inventory-card-image' style={{backgroundImage: `url(${props.inventory.product_image})`}}>
                <h4>${props.inventory.price}</h4>  
            </div>             
        </section>
    )
}

export default inventoryCard