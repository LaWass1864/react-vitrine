import React, { useEffect } from 'react';
// 'animation de la souris, et lorsque le lien est cliquable le cercle se reduit
const Mouse = () => {

    // avantage du useEffect c'est que ca se met en place qu'une seule fois ensuite ca se rejoue quand on veut.
    useEffect(() => {
        //  on pointe la balise .cursor et on suit la souris
        const cursor = document.querySelector(".cursor");
        // le rond suit la souris
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = e.y + "px";
            cursor.style.left = e.x + "px";
        });
        //  selectionne moi tous les elements avec la classe .hover et je vais appliquer la logique du foreach pour appliquer a chacun de ces elements un effet
        document.querySelectorAll(".hover").forEach((link) => {
            //  quand tu link est survolé tu lui ajoutes la classe .hovered
            link.addEventListener('mouseover', () => {
                cursor.classList.add("hovered")
            })
        });

    }, [])


    return (
        <span className="cursor"></span>
    );
};

export default Mouse;