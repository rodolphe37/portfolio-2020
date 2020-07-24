
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Slide from 'react-reveal/Slide';
import emailjs from 'emailjs-com';
import { withAlert, useAlert } from 'react-alert';


const Contact = () => {
  const [isClicked, setIsClicked] = useState(false)
  const { register, handleSubmit } = useForm();
  const alert = useAlert()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const onSubmit = (data) => {
    emailjs.send('gmail', 'template_wQIJppFE', data, 'user_xKWRvlBTc0uT65Tf9D7wJ')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert.show('Message envoyé avec succès!', {
          type: 'success',
          containerStyle: {
            zIndex: 1800
          },
          onOpen: () => {
            document.getElementById("contact-form").reset();
          },
        })
      }, function (error) {
        alert.error("Message non envoyé, quelque chose s'est mal passé!", {
          containerStyle: {
            zIndex: 1800
          },
        })
        console.log('FAILED...', error);
      });
  }

  const handleSend = () => {
    if (isClicked === false) {
      return setIsClicked(true)
    } else {
      return setIsClicked(false)
    }
  }


  return (
    <React.Fragment>
      <div className="contact-layout row">
        <div className="container mt-5" >
          <div className="row row-contct">
            <Slide left ssrFadeout>
              <div className="col-md-6 maps" >
                <iframe className="frame-contact" width="440" height="700" src="https://maps.google.com/maps?width=440&amp;height=700&amp;hl=en&amp;q=Luynes%2C%20France+(Amano-Hilot)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
              </div>
            </Slide>
            <div className="col-md-6 right-col">
              <Slide right ssrFadeout cascade>
                <h2 className="text-uppercase mt-3 font-weight-bold text-white bottom-col-right title-contact">CONTACT </h2>
                <h3 className="subtitle-contact text-white">(tous les champs du formulaire sont obligatoires)</h3>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row inner-contact">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="nom" ref={register} type="text" className="form-control mt-2" placeholder="Nom et Prénom" id="nom" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="objet" ref={register} type="text" className="form-control mt-2" placeholder="Objet du message" id="objet" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          name="email"
                          ref={register}
                          type="email"
                          className="form-control mt-2"
                          placeholder="Votre Email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="telephone" id="telephone" ref={register} type="number" className="form-control mt-2" placeholder="Votre Téléphone" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="texte" id="texte" ref={register} className="form-control" id="exampleFormControlTextarea1" placeholder="Ecrivez votre message ici" rows="3" required></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Sujet Principal du message</label>
                        <br />
                        <select className="form-control" name="secteur" id="secteur" ref={register} required>
                          <option value="">Choisissez le secteur concerné!</option>
                          <option id="developpeur" value="developpeur">Développeur</option>
                          <option id="therapeute" value="therapeute">Thérapeute</option>
                          <option id="lapidaire" value="lapidaire">Lapidaire</option>
                          <option id="autre" value="autre">Autre sujet</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-light"
                        type="submit"
                        onClick={() => handleSend()}
                      >
                        Envoyer
                        </button>
                    </div>
                  </div>
                </form>
                <Slide top>
                </Slide>
                <Slide bottom ssrFadeout>
                  <div className="text-white bottom-col-right" >
                    <h2 className="text-uppercase mt-4 font-weight-bold">Amano-Hilot <br />  Rodolphe AUGUSTO</h2>
                    <i className="fas fa-phone mt-3 title-contact"></i> <a href="tel:+33659653495">Vous souhaitez m'appeler ?</a><br />
                    <i className="fas fa-globe mt-3 title-contact"></i> 41 bis rue Victor Hugo <br /> 37230 Luynes<br />
                    <div className="my-4">
                      <a className="contact-link" href="https://www.facebook.com/rodolphe.augusto.7" target='new'><i className="fab fa-facebook fa-3x pr-4"></i></a>
                      <a className="contact-link" href="https://www.instagram.com/rodolphelakotaspirit/" target='new'><i className="fab fa-instagram fa-3x pr-4"></i></a>
                      <a className="contact-link" href="https://www.linkedin.com/in/rodolphe-augusto-d%C3%A9veloppeur-full-stack-react-node-js-1a20b759/" target='new'><i className="fab fa-linkedin fa-3x"></i></a>
                      <a className="contact-link" href="https://github.com/rodolphe37" target='new'><i className="fab fa-github-square fa-3x pl-4"></i></a>
                    </div>
                  </div>
                </Slide>
              </Slide>
            </div>
          </div>
        </div>
        <style jsx>{`
          .form-check-input {
            position: absolute;
            margin-top: 0.8rem;
            margin-left: -1.25rem;
            display: inherit;
          }
          .right-col {
            margin-top: -76px;
          }
          .bottom-col-right {
            margin-left: 40px;
          }
          `}</style>
      </div>
    </React.Fragment>
  )
}

export default withAlert()(Contact);
