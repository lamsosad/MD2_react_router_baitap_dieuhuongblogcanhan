import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
    const styleNav = ({ isActive }) => {
        return {
          color: isActive ? 'orange' : 'black',
          
        }
      }
    return (
        <div>
            <ul className="nav justify-content-end my-3">
                <li className="nav-item">
                    <NavLink className="nav-link" style={styleNav} to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" style={styleNav} to={'/about'} >
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" style={styleNav} to={'/user'} >
                        User
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" style={styleNav} to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}
