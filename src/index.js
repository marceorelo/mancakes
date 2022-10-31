import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAabdStYMfX3h6LRMlZp77bRXEa5i17wA4",
  authDomain: "manantialescake.firebaseapp.com",
  projectId: "manantialescake",
  storageBucket: "manantialescake.appspot.com",
  messagingSenderId: "1070860178250",
  appId: "1:1070860178250:web:521ce8cfb1e402facf27b3",
  measurementId: "G-73KQ528JB5"
};


// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
