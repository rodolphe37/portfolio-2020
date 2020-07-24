import React, { useState, useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import SkillsAbility from '../SkillsAbility';
import HeaderPortfolio from '../HeaderPortfolio';
import ImportantsPointPortfolio from '../ImportantsPointsPortfolio';
import BigProjectPortfolio from '../BigProjectPortfolio';
import LittlePalmaresPortfolio from '../LittlePalmaresPortfolio';
import MyWorksPortfolio from '../MyWorksPortfolio';
import '../../assets/styles/w3c.css'
import BaseLayout from '../layouts/BaseLayout';
import { Container } from 'reactstrap';
import InfiniteLoopLoader from '../InfiniteLoopLoader';
import ContactForm from '../ContactForm';
import About from '../About';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import { initGA } from '../../App'


const Portfolio = () => {
  const [loading, setLoading] = useState(true)
  const [openForm, setOpenForm] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3200)
  }, [])

  // useEffect(() => { initGA(); }, []);

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <div className="content-dev">
              <Zoom>
                <HeaderPortfolio />
              </Zoom>
              <Fade>
                <About />
              </Fade>
              <Fade right>
                <ImportantsPointPortfolio />
              </Fade>
              <Fade left>
                <BigProjectPortfolio />
              </Fade>
              <Bounce right>
                <LittlePalmaresPortfolio />
              </Bounce>
              <Fade>
                <MyWorksPortfolio />
              </Fade>
              <Slide bottom>
                <div className="w3-container w3-light-grey w3-padding-64">
                  <div className="w3-row-padding">
                    <SkillsAbility />
                  </div>
                </div>
              </Slide>
              <div className="w3-container w3-center w3-dark-grey" style={{ padding: '59px 16px', marginBottom: '20px' }} id="pricing">
                <Zoom left>
                  <div className="container-fluid bg-1 text-center">
                    <h3 className="margin">Ou me trouver?</h3><br />
                    <div className="row">
                      <div className="col-sm-4">
                        <p>Si vous ne me trouvez pas en train de Coder. <br /> Ce que je fait très régulièrement afin d'assouvir cette passion !!! <br />alors vous me trouverez...</p>
                        <img src={require("../../assets/images/about/script-developpeur.jpg")} className="img-responsive" style={{ width: '100%' }} alt="developper" />
                      </div>
                      <div className="col-sm-4">
                        <p>En train de jouer de la guitare, <br /> ce que je fait depuis maintenant 25 ans et qui est un besoin fondamental pour moi. Ou bien, vous me trouverez...</p>
                        <img src={require("../../assets/images/about/playing-guitar.jpeg")} className="img-responsive" style={{ width: '100%' }} alt="Guitar" />
                      </div>
                      <div className="col-sm-4">
                        <p>En train de dessiner ou peindre. <br /> Ce que je fait depuis... <br /> aussi loin que je puisse remonter mes souvenirs, j'ai toujours dessiné.</p>
                        <img src={require("../../assets/images/about/drawing.webp")} className="img-responsive" style={{ width: '100%' }} alt="Drawing" />
                      </div>
                      <h5 className="container-fluid text-center title-creatif">Créatif, je développe des sites Web élégants avec les dernières technologies.<br /> Je cherche actuellement la bonne équipe où je peux contribuer à créer des produits digitaux incroyables.</h5>
                      <Container><p>Je suis actuellement à la recherche d'un emploi (éventuellement à distance) en tant que développeur fullStack NodeJs\ReactJs,<br /> un emploi dans lequel je peux faire passer mes compétences à un niveau supérieur et évoluer en tant que développeur Web.</p>
                        <br />
                        <h5>Vous aimez mon portfolio et pensez que je suis bon candidat?<br /> Travaillons ensemble!</h5><br /><br /></Container>
                    </div>

                  </div>
                </Zoom>
                <br />
                <button className="w3-button w3-black" onClick={() => setOpenForm(true)} id="contact" style={{ margingTop: '25px' }}>Contactez moi !!</button>
                <Modal classNames={{
                  overlay: 'customOverlay',
                  modal: 'customModal',
                }} open={openForm} onClose={() => setOpenForm(false)} center>
                  <ContactForm />
                </Modal>

              </div>
            </div>
          </BaseLayout>
        ) : (
          <BaseLayout>
            <InfiniteLoopLoader />
          </BaseLayout>
        )
      }
    </>
  )
}

export default Portfolio;
