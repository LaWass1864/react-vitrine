import React from 'react';
//  Icon reseaux sociaux
const SocialNetwork = () => {
//  animation lors du survol des icons avec la fonction anim
    const anim = () => {
        // selectionner avec le css les 3 icones avec la class .social-network a 
        const icons = document.querySelectorAll(".social-network a");
        
        // Pour chaque icons je vais leur rajouter un ecouteur d'evenement. Quand la souris est hover on ajoute tu transforme sur ton axe des x et axe des Y.
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 20}px)`;
            });
// on remet les icons a leur place aprés les avoir survoler
            link.addEventListener("mouseleave", () => {
                link.style.transform = "";
            })
        });
    };


    return (
        // navigation des reseaux sociaux
        <div className="social-network">
{/*  liste des reseaux sociaux */}
            <ul className='content'>
                {/*  ancre pour que nos icones nous  envoie sur une autre page */}
                <a href="https://www.facebook.com" 
                //  ouvrir dans un autre onglet
                target='_blank' 
                rel='noopener noreferrer' 
                className='hover' 
                onMouseOver={anim}>
                    <li>
                        <i className='fab fa-facebook-f' ></i>
                    </li>
                </a>

                <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                    <li>
                        <i className='fab fa-twitter'></i>
                    </li>
                </a>

                <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                    <li>
                        <i className='fab fa-instagram'></i>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;