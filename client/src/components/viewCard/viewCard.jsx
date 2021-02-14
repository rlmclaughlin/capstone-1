import React from 'react'

function ViewCard(props){
    const vinyl = props.inventory[props.match.params.id - 1]
   
    return(
        <section>
            <img src={vinyl.product_image}/>
            <h2>{vinyl.product_name}</h2>
        </section>
    )
}

export default ViewCard