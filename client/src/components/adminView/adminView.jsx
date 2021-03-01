import React from 'react'
import AdminCards from './adminCards'

function AdminView(props){

    return(
        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Administrator View</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            {
                props.inventory.map((item, index) => (
                    <AdminCards product={item} key={index} inventory={props.inventory} setInventory={props.setInventory}/>
                ))
            }
        </section>
    )
}

export default AdminView