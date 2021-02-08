import React from 'react'
import InventoryCard from './inventoryCard'
import '../../styles/inventory/inventoryCards.css'


function InventoryCards(props){
    return(
        <div>
            {props.inventoryData.map((item, index) => (
               <InventoryCard data={item} key={index}/> 
            ))}
        </div>
    )
}

export default InventoryCards