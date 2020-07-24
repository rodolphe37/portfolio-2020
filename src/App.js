import React from 'react';
import './assets/styles/main.scss'
import Portfolio from '../src/components/portfolio/Portfolio';
// import ReactGA from 'react-ga'

// function initializeReactGA() {
//   ReactGA.initialize('UA-123791717-1');
//   ReactGA.pageview('/Portfolio');
// }

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
