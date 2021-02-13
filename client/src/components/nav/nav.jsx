import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/nav/nav.css'


//<NavLink to='inventory'><li>What's New</li></NavLink>
//<NavLink to='/vinyl'><li>Vinyl</li></NavLink>
//<NavLink to='dvd'><li>DVD/BluRay</li></NavLink>


function Nav(props){
    const [search, setSearch] = useState('')
    
    const searchHandler = (e) => {
        e.preventDefault()
        let queryFilter = props.inventory.filter(item => 
            item.product_name.toLowerCase() === search.toLowerCase() 
                || item.product_description.toLowerCase() === search.toLowerCase())
        props.setMatch(queryFilter)
        setSearch('')
       }

       console.log(props.match)
      
    return(
        <nav>
            <section>
                <i class="fas fa-record-vinyl vinyl-icon"></i>
                <h2>Vinyl Navigator</h2>
            </section>

            <ul>                

            <li>

            <div className='search-container'>
                <form onSubmit={searchHandler} autocomplete="off">
                   <NavLink to='searchResults'><input type='text' name='searchBar' value={search} onChange={(e) => {setSearch(e.target.value)}}/></NavLink> 
                   <button type='submit'><i class="fas fa-search"></i></button>
                </form>
            </div>

            </li>
                <NavLink to='/cart'>
                    <li>
                        <i class="fas fa-shopping-cart cart-icon"></i>
                    </li>      
                </NavLink>
            </ul>

            
        </nav>
        
    )
}

export default Nav