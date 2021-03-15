import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Loader({divClass,role,spanClass}) {
    return (
        <div className={divClass} role={role}>
            <span className={spanClass}>Loading...</span>
        </div>
    )
}

export default Loader
