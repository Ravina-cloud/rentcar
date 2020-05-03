import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ()=>{
    return(
        <nav className="nav-wrapper">
            <div className ="container">
                <Link to="/" className="brand-logo">CaRenTAL</Link>
                
                    <li><Link to="/">GO Rent</Link></li>
                    <li><Link to="/cars">Car</Link></li>
                    <li><Link to="/locations">Check locations</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <button type="submit">Sign in</button>
                    <button type="submit">Login in</button>
                </ul>
            </div>
        </nav>
    )
}