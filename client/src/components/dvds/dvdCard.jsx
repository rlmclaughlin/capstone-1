import React from 'react' 
import '../../styles/vinyl/vinylCard.css'
import '../../styles/dvd/dvdCard.css'



function DvdCard(props){

    const cartAddHandler = () => {
        props.setCart(items => ([
             ...items, {
                id: props.dvd.id,
                product_name: props.dvd.product_name,
                description: props.dvd.product_description,
                price: props.dvd.price
               }
             ]))     
    }

    return(
        <section className='vinyl-card-container'>
            <img className='card-image' src={props.dvd.product_image}/>
            <div className='vinyl-info'>
                <p className='band-info'>{props.dvd.product_name}</p>
                <p className='manufacturer'>{props.dvd.product_description} </p> 
                <div> 
                    <h4>Price: ${props.dvd.price} </h4> 
                    <p onClick={() => {cartAddHandler()}}>+</p>
                </div>
            </div>
        </section>
    )
}

export default DvdCard