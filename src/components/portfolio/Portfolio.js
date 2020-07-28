import React, { useState, useEffect } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import { Container } from 'reactstrap';
import InfiniteLoopLoader from '../InfiniteLoopLoader';
import ContactForm from '../ContactForm';
import About from '../About';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
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
import { useTranslation } from 'react-i18next';


const Portfolio = () => {
  const [loading, setLoading] = useState(true)
  const [openForm, setOpenForm] = useState(false)
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 3200)
  }, [])

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
                    <h3 className="margin">{t('whereFindMe')}</h3><br />
                    <div className="row">
                      <div className="col-sm-4">
                        <p>{t('whereFindMeContent1')}<br /> {t('whereFindMeContent1bis')}<br />{t('whereFindMeContent1ter')}</p>
                        <img src={require("../../assets/images/about/script-developpeur.jpg")} className="img-responsive" style={{ width: '100%' }} alt="developper" />
                      </div>
                      <div className="col-sm-4">
                        <p> {t('whereFindMeContent2')}<br />{t('whereFindMeContent2bis')}</p>
                        <img src={require("../../assets/images/about/playing-guitar.jpeg")} className="img-responsive" style={{ width: '100%' }} alt="Guitar" />
                      </div>
                      <div className="col-sm-4">
                        <p>{t('whereFindMeContent3')}<br /> {t('whereFindMeContent3bis')}<br />{t('whereFindMeContent3ter')}</p>
                        <img src={require("../../assets/images/about/drawing.webp")} className="img-responsive" style={{ width: '100%' }} alt="Drawing" />
                      </div>
                      <h5 className="container-fluid text-center title-creatif">{t('whereFindMeUnderPictures1')}<br />{t('whereFindMeUnderPictures1bis')}</h5>
                      <Container><p>{t('whereFindMeUnderPictures2')}<br />{t('whereFindMeUnderPictures2bis')}</p>
                        <br />
                        <h5>{t('whereFindMeUnderPictures3')}<br />{t('whereFindMeUnderPictures3bis')}</h5><br /><br /></Container>
                    </div>

                  </div>
                </Zoom>
                <br />
                <button className="w3-button w3-black" onClick={() => setOpenForm(true)} id="contact" style={{ margingTop: '25px' }}>{t('contactModalButton')}</button>
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
