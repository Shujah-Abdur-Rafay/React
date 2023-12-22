import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<GoogleOAuthProvider clientId="490610580186-vbgar053492d3lhddqdob2nd21phd4o1.apps.googleusercontent.com">
    
 <BrowserRouter>
  <App />
 </BrowserRouter>


 </GoogleOAuthProvider>

);


