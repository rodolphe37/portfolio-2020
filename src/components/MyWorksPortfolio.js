import React, { useState } from 'react';
// import Fade from 'react-reveal/Fade';
import FirstRowWorkPortfolio from './myWoks/FirstRowWorkPortfolio';
import SecondRowWorkPortfolio from './myWoks/SecondRowWorkPortfolio';
import ThirdRowWorkPortfolio from './myWoks/ThirdRowWorkPortfolio';
import { useTranslation } from 'react-i18next';
import FourthRowWorkPortfolio from './myWoks/FourthRowWorkPortfolio';

const MyWorksPortfolio = () => {
  const [onClicked, setOnClicked] = useState(false);
  const { t } = useTranslation();

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
          <label htmlFor="switch-sm">{onClicked === false ? <p>{t('myWorkSwitchBarber')}</p> : <p>{t('myWorkSwitchBarberBis')}</p>}</label>
        </span>
      </div>
      {onClicked === true ? (<img className="info-perso" src={require("../assets/images/presentation/perso-2.png")} alt="développeur" />) : (<img className="info-perso" src={require("../assets/images/presentation/perso-2b.png")} alt="développeur" />)}
      <h3 className="w3-center title-work-top" ><i className="fas fa-swatchbook" />{t('myWorks')}</h3>
      <p className="w3-center w3-large subtitle-work">{t('myWorksSubtitle')}</p>
      <p className="w3-center w3-large desc-work">{t('myWorkDescription1')}<br />{t('myWorkDescription2')}</p>
      <div className="w3-row-padding" style={{ marginTop: '64px' }}>
        <div className="fade-in">
          <FirstRowWorkPortfolio />
          <SecondRowWorkPortfolio />
          <ThirdRowWorkPortfolio />
          <FourthRowWorkPortfolio />
        </div>
      </div>
    </div>
  )
}

export default MyWorksPortfolio;
