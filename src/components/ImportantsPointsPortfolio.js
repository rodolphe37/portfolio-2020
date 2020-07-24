import React from 'react';

const ImportantsPointsPortfolio = () => {

  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="importPoints">
      <h3 className="w3-center">POINTS IMPORTANTS POUR UN DEVELOPPEUR ! </h3>
      <p className="w3-center w3-large">De mon point de vue seulement, bien sur ! </p>
      <div className="w3-row-padding w3-center" style={{ marginTop: '64px' }}>
        <div className="w3-quarter">
          <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
          <p className="w3-large title-important-points">Responsive</p>
          <p>Comme les applications et sites que nous conçevons, nous devons être adaptables... C'est un point fort, qui n'est pas négligeable chez tous les créatifs.</p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
          <p className="w3-large title-important-points">Passion</p>
          <p>Tel un artiste, la passion doit être notre muse... La première des chose que nous développons en tant qu'être humain, c'est la passion... de notre mère étant bébé, ensuite, de notre doudou en sortant de l'age de nourrisson par exemples... et ainsi de suite jusqu' au langages de programmation.</p>
        </div>
        <div className="w3-quarter">
          <i className="fas fa-palette w3-margin-bottom w3-jumbo" style={{ color: 'white' }} />
          <p className="w3-large title-important-points">Design</p>
          <p>Le design web, bien sur, mais encore plus important... le "design temps" - gérer son temps via des sprints le mieux estimés possible..., "le design humain" - comprendre les attentes du client ou Product owner au plus juste afin d'augmenter le côté pro actif du projet..., sans compter le "design de son espace de travail" - on ne travail que mieux dans un espace de travail ergonomique et adéquate à notre tache..</p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-cog w3-margin-bottom w3-jumbo" />
          <p className="w3-large title-important-points">Support</p>
          <p>Support car, il faut sans arrêt apprendre de nouvelles subtilitées du langage que l'on pratique... voir en apprendre un nouveau rapidement et avec efficacité. Il faut tout le temps être en "veille technologique" afin d'être à jour dans son savoir.</p>
        </div>
      </div>
    </div>
  )
}

export default ImportantsPointsPortfolio;
