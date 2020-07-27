import React from 'react';
import { useTranslation } from 'react-i18next';

const LittlePalmaresPortfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
      <h2><i className="fas fa-tachometer-alt" />{t('myLittlePalmaresTitle')}</h2>
      <br />
      <div className="w3-quarter">
        <span className="w3-xxlarge">{t('myLittlePalmaresNumberCode')}</span>
        <br />{t('myLittlePalmaresTextCode')}
      </div>
      <div className="w3-quarter">
        <span className="w3-xxlarge">{t('myLittlePalmaresNumberPassion')}</span>
        <br />{t('myLittlePalmaresTextPassion')}
      </div>
      <div className="w3-quarter">
        <span className="w3-xxlarge">{t('myLittlePalmaresNumberProject')}</span>
        <br />{t('myLittlePalmaresTextProject')}
      </div>
      <div className="w3-quarter">
        <span className="w3-xxlarge">{t('myLittlePalmaresNumberMotivation')}</span>
        <br />{t('myLittlePalmaresTextMotivation')}
      </div>
    </div>
  )
}

export default LittlePalmaresPortfolio;
