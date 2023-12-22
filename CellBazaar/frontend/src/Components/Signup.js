import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from './Navbr';
import { senduserViaAxios } from '../Services/api';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await senduserViaAxios({
                username,
                password,
                phoneNumber,
            });

            // Save the token to local storage or state
            const token = response.data.token;
            console.log('JWT Token:', token);

            // Redirect or perform other actions after successful signup
        } catch (error) {
            console.error('Signup Error:', error.response.data.error);
        }
    };

<GoogleOAuthProvider clientId="490610580186-vbgar053492d3lhddqdob2nd21phd4o1.apps.googleusercontent.com">
    return (
        <div className="wrapper bg-white " style={{ marginTop: '6rem' }}>
            {/* Navigation bar */}
            <Menubar />
            {/* Heading */}
            <div className="h2 text-center">Cell Bazaar</div>
            {/* Subheading */}
            <div className="h4 text-muted text-center pt-2">Enter your Signup details</div>
            {/* Form */}
            <form className="pt-3">
                {/* Username or Email Address input */}
                <div className="form-group py-2">
                    <div className="input-field">
                        <span className="far fa-user p-2"></span>
                        <input
                            type="text"
                            placeholder="Username or Email Address"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className=""
                        />
                    </div>
                </div>
                {/* Password input */}
                <div className="form-group py-1 pb-2">
                    <div className="input-field">
                        <span className="fas fa-lock p-2"></span>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className=""
                        />
                        <button className="btn bg-white text-muted">
                            <span className="far fa-eye-slash"></span>
                        </button>
                    </div>
                </div>
                {/* Phone Number input */}
                <div className="form-group py-2">
                    <div className="input-field">
                        <span className="far fa-user p-2"></span>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className=""
                        />
                    </div>
                </div>
                {/* Remember me and Forgot Password links */}
                <div className="d-flex align-items-start">
                    <div className="remember">
                        <label className="option text-muted">
                            Remember me
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="ml-auto">
                        <a href="#" id="forgot">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                {/* Sign Up button */}
                <button className="btn btn-block text-center my-3" onClick={handleSignUp}>
                    Sign Up
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
               



                {/* Login link */}
                <div className="text-center pt-3 text-muted">
                    Already a member?<Link to="../Login"> <p >Login</p></Link>
                </div>
            </form>
        </div>
    );
    </GoogleOAuthProvider>
}