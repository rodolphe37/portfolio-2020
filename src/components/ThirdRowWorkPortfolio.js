import React from 'react';
import { Modal } from 'react-responsive-modal';

const ThirdRowWorkPortfolio = () => {
  const [open9, setOpen9] = React.useState(false)
  const [open10, setOpen10] = React.useState(false)
  const [open11, setOpen11] = React.useState(false)
  const [open12, setOpen12] = React.useState(false)


  return (
    <div className="w3-row-padding w3-section">
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip="Clone de Flappy Bird - (React-Native). &#xa; &#xa; Clône du celebre jeu Flappy Bird, jeu conçu en React-Native avec comme dépendances : matter.js, react-native-paper et react-native-engine."
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo-rn.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen9(true)} alt="Clone de Flappy Bird" />
          <figcaption className="figure-caption text-white caption-work">Clone de Flappy Bird - (React-Native)</figcaption>
          <Modal open={open9} onClose={() => setOpen9(false)} center>
            <a href="https://snack.expo.io/@rodolphe37/a6897e" target="new">
              <figcaption className="figure-caption">Clone de Flappy Bird - (React-Native)</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo.rn.gif")} style={{ width: '100%' }} onClick={() => setOpen9(true)} alt="Clone de Flappy Bird" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip="Theme Artiste responsive - (React/React-router). &#xa; &#xa; Theme conçu avec React et React-router."
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo.v2.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen10(true)} alt="Theme Artiste responsive" />
          <figcaption className="figure-caption text-white caption-work">Theme Artiste responsive - (React/React-router)</figcaption>
          <Modal open={open10} onClose={() => setOpen10(false)} center>
            <a href="https://github.com/rodolphe37/magnetic-react-template" target="new">
              <figcaption className="figure-caption">Theme Artiste responsive - (React/React-router)</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo.v2.gif")} style={{ width: '100%' }} onClick={() => setOpen10(true)} alt="Theme Artiste responsive" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip="Site Amano-Hilot - (Next/Strapi). &#xa; &#xa; Site conçu avec React, Next, Bootstrap et ReactStrap, Next-seo ainsi que Sass pour le frontend, pour le backend j'ai utilisé le CMS Strapi et une base de données MySQL."
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/amano-hilot.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen11(true)} alt="Site Amano-Hilot" />
          <figcaption className="figure-caption text-white caption-work">Site Amano-Hilot - (Next/Strapi)</figcaption>
          <Modal open={open11} onClose={() => setOpen11(false)} center>
            <figcaption className="figure-caption">Site Amano-Hilot - (Next/Strapi)</figcaption>
            <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/amano-hilot.gif")} style={{ width: '100%' }} onClick={() => setOpen11(true)} alt="Site Amano-Hilot" />
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip="Site Jeux Amano-hilot - (React-Spring/Express). &#xa; &#xa; Site conçu avec React, React-spring, Spectre.css, Node-sass, Styled Components et Typescript en frontend ainsi que express pour le backend."
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/allGames.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen12(true)} alt="Site Jeux Amano-hilot" />
          <figcaption className="figure-caption text-white caption-work">Site Jeux Amano-hilot - (React-Spring/Express)</figcaption>
          <Modal open={open12} onClose={() => setOpen12(false)} center>
            <a href="allGames">
              <figcaption className="figure-caption">Site Jeux Amano-hilot - (React-Spring/Express)</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/allGames.gif")} style={{ width: '100%' }} onClick={() => setOpen12(true)} alt="Site Jeux Amano-hilot" />
            </a>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ThirdRowWorkPortfolio;
