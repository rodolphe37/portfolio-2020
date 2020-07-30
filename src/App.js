import React from 'react';
import './assets/styles/main.scss'
import Portfolio from '../src/components/portfolio/Portfolio';
import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <CookieConsent
        location="bottom"
        buttonText={t('cookieConsentTextButton')}
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
          <b><span role='img' aria-label="cookies">🍪 {t('cookieConsentText1')} 🍪</span></b>{" "}
          <br />
          {t('cookieConsentText2')}&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
      </CookieConsent>
      <Portfolio />
    </div>
  );
}

export default App;
