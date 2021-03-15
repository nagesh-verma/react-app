import React from 'react'
import logo from '../../assets/logo.png'
import cartImage from '../../assets/cart.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'



import {fetchProducts} from '../../actions/cartActions';
import {connect} from 'react-redux';

function Header({cart,quantity}) {
    return (
        <nav className="navbar navbar-expand-md navbar-light mb-3 sticky-top" style = {{boxShadow:"0 10px 6px -6px #777",backgroundColor:"white"}}>
        <Link to="/" className="navbar-brand" >
          <img src={logo} alt="QwikStore" width = "135px" height = "80px"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" href="google.com">
                Products
              </Link>
            </li>
          </ul>
          <div className="cart-acc">
            <div className="account">
              <Link to = "/signin" >
                <span className="py-2">Sign In</span>
              </Link>
              <Link to="/register">
                <span className="py-2 px-2">Register</span>
              </Link>
            </div>
            <div className="cart d-flex justify-content-between align-items-center">
              <div className="cart-logo px-1">
                <img src={cartImage} alt="Cart" height="50px" width="50px" />
              </div>
              <div className="cart-items px-1">
                <p>{`${quantity} items`}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

const stateAsProps = (reducer) => {
  return  {
      cart: reducer.cartUpdateReducer.cart,
      quantity:reducer.cartUpdateReducer.quantity
  }
}
const actionAsProps =  {
  getCart: fetchProducts 
}; 
export default connect(stateAsProps, actionAsProps)(Header);
