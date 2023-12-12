import React from "react";
import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RegistrationForm from "./Components/RegistrationForm";
import "./App.css";
import OrderedList from "./Components/OrderedList";
let App = () => {
    return (
        <Router>
            <div className="header">
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Navbar</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/orderedlist">Ordered List</Link></li>
                        <li><Link to="/register" style={{ fontSize: '18px', marginTop: '5px' }}>Register here</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Navbar/>}></Route>
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/orderedlist" element={<OrderedList/>}></Route>

                    <Route path="/register" element={<RegistrationForm/>}></Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
