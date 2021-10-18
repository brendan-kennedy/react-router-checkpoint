import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => { 

    return ( 

        <nav> 
           <div>
              <ul>
                <li>
                    <NavLink to="/" activeClassName="App-link" exact>Home / My Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus" activeClassName="App-link" exact>About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/profiles" activeClassName="App-link" exact>Profiles</NavLink>
                </li> 
              </ul> 
           </div>  
        </nav> 
    )

}

export default NavBar 