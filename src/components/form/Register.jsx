import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

import "./FormStyle.css";

import logo from '../../assets/logo.png'

class Register extends Component {
    
    render() {
        return ( 
            <div className="container">
            <div className="align-middle">
              {/* <div className="logo">
                <img className = "lolwa" src={logo} alt="logo" />
              </div> */}
              <div className="signin d-flex justify-content-center align-items-center">
                <form className="form">
                  <h1>Create Account</h1>
                  <div class="form-group my-3">
                    <label for="name">Your name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      
                    />
                  </div>
                  <div class="form-group my-3">
                    <label for="telephone">Mobile number</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="telephone"
                      
                      
                    />
                  </div>
                  <div class="form-group my-3">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      
                    />
                  </div>
                  <div class="form-group my-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="At least 6 characters"
                    />
                  </div>
                  <div class="form-group form-check my-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label " for="exampleCheck1">
                      <div>
                        I agree to QwikStore's <a href="#">Conditions of Use</a>
                      </div>
                      <div>
                        and <a href="#">Privacy</a> Notice
                      </div>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-secondary btn-block">
                    Create Account
                  </button>
                  <div className="already my-3">Already have an account?<a href="#">Sign In</a></div>
                  
                  
                </form>
              </div>
              
              
            </div>
          </div>
            
        );
    }
}

export default Register;