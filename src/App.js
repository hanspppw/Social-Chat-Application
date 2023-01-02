import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import React, { useState } from 'react';
import Home from './Pages/HomeSignIn'
import NavBar from './Components/NavBar/Navigation';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Pages/SignUp';


export default function App() {
    return (
        <div className="whole">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
         </div>    
    );
}

