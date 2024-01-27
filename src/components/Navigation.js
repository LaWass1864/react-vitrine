import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    {/* Quand on est sur la page d'accueil on change le style et on lui passe la class .nav-active et tout est en hover */}
                    <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                        <li> accueil</li>
                    </NavLink>

                    <li className='nav-portfolio'> 
                    portfolio 
                    <ul className="nav-projects">
                    <NavLink to='/projet-1' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                        <li> Projet 1</li>
                    </NavLink>
                    <NavLink to='/projet-2' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                        <li> Projet 2</li>
                    </NavLink>
                    <NavLink to='/projet-3' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                        <li> Projet 3</li>
                    </NavLink>
                    <NavLink to='/projet-4' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                        <li> Projet 4</li>
                    </NavLink>
                   
                    </ul>
                    </li>

                    <NavLink to='/contact' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                        <li> contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;