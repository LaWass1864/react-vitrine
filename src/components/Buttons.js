import React from 'react';
import { NavLink } from 'react-router-dom';
//  la premiere page n'a pas de bouton a gauche et la derniere page n'a pas de boutton a droite
const Buttons = (props) => {
    console.log(props);
    return (
        // le lien du navlik va etre diff selon la page dans laquelle nous sommes
        <div className="scroll-bottom">
            {props.left && (
            <NavLink to={props.left} className="left hover">
                <span>&#10092;</span>
            </NavLink>
            )}
            {props.right && (
            <NavLink to={props.right} className="right hover">
                <span>&#10093;</span>
            </NavLink>
            )}
        </div>
    );
};

export default Buttons;