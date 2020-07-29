import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/fizzyButton.scss'

const HeaderPortfolio = () => {
  const { t } = useTranslation();

  return (
    <header className="w3-display-container w3-grayscale-min">
      <img className="bgimg-1" src={require("../assets/images/test/portrait2.webp")} alt="plage et soleil" />
      <div className="w3-display-left w3-text-white" style={{ padding: '48px' }}>
        <span className="w3-jumbo w3-hide-small">{t('title')}</span><br />
        <span className="w3-xxlarge w3-hide-large w3-hide-medium font-head">{t('title')}.</span><br />
        <span className="w3-large font-head">{t('credo')}</span>
        <div className="button">
          <input id="button" type="checkbox" role="button" />
          <label htmlFor="button">
            <div className="button_inner q">
              <i className="l ion-log-in" />
              <a href="#about" style={{ paddingTop: '25px', paddingBottom: '25px', paddingRight: '10px' }} className="t">{t('titleButton')}&raquo;</a>
              <span>
                <i className="tick ion-checkmark-round" />
              </span>
              <div className="b_l_quad">
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
              </div>
            </div>
          </label>
        </div>
      </div>
      <style jsx='true'>{`
      .button {
        left: -9%;
        bottom: -83px;
    }
      `}</style>
    </header>
  )
}

export default HeaderPortfolio;
