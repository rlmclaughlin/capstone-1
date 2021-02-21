import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/inventory/inventoryCard.css'

function inventoryCard(props){
    
    return(
        <section className='inventory-card-container'>
            <Link style={{textDecoration: 'none', color: 'black'}} to={`viewCard/${props.inventory.id}`}>
                <div className='inventory-card-image' style={{backgroundImage: `url(${props.inventory.product_image})`}}>
                    <h4>${props.inventory.price}</h4>  
                </div>                
            </Link>
        </section>
    )
}

export default inventoryCard