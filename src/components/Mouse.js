import React, { useEffect } from 'react';

const Mouse = () => {
    // le useEffect c'est pour les composants
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        //  Le rond suit la souris
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = e.y + "px";
            cursor.style.left = e.x + "px";
         
        })
        document.querySelectorAll('.hover').forEach((link) => {
            //  Quand link est survolé tu es mouseoveret je t'ajoute la classe hovered
            link.addEventListener('mouseover', () => {
                cursor.classList.add("hovered");
                
            });

            link.addEventListener('mouseleave', () => {
                cursor.style.transistion = ".3s ease-out";
                cursor.classList.remove('hovered');
            });
        })

    }, []);


    return (
        <div>
            <span className="cursor"></span>
        </div>
    );
};

export default Mouse;