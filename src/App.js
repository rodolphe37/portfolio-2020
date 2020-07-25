import React from 'react';
import './assets/styles/main.scss'
import Portfolio from '../src/components/portfolio/Portfolio';
import CookieConsent from "react-cookie-consent";
// import ReactGA from 'react-ga'

// function initializeReactGA() {
//   ReactGA.initialize('UA-123791717-1');
//   ReactGA.pageview('/Portfolio');
// }

function App() {
  return (
    <div className="App">
      <CookieConsent
        location="bottom"
        buttonText="J'ai compris"
        cookieName="RodolpheAugustoPortfolio"
        style={{
          background: "linear-gradient(90deg, #00aeef 0%, #096fb9 100%)",
          textShadow: " 2px 2px black",
          borderTop: "1px solid white"
        }}
        buttonStyle={{ background: "#fd7e14", color: "white", fontWeight: "bold", fontSize: "13px", textAlign: "center" }}
        expires={1}
        overlay
      >
        <span style={{ fontSize: "15px" }}>
          <b>🍪 Nous utilisons des cookies pour améliorer votre expérience sur notre site 🍪</b>{" "}
          <br />
            En continuant votre navigation sur ce site, vous acceptez l’utilisation de cookies pour mesurer l’audience de notre site et vous proposer des fonctionnalités sociales.&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
      </CookieConsent>
      <Portfolio />
    </div>
  );
}

export default App;
