import React from 'react'
import '../../styles/vinyl/vinylCard.css'
import {Link} from 'react-router-dom'

function InventoryAllCards(props){

    
    return(
        <section className='vinyl-card-container'>
            <Link style={{textDecoration: 'none', color: 'black'}} to={`viewCard/${props.card.id}`}>
                <img src={props.card.product_image}/>
                <div className='vinyl-info'>
                    <p className='band-info'>{props.card.product_name}</p>
                    <p className='manufacturer'>{props.card.product_description} </p> 
                    <div> 
                        <h4>Price: ${props.card.price} </h4> 
                    </div>
                </div>           
            </Link>

        </section>
    )
}

export default InventoryAllCards;