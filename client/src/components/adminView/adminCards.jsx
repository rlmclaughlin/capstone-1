import React from 'react'
import {Link} from 'react-router-dom'

import '../../styles/adminView/adminView.css'

function AdminCards(props){
    console.log(props.product)

    const deleteHandler = () => {
        props.setInventory(props.inventory.filter(item => item.id !== props.product.id))
    }

    return(
        <table class="inventory-table"> 
            <thead> 
                <tr> 
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Band</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Manufacturer</th>
                    <th>Serial #</th>
                    <th>Category</th>
                    <th>delete</th>
                </tr> 
            </thead> 
            <tbody> 
            <tr> 
                <td>{props.product.id}</td>
                <td ><Link to={`viewCard/${props.product.id}`}><img style={{maxHeight: '75px', maxWidth: '75px'}}src={props.product.product_image}/></Link></td>
                <td>{props.product.product_name}</td>
                <td>{props.product.product_description}</td>
                <td>{props.product.price}</td>
                <td>{props.product.quantity}</td>
                <td>{props.product.manufacturer}</td>
                <td>{props.product.serial_number}</td>
                <td>{props.product.category}</td>
                <td><button onClick={() => {deleteHandler()}}>Delete</button></td>
            </tr> 
        </tbody> 
    </table> 
    )
}

export default AdminCards

