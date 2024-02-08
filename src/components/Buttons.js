import React from 'react';
import { NavLink } from 'react-router-dom';
//  la premiere page n'a pas de bouton a gauche et la derniere page n'a pas de boutton a droite
// Dans le contexte de React, props est un objet qui contient toutes les propriétés passées au composant. Ces propriétés peuvent être utilisées à l'intérieur du composant pour configurer son comportement ou son apparence.
const Buttons = (props) => {

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