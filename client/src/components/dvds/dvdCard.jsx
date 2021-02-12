import React, {useState} from 'react' 
import '../../styles/vinyl/vinylCard.css'
import '../../styles/dvd/dvdCard.css'



function DvdCard(props){

    const [inCart, setInCart] = useState(false)

    const cartHandler = () => {
        setInCart(!inCart)
        props.cartAddHandler(props.dvd.id, props.dvd.product_name, props.dvd.product_description, props.dvd.price, props.dvd.product_image)
    }

    return(
        <section className='vinyl-card-container'>
            <img className='card-image' src={props.dvd.product_image}/>
            <div className='vinyl-info'>
                <p className='band-info'>{props.dvd.product_name}</p>
                <p className='manufacturer'>{props.dvd.product_description} </p> 
                <div> 
                    <h4>Price: ${props.dvd.price} </h4> 
                    <p className={inCart === true ? 'isTrue' : 'isFalse'} onClick={() => {cartHandler()}}>+</p>
                </div>
            </div>
        </section>
    )
}

export default DvdCard