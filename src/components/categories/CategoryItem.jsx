import React from 'react'
import Content from './Content'
import Image from './Image'
import 'bootstrap/dist/css/bootstrap.min.css'

function CategoryItem({data}) {
    
    if(data.order %2 === 0){
        return(
            <article className="d-flex justify-content-around align-items-center" style = {{margin:"20px",padding:"5px",boxShadow:"0 10px 6px -6px #777"}}>
                <Image loc = {data.imageUrl} alt = {data.name}/>
                <Content name = {data.name} desc = {data.description}/>
            </article>
        )
    }else{
        return(
            <article className="d-flex justify-content-around align-items-center" style = {{margin:"20px",padding:"5px", boxShadow:"0 10px 6px -6px #777"}}>
                
                <Content name = {data.name} desc = {data.description}/>
                <Image loc = {data.imageUrl} alt = {data.name}/>
            </article>
        )
    }
    
    
   
}

export default CategoryItem

