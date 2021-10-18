import React from 'react'
import { useParams } from 'react-router'

const Friend1 = ({props}) => {
    const { id} = useParams()
    return ( 
        <div> 
            <h4> Friend 1 - {id}</h4>
            <p> {props.lastName}  </p>

        </div>  
    )

}

export default Friend1