import React from 'react'

function FriendCard({ friend, show, toggle }) {
    return (
      <div className="product-card">
       <h2 className="product-name">{`${friend.firstName} ${friend.lastName}`}</h2>
       <div className = 'body of card'>
            {toggle?<img src= {friend.profileImage} alt = {`Profile picture of ${friend.firstName}`} /> : 'No Picture Available!'}
            {toggle?<div className="friend-name">{friend.birthday}</div> : ''}
           
       </div>
      </div> 
    );
  }
  
  export default FriendCard;