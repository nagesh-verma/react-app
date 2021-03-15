import React from 'react'
import {connect} from 'react-redux';
import { addProduct } from '../../actions/cartActions';


function ProductItem({data,addProduct}) {
    return (
        <div className = "col sm-6 my-2 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={"http://localhost:4000"+data.imageURL} alt={data.sku}/>
            <div className="card-body">
                <h5 class="card-title">{data.name}</h5>
                <p class="card-text">{data.description}</p>
                <a className="btn btn-dark" onClick = {()=>addProduct({...data,quantity:1})}>{"Buy now @ Rs."+data.price}</a>
             </div>
        </div>
        </div>
        
    )
}




export default connect(null, {addProduct})(ProductItem);
