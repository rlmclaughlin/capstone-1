import React from 'react'
import VinylCard from './vinylCard'
import '../../styles/vinyl/vinylCards.css'


function VinylCards(props){
    let albumList = props.inventory.filter(item => item.category == 'vinyl')
    return(
        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>The Lollipoppe Shoppe</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <section className='vinyl-cards'>
                {
                    albumList.map((item, index) => (
                        <VinylCard key={index} vinyl={item} />
                    ))
                }
            </section>
        </section>
    )
}

export default VinylCards;