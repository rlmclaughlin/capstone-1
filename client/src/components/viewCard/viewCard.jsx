import React from 'react'
import '../../styles/viewCard/viewCard.css'

function ViewCard(props){
    const vinyl = props.inventory[props.match.params.id - 1]
    console.log(vinyl)

    const addHandler = (e) => {
        e.preventDefault()
        props.setCart(items => ([
            ...items,{
                id: vinyl.id,
                product_name: vinyl.product_name,
                description: vinyl.product_description,
                price: vinyl.price,
                image: vinyl.product_image,
                category:vinyl.category,
                serialNumber: vinyl.serial_number,
                qty: vinyl.quantity,
                quantity: 1              
            }
        ]))
        
    }

    return(

        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Lollipop Shoppe Vinyl</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <section className='product-information-container'>
                <img src={vinyl.product_image}/>
                <hr style={{height: "100%", margin: "0px"}}/>
                <div className='vinyl-product-info'> 
                    <section >
                        <h2>{vinyl.product_name}</h2>
                        <h3>{vinyl.product_description}</h3>
                        <h3>Selling at: ${vinyl.price}</h3>
                        <h5>Label: {vinyl.manufacturer}</h5>
                        <h6>UPC: {vinyl.serial_number}</h6>
                        <h6>Format: {vinyl.category}</h6>                           
                    </section>
                    <form>
                        <button onClick={addHandler}>add to cart <i class="fas fa-shopping-cart cart-icon"></i></button>
                    </form>
                </div>
            </section> 

        </section>
    )
}

export default ViewCard







