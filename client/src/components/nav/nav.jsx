import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/nav/nav.css'


function Nav(){
    return(
        <nav>
            <section>
                <h2>Vinyl Navigator</h2>
            </section>
            <ul>
                <NavLink to='inventory'><li>What's New</li></NavLink>
                <NavLink to='vinyl'><li>Vinyl</li></NavLink>
                <li>DVD/BluRay</li>
                <li>login</li>
                <li>Shopping Cart</li>
            </ul>
        </nav>
    )
}

export default Nav