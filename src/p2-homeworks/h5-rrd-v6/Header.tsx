import React from 'react'
import {NavLink} from "react-router-dom";
import  './Header.css'


function Header() {
    return (
        <div className="body">
            <div className="homeworks">React homeworks</div>
            <div className="header">
                <input type="checkbox" id="h" className='hidMT'/>
                <div className="hidM">
                    <NavLink to={'/pre-junior'}>PreJunior</NavLink>
                    <NavLink to={'/junior'}>Junior</NavLink>
                    <NavLink to={'/junior-Plus'}>JuniorPlus</NavLink>
                </div>
                <label className="btn" htmlFor="h"/>
            </div>
        </div>

    )
}

export default Header
