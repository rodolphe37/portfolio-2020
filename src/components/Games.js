import React from 'react'
import Iframe from 'react-iframe';
import { Container } from 'reactstrap';
import '../assets/styles/tooltip-style.css'
// import Footer from '../components/footer';
// import Header from '../components/shared/Header';
import IncompatibleMess from '../components/IncompatibleMess';
import BackgroundError from '../components/BackgroundError';
import { useState, useEffect } from 'react';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
// import BaseLayout from '../components/layouts/BaseLayout';
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';



const Games = () => {
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 750)
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
            {/*{click === true ? "" : <Header />}*/}
            <Flip left ssrFadeout>
              <div
                className={click === false ? "btn btn-secondary fixed-button" : "btn btn-secondary fixed-button selected"}
                onClick={HandleClick}>
                {click === false
                  ?
                  <div data-tooltip="Afin d'avoir une bonne jouabilité, ainsi qu'une experience utilisateur optimale, &#xa; &#xa; veuillez fixer le contenu de la fenêtre en cliquant sur ce bouton. (Option supplémentaire : Vous pouvez mettre la fenêtre en plein écran avec la touche F11 afin d'améliorer encore plus votre confort)."
                    data-tooltip-location="bottom">
                    <span className="body-button">
                      <a className="components-button">
                        <span className="particle-button"></span>
                        <span className="particle-button"></span>
                        <span className="particle-button"></span>
                        <span className="particle-button"></span>
                Fixer le jeux
              </a>
                    </span>
                  </div>
                  :
                  <div data-tooltip="Aprés avoir assouvi votre envie de jouer, &#xa; &#xa; cliquez de nouveau sur le bouton (ainsi que la touche F11 si vous avez choisi le plein écran) pour libérer la fenêtre et revenir à une navigation normale."
                    data-tooltip-location="bottom">
                    <a className="components-button">
                      <span className="particle-button"></span>
                      <span className="particle-button"></span>
                      <span className="particle-button"></span>
                      <span className="particle-button"></span>
                Débloquer le jeu
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
                  <h1>Oups... La définition de votre écran ne supporte pas la taille d'affichage minimum des jeux.</h1>
                  <h2>Votre expérience utilisateur n'étant pas possible...</h2>
                </Slide>
                <h3 className="alert">
                  <IncompatibleMess />
                </h3>
              </div>
            </Container>
            <Flip bottom>
              <Container className={click === false ? "games-frame" : "game-frame-blocked"}>
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
              </Container>
            </Flip>
            {/*{click === true ? "" : <Footer />}*/}

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
