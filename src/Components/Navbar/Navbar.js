import React from 'react';
import './Navbar.css';
import { Navbar } from 'reactstrap';



const NavBar = () => {

    return (
        <div className="NavBarmain">
            <Navbar>
                <h1 className="initials">RwB</h1>
            </Navbar>
        </div>
    )
}

export default NavBar;