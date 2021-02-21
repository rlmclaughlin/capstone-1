import React from 'react'
import InventoryCard from './inventoryCard'
import InventoryAllCards from './inventoryAllCards'
import '../../styles/inventory/inventoryCards.css'


function InventoryCards(props){
    let count = 0;
    
    const limitCards = (component) => {
        count += 1
        return component
    }

    return(
        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>The Lollipop Shoppe</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <section className='banner-menu'>
                <div className=' card card1'>
                    <h3>Vinyl</h3>
                </div>
                <div className='card card3'>
                    <h3>DVD/BluRay</h3>
                </div>
                <div className='card card2'>
                    <h3>Posters</h3> 
                </div> 
            </section>
            <section className='header header-2'>
                <hr className='horizontal-rule-1'/>
                <h2>Whats New on Vinyl</h2>
                <hr className='horizontal-rule-2'/>
            </section>
            <section id='inventory-cards'>
                {props.inventory.map((item, index) => 
                   item.category == 'vinyl' && count < 5 ? limitCards(<InventoryCard key={index} inventory={item}/>) : ''
                )}
            </section>
            <section className='header header-2'>
                <hr className='horizontal-rule-1'/>
                <h2>Browse Our Collection</h2>
                <hr className='horizontal-rule-2'/>
            </section>           
            <section className='vinyl-cards'>
                {
                    props.inventory.map((item, index) => (
                        index > 8 && index < 16 ?
                        <InventoryAllCards setCart={props.setCart} 
                                           key={index} 
                                           cartAddHandler={props.cartAddHandler} 
                                           card={item} />
                   : '' )) 
                }
            </section>
        </section>
    )
}

export default InventoryCards