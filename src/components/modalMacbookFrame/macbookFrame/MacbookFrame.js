import React from 'react';
import Iframe from 'react-iframe';
import './macbook-frame.scss'

const MacbookFrame = () => {
  return (

    <div className="marvel-device macbook black">
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        <div>
          <Iframe url={"https://my-github-pwa.netlify.app/"}
            width="975px"
            height="617px"
            frameBorder="1"
            scrolling="yes"
            id="FrameMacbookId"
            className="frame-macbook"
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

export default MacbookFrame
