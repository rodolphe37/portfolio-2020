import React from 'react';
import '../../assets/styles/footer.css'
import Zoom from 'react-reveal/Zoom';
import AntAnimation from '../AntAnimation';
import pdf from '../../assets/pdf/cv-developpeur.pdf'


const Footer = () => {
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <AntAnimation />
        <div className="topButton">
          <a href="#home" ><img className="backTopButton" src={require("../../assets/backtotop.png")} alt="back-to-top-button" /></a>
        </div>
        <Zoom cascade>
          <div className="row footer-content">
            <div className="col-6 col-md">
              <h5 className="titl">Développeur</h5>
              <div className="list-unstyled text-small dev-list">
                <a className="link-footer" href="https://github.com/rodolphe37" target="new">GitHub</a><br />
                <a className="link-footer" href="https://www.linkedin.com/in/rodolphe-augusto-d%C3%A9veloppeur-full-stack-react-node-js-1a20b759/" target="new">Linkedin</a> / <a className="link-footer" href={pdf} target="new">Cv</a><br />
                <a className="link-footer codepen-link" href="https://codepen.io/rodcefim" target="new">CodePen</a> / <a className="link-footer codesandbox-link" href="https://codesandbox.io/u/rodolphe37" target="new">CodeSandBox</a>
              </div>
            </div>
            <div className="col-6 col-md">
              <h5 className="titl">Illustrateur</h5>
              <div className="list-unstyled text-small">
                <a href='https://www.redbubble.com/fr/people/rodolphe-a/shop?asc=u' target="new" className="link-footer">Boutique RedBubble</a>
                <a href="https://www.zazzle.fr/store/amano_hilot_shop" target="new" className="link-footer">Boutique Zazzle</a>
              </div>
            </div>
            <div className="col-6 col-md">
              <h5 className="titl">Auteur</h5>
              <div className="list-unstyled text-small">
                <a href="https://www.thebookedition.com/fr/42-postures-de-yoga-et-etirements-p-368479.html" target="new" className="link-footer">TheBookEdition</a>
                <a href="https://www.pinterest.fr/pin/351069733453849416/" target="new" className="link-footer">Pinterest</a>
                <a className="link-footer" href="https://nouveautes-editeurs.bnf.fr/annonces.html?id_declaration=10000000499422&titre_livre=42_postures_de_yoga_et_%C3%A9tirements_ainsi_que_leurs_bienfaits_sur_la_sant%C3%A9" target="new">BNF</a>
              </div>
            </div>
            <div className="col-12 col-md socials">
              <div className="list-unstyled text-small">
                <h5 style={{ marginLeft: '2.5vw' }}>Page Facebook</h5>
                <iframe title="facebook" className="facebook-footer" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Famanohilot%2F&tabs=timeline&width=250&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="250" height="125" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
              <br />
              <div>
                <small className="d-block mb-3 link-footer brand-footer">Copyright &copy; Rodolphe Augusto 2020</small>
              </div>
            </div>
          </div>
        </Zoom>
      </footer>
    </>



  )
}

export default Footer;

