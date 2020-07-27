import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Container } from 'reactstrap';



const About = () => {


  return (
    <>
      <div>
        <hr style={{ background: '#2287ce' }} />
        <Fade>
          <div className="container-fluid bg-1 text-center" id="about">
            <h3 className="margin">Qui suis-je ?</h3>
            <p style={{ fontWeight: '400', fontSize: '18px' }}>Je m'appelle Rodolphe Augusto</p>
            <img className="molecular-background" src={require("../assets/images/about/molecular.png")} alt="molecule" />
            <Fade right>
              <img src={require("../assets/images/presentation/perso-3b.png")} className="img-responsive img-circle margin" style={{ display: 'inline' }} alt="Bird" width={350} height={350} />
              <h3>Je suis un grand passionné de la Vie elle même.</h3>
              <Container>
                <p style={{ paddingBottom: '5px' }}>Depuis ma plus tendre enfance, je vois les algorithmes de la nature tout autour de moi, ceux de la causalité ou des objets informationnels(Matière) en physique mais aussi ceux de la sphère de la pensée comprenant le sub-conscient, l'inconscient et le conscient... Toutes ces petites choses qui forment "Un Tout". Depuis que je sais lire je n'ai cessé de chercher à comprendre "l'ensemble" et "l'envers du décor". Je me suis donc instruit en lisant autant de la littérature, que de la philosophie, de la physique en passant par la physique quantique, la sociologie, la psychologie, la médecine incluant l'anatomie et le savoir ancien des tribus amérindiennes ou des peuples autochtones, etc...<br /> Ce qui à créé en moi la naîssance d'une vrai passion envers "la Vie" et tout ce qui constitue "le grand monde du Vivant" en général.</p>
              </Container>
            </Fade>
          </div>
        </Fade>
        <div className="container-fluid bg-2 text-center">
          <Fade>
            <div className="second-section-about bg-3 container-fluid" style={{ paddingTop: '30px', paddingBottom: '0', marginBottom: '15px' }}>
              <h3 className="margin" style={{ color: 'black' }}>Qu'es-ce que je suis ?</h3>
              <div className="what-about">
                <Fade right>
                  <Container>
                    <Fade right cascade>
                      <h3 className="margin" style={{ textAlign: 'center', fontSize: '1.2rem', color: 'black' }}>Je suis développeur d'application web, mais aussi auteur.</h3>
                      <div className="row content-what-section" style={{ width: '100%' }}>
                        <i className="fas fa-code" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;Je suis développeur d'application web : </b>
                        <p style={{ textAlign: 'left' }}>J'ai appris le Javascript lors d'une formation à la Wild Code School, j'ai tout de suite était conquis par l'idée de pouvoir développer à l'aide d'un langage de programmation les idées qui remplissent ma tête. Je conçoit des application comme des sites internet ou des mini-jeux, mais aussi des applications mobile ou pour ordinateurs. Ce site ainsi que les quelques autres projets que vous verrez dans la section développeur ne sont qu'une petite partie de ce qu'il est possible de faire dans ce domaine. <br />Domaine qui tient plus d'une passion que d'une profession pour ma part. 😏.</p>
                        <i className="fas fa-book" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;Je suis Auteur : </b>
                        <p style={{ textAlign: 'left' }}>Il y a un peu plus d'un an environ, j'ai publié quelques planches anatomiques de Yoga que j'ai conçu avec les logiciels "Gimp" et "InkScape" (les homologues Open Sources de Photoshop et Adobe Illustrator), très rapidement cette publication Facebook a touchée plus de 13 400 000 personnes et à était partagée plus de 180 000 fois. Devant un tel succés, j'ai décider de publier un livre "42 postures de Yoga et étirements" qui comporte les 42 planches anatomiques ainsi que les bienfaits avec diverses autres informations. En septembre 2019, j'ai franchi le pas de l'auto-édition, donc je suis inscrit entant qu'auteur à la <a href="https://nouveautes-editeurs.bnf.fr/annonces.html?id_declaration=10000000499422&titre_livre=42_postures_de_yoga_et_%C3%A9tirements_ainsi_que_leurs_bienfaits_sur_la_sant%C3%A9" target="new">Bibliothèque nationale de France</a> depuis cette date. <br />Ce fût une action dû à une réelle demande plus qu'une envie personnelle, mais j'en suis pleinement comblé. 🤓</p>
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
                <h3 className="margin">Ce qui me fait me sentir Vivant ! </h3><br />
                <div className="row">
                  <div className="col-sm-4">
                    <p>Ressentir le monde qui m'entoure, sentir la caresse que la brise légère dépose sur mon visage, entendre l'eau, qui tendrement, berce mon âme par ses roulis langoureux.</p>
                    <img src={require("../assets/images/about/birds1.jpg")} className="img-responsive margin" style={{ width: '100%' }} alt="Image2" />
                  </div>
                  <div className="col-sm-4">
                    <p>Découvrir une magnifique fleur, qui non contente de submerger mes yeux par ses couleurs chatoyantes, insufle à mes narines un parfum d'une douceur délicatement enhivrante.</p>
                    <img src={require("../assets/images/about/birds3.jpg")} className="img-responsive margin" style={{ width: '100%' }} alt="Image3" />
                  </div>
                  <div className="col-sm-4">
                    <p>Savoir que ce monde est aussi fragile que superbement beau, et que envers et contre tout, voir les éléments comme un grand ensemble, former à un instant donné... un havre de paix.</p>
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
