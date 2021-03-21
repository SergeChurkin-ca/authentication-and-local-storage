import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        </div>
    )
}
