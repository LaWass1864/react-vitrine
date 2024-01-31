import React from 'react';
//  Icon reseaux sociaux
const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");
        
        // Pour chaque icons de reseau sociaux
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 20}px)`;
            });

            link.addEventListener("mouseleave", () => {
                link.style.transform = "";
            })
        });
    };


    return (
        <div className="social-network">

            <ul className='content'>
                <a href="https://www.facebook.com" 
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