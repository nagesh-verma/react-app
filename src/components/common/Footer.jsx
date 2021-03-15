import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    
    return (
       <footer class = "mt-3">
          
           <nav className="d-flex justify-content-around">
               <a href="/">Conditions Of Use</a>
               <a href="/">Privacy Notice</a>
               <a href="/">Help</a>
           </nav>
           <p className="navbar-text">Copyright © 2011-2021 QwikStore Pvt Ltd </p>
           
       </footer>
    )
}

export default Footer
