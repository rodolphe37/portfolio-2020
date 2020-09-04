import React from 'react';
import Iframe from 'react-iframe';
import './phone-landscape-frame.scss'

const PhoneLandscapeFrame = () => {
  return (

    <div className="marvel-device iphone8plus landscape black">
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        <div>
          <Iframe url={"https://my-github-pwa.netlify.app/"}
            width="770px"
            height="430px"
            frameBorder="1"
            scrolling="yes"
            id="frama-landscape-phone"
            className="frame-landscape-phone"
            display="initial"
            position="relative"
            zIndex="50"
          />
        </div>
      </div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>

  )
}

export default PhoneLandscapeFrame
