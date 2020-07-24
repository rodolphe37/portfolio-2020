import React from 'react';
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';

import '../assets/styles/contactForm/main.css';
import '../assets/styles/contactForm/util.css'

const ContactForm = () => {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    emailjs.send('gmail', 'portfolio', data, 'user_xKWRvlBTc0uT65Tf9D7wJ')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text) && window.location.reload();

      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <React.Fragment>
      <div className="container-contact2" id="contact">
        <div className="wrap-contact2">
          <form className="contact2-form validate-form" onSubmit={handleSubmit(onSubmit)}>
            <span className="contact2-form-title">
              Contactez moi !!
        </span>

            <div className="wrap-input2 validate-input" data-validate="Ce champ est requis">
              <input className="input2" type="text" name="nom" id="nom" ref={register} required />
              <span className="focus-input2" data-placeholder="VOTRE NOM ET PRENOM"></span>
            </div>

            <div className="wrap-input2 validate-input" data-validate="Une Adresse Email valide est requise: ex@abc.xyz">
              <input className="input2" type="text" name="email" id="email" ref={register} required />
              <span className="focus-input2" data-placeholder="VOTRE EMAIL"></span>
            </div>
            <div className="wrap-input2 validate-input" data-validate="Un numéro de téléphone valide est requis">
              <input className="input2" type="number" name="phone" id="phone" ref={register} required />
              <span className="focus-input2" data-placeholder="VOTRE NUMERO DE TÉLÉPHONE"></span>
            </div>

            <div className="wrap-input2 validate-input" data-validate="Message is required">
              <textarea className="input2" name="message" id="message" ref={register} required></textarea>
              <span className="focus-input2" data-placeholder="VOTRE MESSAGE"></span>
            </div>

            <div className="container-contact2-form-btn">
              <div className="wrap-contact2-form-btn">
                <div className="contact2-form-bgbtn"></div>
                <button className="contact2-form-btn">
                  ENVOYEZ VOTRE MESSAGE
            </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactForm;
