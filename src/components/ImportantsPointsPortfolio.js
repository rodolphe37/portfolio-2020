import React from 'react';
import { useTranslation } from 'react-i18next';

const ImportantsPointsPortfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="importPoints">
      <h3 className="w3-center">{t('ImportantPointsTitle')}</h3>
      <p className="w3-center w3-large subtitle-important-points">{t('ImportantPointsSubtitle')}</p>
      <div className="w3-row-padding w3-center" style={{ marginTop: '64px' }}>
        <div className="w3-quarter">
          <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
          <p className="w3-large title-important-points">{t('responsiveTitle1')}</p>
          <p>{t('responsiveContent1')}</p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
          <p className="w3-large title-important-points">{t('responsiveTitle2')}</p>
          <p>{t('responsiveContent2')}</p>
        </div>
        <div className="w3-quarter">
          <i className="fas fa-palette w3-margin-bottom w3-jumbo" style={{ color: 'white' }} />
          <p className="w3-large title-important-points">{t('responsiveTitle3')}</p>
          <p>{t('responsiveContent3')}</p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-cog w3-margin-bottom w3-jumbo" />
          <p className="w3-large title-important-points">{t('responsiveTitle4')}</p>
          <p>{t('responsiveContent4')}</p>
        </div>
      </div>
    </div>
  )
}

export default ImportantsPointsPortfolio;
