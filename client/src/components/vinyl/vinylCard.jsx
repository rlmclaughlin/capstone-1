import React from 'react'
import '../../styles/vinyl/vinylCard.css'

function VinylCard(props){
    
    return(
        <section className='vinyl-card-container'>
            <img src={props.vinyl.product_image}/>
            <div className='vinyl-info'>
                <p className='band-info'>{props.vinyl.product_name}</p>
                <p className='manufacturer'>{props.vinyl.product_description} </p> 
                <div> 
                    <h4>Price: ${props.vinyl.price} </h4> 
                </div>
               
                      
                
            </div>
        </section>
    )
}

export default VinylCard;