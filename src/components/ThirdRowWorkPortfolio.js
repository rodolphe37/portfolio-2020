import React from 'react';
import { Modal } from 'react-responsive-modal';
import { useTranslation } from 'react-i18next';

const ThirdRowWorkPortfolio = () => {
  const [open9, setOpen9] = React.useState(false)
  const [open10, setOpen10] = React.useState(false)
  const [open11, setOpen11] = React.useState(false)
  const [open12, setOpen12] = React.useState(false)
  const { t } = useTranslation();


  return (
    <div className="w3-row-padding w3-section">
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('thirdRowDataTooltipTitle1')} ${t('thirdRowDataTooltipContent1')}`}
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo-rn.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen9(true)} alt="Clone de Flappy Bird" />
          <figcaption className="figure-caption text-white caption-work">{t('thirdRowProjectName1')}</figcaption>
          <Modal open={open9} onClose={() => setOpen9(false)} center>
            <a href="https://snack.expo.io/@rodolphe37/a6897e" target="new">
              <figcaption className="figure-caption">{t('thirdRowProjectName1')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo.rn.gif")} style={{ width: '100%' }} onClick={() => setOpen9(true)} alt="Clone de Flappy Bird" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('thirdRowDataTooltipTitle2')} ${t('thirdRowDataTooltipContent2')}`}
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo.v2.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen10(true)} alt="Theme Artiste responsive" />
          <figcaption className="figure-caption text-white caption-work">{t('thirdRowProjectName2')}</figcaption>
          <Modal open={open10} onClose={() => setOpen10(false)} center>
            <a href="https://github.com/rodolphe37/magnetic-react-template" target="new">
              <figcaption className="figure-caption">{t('thirdRowProjectName2')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/demo.v2.gif")} style={{ width: '100%' }} onClick={() => setOpen10(true)} alt="Theme Artiste responsive" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('thirdRowDataTooltipTitle3')} ${t('thirdRowDataTooltipContent3')}`}
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/amano-hilot.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen11(true)} alt="Site Amano-Hilot" />
          <figcaption className="figure-caption text-white caption-work">{t('thirdRowProjectName3')}</figcaption>
          <Modal open={open11} onClose={() => setOpen11(false)} center>
            <figcaption className="figure-caption">{t('thirdRowProjectName3')}</figcaption>
            <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/amano-hilot.gif")} style={{ width: '100%' }} onClick={() => setOpen11(true)} alt="Site Amano-Hilot" />
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('thirdRowDataTooltipTitle4')} ${t('thirdRowDataTooltipContent4')}`}
          data-tooltip-location="bottom">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/allGames.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen12(true)} alt="Site Jeux Amano-hilot" />
          <figcaption className="figure-caption text-white caption-work">{t('thirdRowProjectName4')}</figcaption>
          <Modal open={open12} onClose={() => setOpen12(false)} center>
            <a href="allGames">
              <figcaption className="figure-caption">{t('thirdRowProjectName4')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/allGames.gif")} style={{ width: '100%' }} onClick={() => setOpen12(true)} alt="Site Jeux Amano-hilot" />
            </a>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ThirdRowWorkPortfolio;
