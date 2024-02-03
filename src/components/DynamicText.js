import React, { useEffect } from "react";


const DynamicText = () => {
  // Hook pour gerer les effets de bord dans les composants
  useEffect(() => {
    //  endroit dans lequel on va injecter nos lettres
    const target = document.getElementById("text-target");
    //  Tableau des mots
    let array = ["simple", "clear", "smart", "strong"];
    //  pour savoir sur quel mot nous sommes
    let wordIndex = 0;
    // pour savoir sur quelle lettre nous sommes
    let letterIndex = 0;

    // fonction pour injecter des lettres une par une
    const createLetter = () => {
      //  creer un span
      const letter = document.createElement("span");
      //  ce span appartient a letter
      target.appendChild(letter);

      //  ce span s'apelle letter + ajout de la classe letter
      letter.classList.add("letter");
      //  style avec une opacity de 0
      letter.style.opacity = "0";
      //  animation des lettres 
      letter.style.animation = "anim 5s ease forwards";
      // notre span va contenir le tableau array et ses index
      letter.textContent = array[1];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };
    //  fonction recursive
    const loop = () => {
      setTimeout(() => {
        //  passer au mot suivant 
        if (letterIndex > array[wordIndex.l]) {

        }
        // jouer la fonction
        createLetter();
        letterIndex++;
        loop();
      }, 80);
    }
    loop()
  }, []);

  return (
    <span className="dynamic-text">
      <span>Hello</span>
      <span id="text-target"></span>
    </span>
  );
}

export default DynamicText;
