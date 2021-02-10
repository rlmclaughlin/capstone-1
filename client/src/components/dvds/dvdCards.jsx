import React from 'react' 
import DvdCard from './dvdCard'
import '../../styles/vinyl/vinylCards.css'


function DvdCards(props){

    let albumList = props.inventory.filter(item => item.category == 'dvd')
    return(
        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Lollipop Shoppe DVD's</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <section className='vinyl-cards'>
                {
                    albumList.map((item, index) => (
                        <DvdCard setCart={props.setCart} key={index} dvd={item} />
                    ))
                }
            </section>
        </section>
    )
}


export default DvdCards