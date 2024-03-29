import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".formMessage")

        emailjs.sendForm(
            // identifiant du service
            "service_57t1xy2",
            "template_rspn9qe",
            form.current,
            // données cachées
            process.env.REACT_APP_ID
        )
            // cacher l'User Id, on va faire une variable d'environnement (connu par nous seulement)
            .then((result) => {
                //  Si ca se passe bien on mets OK et pour le remettre a zero
             
                form.current.reset();
                formMess.innerHTML = "<p className='success'> Message envoyé ! </p>";
                //  Le message disparait au bout de 2 secondes et 5 millieme
                setTimeout(() => {
                    formMess.innerHTML = "";
                }, 2500)
            }, (error) => {
    
                formMess.innerHTML = "<p className='error'> Une erreur s'est produite, veuillez réessayer </p>";

                setTimeout(() => {
                    formMess.innerHTML = "";
                }, 2500)
            });
    };

 
    return (
        <div className="form-container">
          <h2>contactez-nous</h2>
          <form ref={form} onSubmit={sendEmail} className="form-content">
            <label>nom</label>
            <input type="text" name="name" required autoComplete="off" id="name" />
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              id="email"
            />
            <label>Message</label>
            <textarea name="message" id="mess" />
            <input type="submit" value="Envoyer" className="hover button" />
          </form>
          <div className="formMessage"></div>
        </div>
      );
};


export default ContactForm;