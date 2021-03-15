import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Content({name,desc}) {
    return (
        <div>
           <h4>{name}</h4>
            <p>{desc}</p>
            <button className = "btn btn-dark btn-sm">{"Explore "+name}</button> 
        </div>
    )
}

export default Content
