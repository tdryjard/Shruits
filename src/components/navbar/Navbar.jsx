import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="content">
                <div className="logo">Shruits</div>
                <ul className="menu">
                    <li>
                        <NavLink to="/signup">S'inscrire</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/signin">Se connecter</NavLink> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
