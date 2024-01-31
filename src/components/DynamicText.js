import React, { useEffect } from 'react';

const DynamicText = () => {
    useEffect(() => {
        // Endroit dans lequel on va injecter nos lettres
        const target = document.getElementById("text-target")
        //  tableau des mots
        let array = ["simple", "clear", "smart", "strong"];
        //  Pour savoir sur quel mot on est
        let wordIndex = 0;
        // Savoir sur quelle lettre on est
        let letterIndex = 0;

        //  Cette fonction qui va injecter les lettres une par une et repart
        const createLetter = () => {
            // creation d'un span
            const letter = document.createElement("span");
            //  a qui ce span appartient
            target.appendChild(letter);
            // Style qui lui sera ajouter
            letter.classList.add("letter");
            letter.style.opacity = "0";
            // TranslateZ
            letter.style.animation = "anim 5s ease forwards";
            // Qu'est ce que contient notre span
            letter.textContent = array[wordIndex][letterIndex];
            //Pour pas que les lettres s'accumulent , elles disparaitront au bout de 2 sec
            setTimeout(() => {
                letter.remove()
            }, 2000);
        };
        // fonction (recursive) qui va s'appeller toute seule

        const loop = () => {
            setTimeout(() => {
                // tant que tu n'es pas a la fin du mot du continue aprés le mot strong et relancer aprés la fin du derneir mot
                if (wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop()
                } else if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(loop, 2000)
                }
            }, 80);
        }
        loop()
    }, []);


    return (
        //  Ce sera injecter dans un h2
        <span className="dynamic-text">
            <span> Simply </span>
            {/* c'est là qu'on va injecter l'arriver des lettres*/}
            <span id="text-target"></span>
        </span>
    );
};

export default DynamicText;