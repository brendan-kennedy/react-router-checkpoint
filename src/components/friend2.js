import React from 'react'
import { useParams } from 'react-router'

const Friend1 = ({props}) => {
    const { id} = useParams()
    return ( 
        <div> 
            <h4> Friend 2 - {id}</h4>
            <p> {props.birthday}  </p>
            <img src= {props.profileImage} alt = {`Profile Picture`} />

        </div>  
    )

}

export default Friend1