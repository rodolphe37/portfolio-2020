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
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span><i className="fab fa-react"></i> React Js - (Jsx & Javascript (^es6))</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '90%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span><i className="fab fa-react"></i>  Unit Testing - (Jest, enzyme, react-test-renderer)</span>
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
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span><i className="fab fa-node"></i> Node Js</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '75%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span> Deno Js</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '40%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span><i className="fab fa-atom"></i> Electron Js</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '80%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span><i className="fab fa-react"></i> React-Native Js</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '70%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span>Flutter</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '60%' }} />
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
                  <span>MySQL</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '65%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span>MongoDB</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '47%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span><i className="fas fa-file-code"></i> Php - CMS (Drupal8, joomla, wordpress, prestashop)</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '35%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span>Python</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '30%' }} />
                </div>
              </li>
              <li className="indvidual-skill">
                <div className="skill_title">
                  <span>Gimp / Inkscape</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '88%' }} />
                </div>
              </li>
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
                  <span>Scrum - Agile</span>
                </div>
                <div className="barfiller">
                  <span className="fill" style={{ width: '70%' }} />
                </div>
              </li>
            </Fade>
          </ul>
        </div>
      </section>
    </>
  )
}

export default SkillsAbility;
