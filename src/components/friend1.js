import React from 'react'
const Friend1 = (props) => {

    return ( 
        <div> 
            <h4>{`${props.firstName} ${props.lastName}`}</h4>
           <img src = {props.profileImage} alt = 'Profile Picture' />

        </div>  
    )

}

export default Friend1