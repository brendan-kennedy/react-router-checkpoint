import React from 'react'
import { NavLink } from 'react-router-dom'


const FriendNavBar = (props) => { 

  return ( 

      <nav> 
         <div>
            <ul>
              <li>
                  <NavLink to="/profiles/1" activeClassName="App-link" exact>First Friend! </NavLink>
              </li>
              <li>
                  <NavLink to="/profiles/2" activeClassName="App-link" exact>Second Friend!</NavLink>
              </li>
              <li>
                  <NavLink to="/profiles/3" activeClassName="App-link" exact>Third Friend!</NavLink>
              </li> 
            </ul> 
         </div>  
      </nav> 
  )

}
  
  export default FriendNavBar;