import React from 'react';
import { useTranslation } from 'react-i18next';

const BigProjectPortfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="bigProject">
      <div className="w3-row-padding">
        <div className="w3-col m6">
          <h3><i className="fas fa-award" />{t('bigProjectTitle')}</h3>
          <h3>{t('bigProjectSubtitle')}</h3>
          <p>{t('bigProjectContent1')}</p>
          <p>{t('bigProjectContent2')}</p>
          <p>{t('bigPorjectContent3')}</p>
          <p><a href="#work" className="w3-button w3-black"><i className="fa fa-th">&nbsp;</i>{t('bigProjectButton')}</a></p>
        </div>
        <div className="w3-col m6">
          <img className="w3-image w3-round-large img-medium-work" src={require("../assets/images/developpeur/amano-hilot.webp")} alt="Buildings" width={700} height={394} />
        </div>
      </div>
    </div>

  )
}

export default BigProjectPortfolio;
