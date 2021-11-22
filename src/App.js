import * as React from 'react';
import './App.css';
import { Routes, Route,  } from "react-router-dom";
import Home from './Home';
import Login from './Login';


function App() {
  return (
      <div className="app">
        <Routes>
          {/* <Route path="/checkout">
            <h1>checkout</h1>
          </Route> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    
  );
}

// We Neet react-router

// localhost.com

// localhost.com/checkout

// localhost.com/login

export default App;
