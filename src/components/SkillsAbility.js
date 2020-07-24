import React from 'react';
import Fade from 'react-reveal/Fade';

const SkillsAbility = () => {

  return (
    <>
      <section className="skills-sec">
        <div className="container ability">
          <h2 className="competences-ability"><i className="fas fa-laptop-code" />Mes compétences &amp; capacités</h2>
          <h5>
            J'ai découvert le Javascript durant ma formation à la Wild Code School, tout au long du passage de mon titre de développeur web et mobile,
            je l'ai apprécié, et plus particulièrement React que j'adore car je peux exprimer mes capacités artistiques aisément avec cette technologie.
            <br />
            <br />
            Depuis, j'ai approfondis mes connaîssances en javascript, aussi,
            j'ai découvert et apprécié travailler avec d'autres frameworks ou librairies comme Next ou Gatsby pour les sites (SEO friendly), React-Native ou Flutter\Dart
            pour les versions mobiles, Ionic pour les applications Cross-plateformes, ainsi que Electron pour les versions Desktop.
            <br />
            <br />
            En développant constamment des projets personnels et en travaillant sur mes compétences, j'ai réussi à apprendre de nombreuses nouvelles technologies et concepts technique, cela m'a également aidé à savoir comment choisir le bon stack pour mes projets.
            <br />
          </h5>
          <ul className="skills-set">
            <Fade left cascade ssrFadeout>
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
                  <span>Flutter / Dart</span>
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
