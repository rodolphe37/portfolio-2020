import React from 'react';
import { Container } from 'reactstrap';

const ContactBannerPortfolio = () => {

  return (
    <Container>
      <div role="alert" className="alert alert-info banner-info">
        <div className="field field--name-field-body field--type-text-long field--label-hidden field--item contact-port">
          <p className="desc-contactBanner">Contactez-moi via&ensp;</p>
          <a href="/contact#home" className="btn btn-primary text-white text-white-banner form-banner" style={{ fontWeight: 'bold' }} tabIndex="-1">&ensp;
          le formulaire de contact
              </a>
          <p className="desc-contactBanner desc-2">&ensp;ou{''}&ensp;</p>
          <a className="btn btn-primary text-white text-white-banner tel-banner" href="tel:+33659653495" tabIndex="-1">
            <strong>par Téléphone</strong>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default ContactBannerPortfolio;
