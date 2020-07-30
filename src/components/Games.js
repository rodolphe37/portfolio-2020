import React, { useState, useEffect } from 'react'
import Iframe from 'react-iframe';
import { Container } from 'reactstrap';
import '../assets/styles/tooltip-style.css'
import BackgroundError from '../components/BackgroundError';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';
import { useTranslation } from 'react-i18next';



const Games = () => {
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1350)
  }, [])

  const HandleClick = () => {
    if (click === false) {
      return (
        setClick(true)
      )
    } else {
      return (
        setClick(false)
      )
    }
  };

  return (
    <>
      {loading === false ? (
        <React.Fragment>
          <div className={click === true ? "game-page-static" : "game-page"}>
            <Flip left>
              <div
                className={click === false ? "btn btn-secondary fixed-button" : "btn btn-secondary fixed-button selected"}
                onClick={HandleClick}>
                {click === false
                  ?
                  <div data-tooltip={`${t('fixGamesTooltip1')}`}
                    data-tooltip-location="bottom">
                    <span className="body-button">
                      <a className="components-button">
                        <span className="particle-button"></span>
                        <span className="particle-button"></span>
                        <span className="particle-button"></span>
                        <span className="particle-button"></span>
                        {t('fixGames')}
                      </a>
                    </span>
                  </div>
                  :
                  <div data-tooltip={`${t('fixGamesTooltip2')}`}
                    data-tooltip-location="bottom">
                    <a className="components-button">
                      <span className="particle-button"></span>
                      <span className="particle-button"></span>
                      <span className="particle-button"></span>
                      <span className="particle-button"></span>
                      {t('unlockGames')}
                    </a>

                  </div>
                }
              </div>
            </Flip>
            <div className="background-image bgi">
              <img className="img-default" src={require("../assets/images/background-index.png")} alt="background-images" />
            </div>
            <Container className="conditional-game">
              <div className="background-image-bgi-conditional">
                <BackgroundError />
              </div>

              <div className="conditional-text">
                <Slide top>
                  <h1>{t('errorGamesH1')}</h1>
                  <h2>{t('errorGamesH2')}</h2>
                </Slide>
                <h3 className="alert">
                  {t('errorGamesAlert')}
                </h3>
              </div>
            </Container>
            <Flip bottom>
              <div className={click === false ? "games-frame" : "game-frame-blocked"}>
                <Iframe url={"https://nostalgic-austin-14c40f.netlify.app/"}
                  width="930px"
                  height="820px"
                  frameBorder="1"
                  scrolling="no"
                  id="FrameGameId"
                  className="frame"
                  display="initial"
                  position="relative"
                  zIndex="50"
                />
              </div>
            </Flip>
          </div>
        </React.Fragment>
      ) : (

          <InfiniteLoopLoader />

        )
      }
    </>
  )
}

export default Games;
