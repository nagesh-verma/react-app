import React, { Component } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";

import "bootstrap/dist/css/bootstrap.css";

import "./FormStyle.css";

import logo from '../../assets/logo.png'


class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="align-middle">
          {/* <div className="logo">
            <img className = "lolwa" src={logo} alt="logo" />
          </div> */}
          <div className="signin d-flex justify-content-center align-items-center">
            <form className="form">
              <h1>Sign-In</h1>
              <div class="form-group my-3">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group my-3">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group form-check my-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  <div>
                    I agree to QwikStore's <a href="#">Conditions of Use</a>
                  </div>
                  <div>
                    and <a href="#">Privacy</a> Notice
                  </div>
                </label>
              </div>
              <button type="submit" class="btn btn-secondary btn-block">
                Sign-In
              </button>
              <div className="or my-3">OR</div>
              <GoogleLoginButton onClick={() => alert("Hello")} />
            </form>
          </div>
          <div className = "d-flex justify-content-center align-items-center my-3">
            <p>New to QwikStore?</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" class="btn btn-secondary">
              Create your QwikStore account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
