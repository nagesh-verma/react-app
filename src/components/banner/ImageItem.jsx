import React from 'react'

function ImageItem({className,url,alt}) {
    return (
        <div className={className}>
            <img
                  src={"http://localhost:4000" + url}
                  className="d-block w-100"
                  alt={alt}
                  style = {{padding:"10px"}}
                />
        </div>
    )
}

export default ImageItem
