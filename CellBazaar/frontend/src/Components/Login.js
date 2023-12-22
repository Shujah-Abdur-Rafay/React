import React, { useState } from 'react';
import login from "./Login.css";
import { Link } from 'react-router-dom';
import Menubar from './Navbr';
import { sendMessageViaAxios } from '../Services/api';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = async () => {
       sendMessageViaAxios(username,password)
    };
  
    return (
      <div className="wrapper bg-white " style={{ marginTop: "7rem" }}>
        <Menubar />
        <div className="h2 text-center">Cell Bazaar</div>
        <div className="h4 text-muted text-center pt-2">Enter your login details</div>
        <form className="pt-3">
          <div className="form-group py-2">
            <div className="input-field">
              <span className="far fa-user p-2"></span>
              <input
                type="text"
                placeholder="Username or Email Address"
                required
                className=""
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <div className="form-group py-1 pb-2">
            <div className="input-field">
              <span className="fas fa-lock p-2"></span>
              <input
                type="password"
                placeholder="Enter your Password"
                required
                className=""
                onChange={handlePasswordChange}
              />
              <button className="btn bg-white text-muted">
                <span className="far fa-eye-slash"></span>
              </button>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <div className="remember">
              <label className="option text-muted"> Remember me
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="ml-auto">
              <a href="#" id="forgot">Forgot Password?</a>
            </div>
          </div>
          <button className="btn btn-block text-center my-3" onClick={handleLogin}>
            Log in
          </button>

          {/* OAUTH */}
                
          <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(credentialResponse);
                 }}
                onError={() => {
                console.log('Login Failed');
                }}
                />

          <div className="text-center pt-3 text-muted">Not a member? <Link to="../signup"> <p >Sign Up</p></Link></div>
        </form>
      </div>
    );
  }
  