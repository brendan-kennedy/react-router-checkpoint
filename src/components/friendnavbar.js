import React from 'react'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'


const FriendNavBar = ({friends}) => { 

  
  return ( 

      <nav> 
         <div>
           {friends.map((friend)=> (
           <div className = 'friend-name' 
           key = {friend.id}>
                  <NavLink to={`/profiles/${friend.id}`} activeClassName="App-link" exact> {`${friend.firstName} ${friend.lastName}`} </NavLink> 
            </div> 
            ))} 
         </div>  
      </nav> 
  )

}
  
  export default FriendNavBar;