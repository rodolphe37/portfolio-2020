import React from 'react';
import { Modal } from 'react-responsive-modal';
import { useTranslation } from 'react-i18next';

const SecondRowWorkPortfolio = () => {
  const [openc, setOpenc] = React.useState(false)
  const [openc1, setOpenc1] = React.useState(false)
  const [openc2, setOpenc2] = React.useState(false)
  const [openc3, setOpenc3] = React.useState(false)
  const { t } = useTranslation();

  return (
    <div className="w3-row-padding w3-section">
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('secondRowDataTooltipTitle1')} ${t('secondRowDataTooltipContent1')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/sortwaste.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpenc(true)} alt="Sort The Waste Game" />
          <figcaption className="figure-caption text-white caption-work">{t('secondRowProjectName1')}</figcaption>
          <Modal open={openc} onClose={() => setOpenc(false)} center>
            <a href="https://github.com/rodolphe37/install-games-repository/blob/master/README.md" target="new">
              <figcaption className="figure-caption">{t('secondRowProjectName1')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/waste.gif")} style={{ width: '100%' }} onClick={() => setOpenc(true)} alt="Sort The Waste Game" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('secondRowDataTooltipTitle2')} ${t('secondRowDataTooltipContent2')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/asanas.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpenc1(true)} alt="Asanas Gessing Game" />
          <figcaption className="figure-caption text-white caption-work">{t('secondRowProjectName2')}</figcaption>
          <Modal open={openc1} onClose={() => setOpenc1(false)} center>
            <a href="https://github.com/rodolphe37/asanas-guess-game-free-version" target="new">
              <figcaption className="figure-caption">{t('secondRowProjectName2')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/asanas.gif")} style={{ width: '100%' }} onClick={() => setOpenc1(true)} alt="Asanas Gessing Game" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('secondRowDataTooltipTitle3')} ${t('secondRowDataTooltipContent3')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/wildcircus.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpenc2(true)} alt="The Wild Circus" />
          <figcaption className="figure-caption text-white caption-work">{t('secondRowProjectName3')}</figcaption>
          <Modal open={openc2} onClose={() => setOpenc2(false)} center>
            <a href="https://github.com/rodolphe37/checkpoint4-circus" target="new">
              <figcaption className="figure-caption">{t('secondRowProjectName3')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/wildcircus.gif")} style={{ width: '100%' }} onClick={() => setOpenc2(true)} alt="The Wild Circus" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('secondRowDataTooltipTitle4')} ${t('secondRowDataTooltipContent4')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/movieDemo.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpenc3(true)} alt="Gestion d'utilisateurs NFC_Update" />
          <figcaption className="figure-caption text-white caption-work">{t('secondRowProjectName4')}</figcaption>
          <Modal open={openc3} onClose={() => setOpenc3(false)} center>
            <a href="https://github.com/rodolphe37/nfc-updates-front" target="new">
              <figcaption className="figure-caption">{t('secondRowProjectName4')} - <a href="https://wizardly-feynman-6cec68.netlify.app/#/" target="new">demo</a></figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../assets/images/developpeur/movieDemo.gif")} style={{ width: '100%' }} onClick={() => setOpenc3(true)} alt="Gestion d'utilisateurs NFC_Update" />
            </a>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default SecondRowWorkPortfolio;
