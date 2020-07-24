
import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
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
  const [loading, setLoading] = useState(true)
  const [onClicked, setOnClicked] = useState(false);
  const [openGame, setOpenGame] = useState(false)


  const HandleClicked = () => {
    if (onClicked === false) {
      setOnClicked(true)
    } else {
      setOnClicked(false)
    }
  }


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="port-navbar port-default absolute" color="faded" light expand="md">
        <Slide cascade top ssrFadeout>
          <div className="container">
            <NavbarBrand className="port-navbar-brand" href="/">
              <h2 className="title_site">Rodolphe AUGUSTO</h2>
              <img className="img-logo" src={require('../../assets/images/presentation/perso-5b.png')} alt="logo-amano-hilot" />
              <h2 className="title_site" style={{ marginLeft: '27px' }}>PortFolio</h2>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="/#home" title="Accueil" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#about" title="A Propos" />
                </NavItem>
                <NavItem className="port-navbar-item port-navbar-link">
                  <BsNavLink route="#importPoints" title="Points Importants" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#bigProject" title="Gros projet " />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#work" title="Mon Travail " />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="#contact" title="Contact" />
                </NavItem>
                <NavItem>
                  <ModalGame />
                  {/* <button className="w3-button w3-black" onClick={() => setOpenGame(true)} id="Games" style={{ margingTop: '25px' }}>Les Jeux!!!</button>
                  <Modal classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                  }} open={openGame} onClose={() => setOpenGame(false)} center>
                    <Games />
                </Modal>*/}
                </NavItem>
                <NavItem className="port-navbar-item">
                  <div>
                    <iframe title="sharing button" className="sharing-button" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.amano-hilot.fr&layout=box_count&size=small&width=81&height=40&appId" width="81" height="40" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>                </div>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Slide>
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
