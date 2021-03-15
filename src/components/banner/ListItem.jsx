import React from 'react'

function ListItem({target,slideto,className=""}) {
    return (
        <li data-target={target} data-slide-to={slideto} className={className}></li>
    )
}

export default ListItem
