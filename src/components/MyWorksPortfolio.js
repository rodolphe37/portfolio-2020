import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import FirstRowWorkPortfolio from './FirstRowWorkPortfolio';
import SecondRowWorkPortfolio from './SecondRowWorkPortfolio';
import ThirdRowWorkPortfolio from './ThirdRowWorkPortfolio';

const MyWorksPortfolio = () => {
  const [onClicked, setOnClicked] = useState(false);

  const HandleClicked = () => {
    if (onClicked === false) {
      setOnClicked(true)
    } else {
      setOnClicked(false)
    }
  }

  return (
    <div className="w3-container" style={{ padding: '15px 16px' }} id="work">
      <div className="form-group switch-barber-portfolio">
        <span className="switch switch-sm">
          <input type="checkbox" className="switch" id="switch-sm" onClick={() => HandleClicked()} />
          <label htmlFor="switch-sm">{onClicked === false ? ('Légère barbe') : ('Barbe')}</label>
        </span>
      </div>
      {onClicked === true ? (<img className="info-perso" src={require("../assets/images/presentation/perso-2.png")} alt="développeur" />) : (<img className="info-perso" src={require("../assets/images/presentation/perso-2b.png")} alt="développeur" />)}
      <h3 className="w3-center title-work-top" ><i className="fas fa-swatchbook" /> Mon travail</h3>
      <p className="w3-center w3-large subtitle-work">Voici les Projets que j'ai réalisé avec beaucoup de plaisir et de passion. </p>
      <p className="w3-center w3-large desc-work">si vous cliquez sur l'image d'un projet, une fenêtre va s'ouvrir avec une image animée du projet... <br />si vous cliquez de nouveau, dans la fenêtre cette fois, un lien vous conduira vers le code source du projet.</p>
      <div className="w3-row-padding" style={{ marginTop: '64px' }}>
        <Fade ssrFadeout>
          <FirstRowWorkPortfolio />
          <SecondRowWorkPortfolio />
          <ThirdRowWorkPortfolio />
        </Fade>
      </div>
      <style jsx="true">{`
        .info-perso {
          width: 17%;
          justify-content:center;
          align-item: center;
          margin:auto;
          display:flex
        },
        .title-work-top {
          margin-top: -10px
        }
        .subtitle-work {
          font-size: 14px!important;
          padding-top: 5px;
          font-weight: bold
        }
        .desc-work {
          font-style: italic;
          font-size: 11px !important
        }
      `}</style>
    </div>
  )
}

export default MyWorksPortfolio;
