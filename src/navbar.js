import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
function navbar(){
    return(
        <div className="nav">
            <Link className="navdesign" to="/">Home</Link>
            <Link className="navdesign" to="/Dashboard">Dashboard</Link>
            <Link className="navdesign" to="/about">About</Link>
            
            <Link className="navdesign" to="/contact">Contact</Link>

        </div>
    )
}
export default navbar