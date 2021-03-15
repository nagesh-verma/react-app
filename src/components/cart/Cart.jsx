import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteCount,addCount} from '../../actions/cartActions'


class Cart extends Component {

    //to remove the item completely
   
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addCount(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.deleteCount(id);
    }
    
    render() {
        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                   
                    <li className="" key={item.id}>
                                <div className=""> 
                                    <img src={item.imageURL} alt={item.img} className=""/>
                                </div>
                            
                                <div className="">
                                    <span className="">{item.name}</span>
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price} Rs</b></p> 
                                    <p>
                                        <b>Quantity: {item.quantity}</b> 
                                    </p>
                                    <div className="add-remove">
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                    </div>
                                    <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                </div>
                                
                            </li>
                     
                )
            })
        ):

         (
            <p>No items are added to cart</p>
         )
   return(
        <div className="container">
            <div className="cart">
                <h5>You have ordered: {this.props.addedItems.length} items</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>  
            <Receipt />   
        </div>
        
    }
}

export default Cart;