import React, { useEffect } from 'react';

const DynamicText = () => {
    useEffect(() => {
        //  ou on va injecter le mot
        const target = document.getElementById("text-target")
        let array = ["smart", "strong", "sweety", "beauty"]
        //  sur quel mot on est
        let wordIndex = 0;
        //  sur quelle lettre nous sommes
        let letterIndex = 0;

        // creation de fonction pour injecter une lettre
        const createLetter = () => {
            //  on va creer un span
            const letter = document.createElement("span");
            // creation de l'enfant 
            target.appendChild(letter);
            // on lui ajoute la class css .letter
            letter.classList.add("letter");
            // animation des lettres
            letter.style.opacity = "0"
            letter.style.animation = "anim 2.5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 2000);
        }

        // fonction recursive
        const loop = () => {
            setTimeout(() => {
                createLetter();
                letterIndex++;
                loop()
            }, 80);
        }
        loop()
    }, [])

    return (
        <div>
            <span className="dynamic-text">
                Hello
                {/*  on va integrer les mots dans ce span */}
                <span id="text-target"></span>
            </span>

        </div>
    );
};

export default DynamicText;