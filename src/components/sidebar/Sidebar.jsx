import React, { useState } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <FontAwesomeIcon icon={faBars} size="2x" className={`side-icon ${openMenu ? 'open' : ''}`} onClick={() => { setOpenMenu(!openMenu) }}/>
            <div className={`sidebar ${openMenu ? 'open' : ''}`}>
                <ul className="menu-list">
                    <li onClick={() => setOpenMenu(false)}>
                        <NavLink to="/signup">S'inscrire</NavLink> 
                    </li>
                    <li onClick={() => setOpenMenu(false)}>
                        <NavLink to="/signin">Se connecter</NavLink> 
                    </li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
