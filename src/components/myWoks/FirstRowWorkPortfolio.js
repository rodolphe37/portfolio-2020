import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useTranslation } from 'react-i18next';

const FirstRowWorkPortfolio = () => {
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)
  const { t } = useTranslation();

  return (
    <div className="w3-row-padding w3-section">
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('firstRowDataTooltipTitle1')} ${t('firstRowDataTooltipContent1')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/memory.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen(true)} alt="Memory Yoga Card Game" />
          <figcaption className="figure-caption text-white caption-work ">{t('firstRowProjectName1')}</figcaption>
          <Modal open={open} onClose={() => setOpen(false)} center>
            <a href="https://github.com/rodolphe37/install-games-repository/blob/master/README.md" target="new">
              <figcaption className="figure-caption">{t('firstRowProjectName1')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/memory.gif")} style={{ width: '100%' }} onClick={() => setOpen(true)} alt="Memory Yoga Card Game" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('firstRowDataTooltipTitle2')} ${t('firstRowDataTooltipContent2')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/match3-1.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen2(true)} alt="Match 3 Yoga Game" />
          <figcaption className="figure-caption text-white caption-work">{t('firstRowProjectName2')}</figcaption>
          <Modal open={open2} onClose={() => setOpen2(false)} center>
            <a href="https://github.com/rodolphe37/install-games-repository/blob/master/README.md" target="new">
              <figcaption className="figure-caption">{t('firstRowProjectName2')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/match-3-demo.gif")} style={{ width: '100%' }} onClick={() => setOpen2(true)} alt="Match 3 Yoga Game" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('firstRowDataTooltipTitle3')} ${t('firstRowDataTooltipContent3')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/remake.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen3(true)} alt="Remake Earth Puzzle" />
          <figcaption className="figure-caption text-white caption-work">{t('firstRowProjectName3')}</figcaption>
          <Modal open={open3} onClose={() => setOpen3(false)} center>
            <a href="https://github.com/rodolphe37/install-games-repository/blob/master/README.md" target="new">
              <figcaption className="figure-caption">{t('firstRowProjectName3')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/remake-earth-puzzle.gif")} style={{ width: '100%' }} onClick={() => setOpen3(true)} alt="Remake Earth Puzzle" />
            </a>
          </Modal>
        </div>
      </div>
      <div className="w3-col l3 m6">
        <div className="tooltip-dev" data-tooltip={`${t('firstRowDataTooltipTitle4')} ${t('firstRowDataTooltipContent4')}`}
          data-tooltip-location="top">
          <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/tetris.webp")} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen4(true)} alt="Tetris Classic Game" />
          <figcaption className="figure-caption text-white caption-work">{t('firstRowProjectName4')}</figcaption>
          <Modal open={open4} onClose={() => setOpen4(false)} center>
            <a href="https://github.com/rodolphe37/install-games-repository/blob/master/README.md" target="new">
              <figcaption className="figure-caption">{t('firstRowProjectName4')}</figcaption>
              <img className="img-cursor w3-hover-opacity" src={require("../../assets/images/developpeur/tetris-classic.gif")} style={{ width: '100%' }} onClick={() => setOpen4(true)} alt="Tetris Classic Game" />
            </a>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default FirstRowWorkPortfolio;
