import React from 'react';

const BigProjectPortfolio = () => {

  return (
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="bigProject">
      <div className="w3-row-padding">
        <div className="w3-col m6">
          <h3><i className="fas fa-award" /> Mon plus gros projet.</h3>
          <h3>AMANO-HILOT.FR</h3>
          <p>J'ai utilisé Next js pour conçevoir ce site, je l'ai développé en SSR (Server Side Rendering) afin d'optimiser les performances ainsi que le SEO (Réferencement) tout en restant dynamique pour la partie Frontend. Concernant la partie backend, j'ai utilisé Strapi qui est conçu avec React et Bootstrap (Bootstrap + api = Strapi) c'est un CMS basé sur le principe MVC ... mais en javascript. </p>
          <p>La partie Site, portfolio et blog n'est que la face visible de l'iceberg, en réalité l'application complète est réalisée via 7 applications différentes reliées les unes aux autres pour n'en former qu'une de manière apparente. Les 6 autres applications sont réalisées avec React js</p>
          <p>Le site sera très prochainement en ligne, le portfolio sur lequel vous surfez est la reproduction "Jamstack" conçu avec React Js, d'une petite partie du site amano-hilot.</p>
          <p><a href="#work" className="w3-button w3-black"><i className="fa fa-th">&nbsp;</i>Voir mes autres projets</a></p>
        </div>
        <div className="w3-col m6">
          <img className="w3-image w3-round-large img-medium-work" src={require("../assets/images/developpeur/amano-hilot.webp")} alt="Buildings" width={700} height={394} />
        </div>
      </div>
    </div>

  )
}

export default BigProjectPortfolio;
