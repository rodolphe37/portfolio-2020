import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';



const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <hr style={{ background: '#2287ce' }} />
        <Fade>
          <div className="container-fluid bg-1 text-center" id="about">
            <h3 className="margin">{t('whoIAm')}</h3>
            <p style={{ fontWeight: '400', fontSize: '18px' }}>{t('myName')}</p>
            <img className="molecular-background" src={require("../assets/images/about/molecular.png")} alt="molecule" />
            <Fade right>
              <img src={require("../assets/images/presentation/perso-3b.png")} className="img-responsive img-circle margin" style={{ display: 'inline' }} alt="Bird" width={350} height={350} />
              <h3>{t('whoIAMTitle')}</h3>
              <Container>
                <p style={{ paddingBottom: '5px' }}>{t('whoIAmContent')}</p>
              </Container>
            </Fade>
          </div>
        </Fade>
        <div className="container-fluid bg-2 text-center">
          <Fade>
            <div className="second-section-about bg-3 container-fluid" style={{ paddingTop: '30px', paddingBottom: '0', marginBottom: '15px' }}>
              <h3 className="margin" style={{ color: 'black' }}>{t('whatIAm')}</h3>
              <div className="what-about">
                <Fade right>
                  <Container>
                    <Fade right cascade>
                      <h3 className="margin" style={{ textAlign: 'center', fontSize: '1.2rem', color: 'black' }}>{t('whatIAmTitle')}</h3>
                      <div className="row content-what-section" style={{ width: '100%' }}>
                        <i className="fas fa-code" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;{t('whatIAmContentSubtitle1')}</b>
                        <p style={{ textAlign: 'left' }}>{t('whatIAmContent1')}<span role="img" aria-label="smiley">😏</span>.</p>
                        <i className="fas fa-book" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;{t('whatIAmContentSutitle2')}</b>
                        <p style={{ textAlign: 'left' }}>{t('whatIAmContent2')}<span role="img" aria-label="glassesSmiley">🤓</span></p>
                      </div>
                    </Fade>
                  </Container>
                </Fade>
                <Fade left>
                  <div className="row">
                    <img className="img-responsive img-circle margin img-what what-i-iam" src={require("../assets/images/presentation/perso-5b.png")} alt="me without barber" />
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>
          <Slide right>
            <div className="container-fluid bg-1 text-center">
              <Slide bottom>
                <h3 className="margin">{t('whatIAmFeelingGoodTitle')}</h3><br />
                <div className="row">
                  <div className="col-sm-4">
                    <p>{t('ImFeeling1')}</p>
                    <img src={require("../assets/images/about/birds1.jpg")} className="img-responsive margin" style={{ width: '100%' }} alt="Image2" />
                  </div>
                  <div className="col-sm-4">
                    <p>{t('ImFeeling2')}</p>
                    <img src={require("../assets/images/about/birds3.jpg")} className="img-responsive margin" style={{ width: '100%' }} alt="Image3" />
                  </div>
                  <div className="col-sm-4">
                    <p>{t('ImFeeling3')}</p>
                    <img src={require("../assets/images/about/birds2.jpg")} className="img-responsive margin" style={{ width: '100%' }} alt="Image4" />
                  </div>
                </div>
              </Slide>
            </div>
          </Slide>
        </div>
        <hr style={{ background: '#00aeef' }} />
        <style jsx="true">{`
      .molecular-background {
        position: absolute;
        opacity: .037;
        display: flex;
        right: 0;
        top: 123vh;
        width: 100%;
        height: 12.8%;
        object-fit: cover;
        margin-top: 14px;
      }
    `}</style>
      </div>
    </>
  )
}

export default About;
