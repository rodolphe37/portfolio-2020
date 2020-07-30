import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import 'react-responsive-modal/styles.css';
import Slide from 'react-reveal/Slide';
import ModalGame from '../ModalGame';



const BsNavLink = (props) => {
  const { route, title } = props;
  return (

    <a href={route} className="nav-link port-navbar-link">{title}</a>

  )
}


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div >
      <Navbar className="port-navbar port-default absolute" color="faded" light expand="md">
        <div className="container">
          <NavbarBrand className="port-navbar-brand" href="/">
            <h2 className="title_site">Rodolphe AUGUSTO</h2>
            <img className="img-logo" src={require('../../assets/images/presentation/perso-5b.png')} alt="logo-portfolio" />
            <h2 className="title_site" style={{ marginLeft: '27px' }}>PortFolio</h2>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Slide cascade top>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="/#home" title={t('homeTitle')} />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#about" title={t('about')} />
                </NavItem>
                <NavItem className="port-navbar-item port-navbar-link">
                  <BsNavLink route="#importPoints" title={t('importantPoints')} />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#bigProject" title={t('bigProject')} />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#work" title={t('myWorks')} />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#contact" title="Contact" />
                </NavItem>
                <NavItem>
                  <ModalGame />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <div>
                    <iframe title="sharing button" className="sharing-button" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.rodolphe-augusto.fr&layout=box_count&size=small&width=81&height=40&appId" width="81" height="40" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                  </div>
                </NavItem>
              </Slide>
              <NavItem className="buttonTranslate">
                <span className="buttonLanguage" style={{ zIndex: '60', cursor: 'pointer' }}>
                  <span className="tradButtonfr" style={{ marginRight: '15px' }} onClick={() => changeLanguage('fr')}><span role="img" aria-label="france flag">🇨🇵</span></span>
                  <span className="tradButtonen " onClick={() => changeLanguage('en')}><span role="img" aria-label="england flag">🇬🇧</span></span>
                  <span className="tradButtonpt " style={{ marginLeft: '15px' }} onClick={() => changeLanguage('pt')}><span role="img" aria-label="Português flag">🇵🇹</span></span>
                </span>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <style jsx="true">{`
        .nav-activity {
          list-style: none;
          margin-left: -39px !important;
        }
        .img-logo {
          width:18% !important;
          margin-left:27px;

        }
        .title_site {
          font-size: 14px;
          color: white;
          text-align:left
        }
      `}</style>
    </div>
  );
}

export default Header;
