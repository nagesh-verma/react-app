import React from 'react'

function Image({loc,alt}) {
    const imgStyle = {
        width:'25%',
        height:'40%'
    }
    return (
        <img src = {"http://localhost:4000"+loc} alt = {alt} style = {imgStyle}/>
        
    )
}

export default Image
