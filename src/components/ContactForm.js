import React from 'react';
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../assets/styles/contactForm/main.css';
import '../assets/styles/contactForm/util.css'

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();

  const ReloadForm = () => {
    setTimeout(() => {
      window.location.reload()
    }, 2500)
  }

  const ResetInput = () => {
    setTimeout(() => {
      document.getElementById("contact-form").reset();
    }, 3000)
  }



  const onSubmit = (data) => {
    emailjs.send('gmail', 'portfolio', data, 'user_xKWRvlBTc0uT65Tf9D7wJ')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email envoyé avec succès !!!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        ReloadForm()

      }, function (error) {
        console.log('FAILED...', error);
        toast.error('Erreur, Email non envoyé !!!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        ResetInput()
      });
  }

  return (
    <React.Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container-contact2" id="contact">
        <div className="wrap-contact2">
          <form className="contact2-form validate-form" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <span className="contact2-form-title">
              {t('titleContactForm')}
            </span>

            <div className="wrap-input2 validate-input" data-validate="Ce champ est requis">
              <input className="input2" type="text" name="nom" id="nom" ref={register} required />
              <span className="focus-input2" data-placeholder={t('placeHolder1')}></span>
            </div>

            <div className="wrap-input2 validate-input" data-validate="Une Adresse Email valide est requise: ex@abc.xyz">
              <input className="input2" type="text" name="email" id="email" ref={register} required />
              <span className="focus-input2" data-placeholder={t('placeHolder2')}></span>
            </div>
            <div className="wrap-input2 validate-input" data-validate="Un numéro de téléphone valide est requis">
              <input className="input2" type="number" name="phone" id="phone" ref={register} required />
              <span className="focus-input2" data-placeholder={t('placeHolder3')}></span>
            </div>

            <div className="wrap-input2 validate-input" data-validate="Message is required">
              <textarea className="input2" name="message" id="message" ref={register} required></textarea>
              <span className="focus-input2" data-placeholder={t('placeHolder4')}></span>
            </div>

            <div className="container-contact2-form-btn">
              <div className="wrap-contact2-form-btn">
                <div className="contact2-form-bgbtn"></div>
                <button className="contact2-form-btn">
                  {t('SendingButtonContactForm')}
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
