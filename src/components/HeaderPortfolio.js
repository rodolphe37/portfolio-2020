import React from 'react';
import { useTranslation } from 'react-i18next';

const HeaderPortfolio = () => {
  const { t } = useTranslation();

  return (
    <header className="w3-display-container w3-grayscale-min">
      <img className="bgimg-1" src={require("../assets/images/test/portrait2.webp")} alt="plage et soleil" />
      <div className="w3-display-left w3-text-white" style={{ padding: '48px' }}>
        <span className="w3-jumbo w3-hide-small">{t('title')}</span><br />
        <span className="w3-xxlarge w3-hide-large w3-hide-medium font-head">{t('title')}.</span><br />
        <span className="w3-large font-head">{t('credo')}</span>
        <p><a href="#about" className="  w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off font-head">{t('titleButton')}</a></p>
      </div>
    </header>
  )
}

export default HeaderPortfolio;
