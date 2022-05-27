import React from 'react'
import {NavLink} from "react-router-dom";
import  './Header.css'


function Header() {
    return (
  /*      <div className="header">
            <NavLink to={'/pre-junior'}>PreJunior</NavLink>
            <NavLink to={'/junior'}>Junior</NavLink>
            <NavLink to={'/junior-Plus'}>JuniorPlus</NavLink>
        </div>*/

        <div className="header">
            <input type="checkbox" id="h" className='hidMT'/>
            <div className="hidM">
                <NavLink to={'/pre-junior'}>PreJunior</NavLink>
                <NavLink to={'/junior'}>Junior</NavLink>
                <NavLink to={'/junior-Plus'}>JuniorPlus</NavLink>
            </div>
            <label className="btn" htmlFor="h"/>
        </div>
    )
}

export default Header
