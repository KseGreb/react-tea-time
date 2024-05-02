import React, { useState } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
//   Routes,
//   Route, 
  Link
} from "react-router-dom";

export function Navbar(){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <div>
            <nav >
                <Link to = "/">Home</Link>
                
                    <Link to = "/history">History</Link>
                    <Link to = "/types">Types</Link>
                    <Link to = "/benefits">Benefits</Link>
                    <Link to = "/onlineStore">Online Store</Link>
                
            </nav>
        </div>
    )
}