import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const SkillsAbility = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="skills-sec">
        <div className="container ability">
          <h2 className="competences-ability"><i className="fas fa-laptop-code" />{`${t('skillsAbilityTitle1')} ${t('skillsAbilityTitle2')}`}</h2>
          <h5>
            {t('skillsAbilityContent1')}
            <br />
            <br />
            {t('skillAbilityContent2')}
            <br />
            <br />
            {t('skillsAbilityContent3')}
            <br />
          </h5>
          <ul className="skills-set">
            <Fade left cascade>
              <div className="skill-title">
                <h2 className="skill-section-title">{t('skillSection1')}</h2>
                <br />
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-js-square"></i> Javascript (^es6)</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '80%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-php"></i> Php</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '30%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-python"></i> Python</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '25%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> Html / CSS</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '95%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fas fa-database"></i>&nbsp;SQL</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '45%' }} />
                  </div>
                </li>
                <h2 className="skill-section-title2">{t('skillSection2')}</h2>
                <br />
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-react"></i> React Js - (Jsx)</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '80%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><svg height="10" viewBox="0 0 148 90" version="1.1" xmlns="http://www.w3.org/1999/xlink" style={{ transform: 'translateX(4%)', shapeRendering: 'auto' }}><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="#000" fillRule="nonzero"></path></svg> Next Js</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '80%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><img className="jest-logo" src={require('../assets/images/jest.webp')} alt="jest logo" />  Unit Testing - (Jest, enzyme, react-test-renderer)</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '40%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-vuejs"></i> Vue Js</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '50%' }} />
                  </div>
                </li>
                <h2 className="skill-section-title">{t('skillSection3')}</h2>
                <br />
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-node"></i> Node Js</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '65%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><img className="deno-logo" src={require('../assets/images/deno-logo.png')} alt="deno logo" /> Deno Js</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '20%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fas fa-file-code"></i>&nbsp;Headless CMS (Drupal8, joomla, wordpress, prestashop)</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '45%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fas fa-stream"></i>&nbsp;MongoDB</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '35%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fas fa-stream"></i>&nbsp;MySql</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '45%' }} />
                  </div>
                </li>
                <h2 className="skill-section-title2">{t('skillSection4')}</h2>
                <br />
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><img className="electron-logo" src={require('../assets/images/electron-logo.png')} alt="electron logo" /> Electron Js</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '60%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-react"></i> React-Native Js</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '50%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><img className="flutter-logo" src={require('../assets/images/flutter.png')} alt="flutter logo" /> Flutter</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '40%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M30.4327 9.05578L30.5633 9.36054C31.5211 11.4721 32 13.6925 32 16C32 24.8163 24.8163 32 16 32C7.18367 32 0 24.8163 0 16C0 7.18367 7.18367 0 16 0C18.5905 0 21.0503 0.609524 23.3143 1.7415L23.619 1.89388L23.3578 2.11156C22.7048 2.63401 22.2041 3.28707 21.8776 4.04898L21.7905 4.26667L21.5946 4.17959C19.8313 3.35238 17.9592 2.91701 16 2.91701C8.77279 2.91701 2.91701 8.77279 2.91701 16C2.91701 23.2272 8.77279 29.083 16 29.083C23.2272 29.083 29.083 23.2054 29.083 16C29.083 14.2803 28.7565 12.5823 28.0816 10.9932L27.9946 10.7755L28.2122 10.6884C28.9741 10.4054 29.6707 9.92653 30.215 9.31701L30.4327 9.05578ZM26.4707 9.36057C28.3102 9.36057 29.8014 7.8694 29.8014 6.02996C29.8014 4.19051 28.3102 2.69934 26.4707 2.69934C24.6313 2.69934 23.1401 4.19051 23.1401 6.02996C23.1401 7.8694 24.6313 9.36057 26.4707 9.36057ZM15.9999 8.70754C11.9727 8.70754 8.7074 11.9728 8.7074 16.0001C8.7074 20.0273 11.9727 23.2926 15.9999 23.2926C20.0271 23.2926 23.2924 20.0273 23.2924 16.0001C23.2924 11.9728 20.0271 8.70754 15.9999 8.70754Z" fill="currentColor"></path>
                    </svg>&nbsp;Ionic</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '50%' }} />
                  </div>
                </li>
                <h2 className="skill-section-title">{t('skillSection5')}</h2>
                <br />
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-github-square"></i> Git Workflow</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '81%' }} />
                  </div>
                </li>
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fab fa-scribd"></i>&nbsp;Scrum - Agile</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '70%' }} />
                  </div>
                </li>
                <h2 className="skill-section-title3">{t('skillSection6')}</h2>
                <br />
                <li className="indvidual-skill">
                  <div className="skill_title">
                    <span><i className="fas fa-fill-drip"></i>&nbsp;Gimp / Inkscape</span>
                  </div>
                  <div className="barfiller">
                    <span className="fill" style={{ width: '88%' }} />
                  </div>
                </li>
              </div>
            </Fade>
          </ul>
        </div>
      </section>
    </>
  )
}

export default SkillsAbility;
