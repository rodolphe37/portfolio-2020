import React from 'react';
import Iframe from 'react-iframe';
import './phone-frame.scss'

const PhoneFrame = () => {
  return (

    <div className="marvel-device iphone8 black">
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        <div>
          <Iframe url={"https://my-github-pwa.netlify.app/"}
            width="390px"
            height="700px"
            frameBorder="1"
            scrolling="yes"
            id="FrameGameId"
            className="frame-phone"
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

export default PhoneFrame




// {/*    <div className="marvel-device iphone-x">
//       <div className="notch">
//         <div className="camera"></div>
//         <div className="speaker"></div>
//       </div>
//       <div className="top-bar"></div>
//       <div className="sleep"></div>
//       <div className="bottom-bar"></div>
//       <div className="volume"></div>
//       <div className="overflow">
//         <div className="shadow shadow--tr"></div>
//         <div className="shadow shadow--tl"></div>
//         <div className="shadow shadow--br"></div>
//         <div className="shadow shadow--bl"></div>
//       </div>
//       <div className="inner-shadow"></div>
//       <div className="screen">
//         <div>
//           <Iframe url={"https://my-github-pwa.netlify.app/"}
//             width="392px"
//             height="829px"
//             frameBorder="1"
//             scrolling="yes"
//             id="FrameGameId"
//             className="frame-phone"
//             display="initial"
//             position="relative"
//             zIndex="50"
//           />
//         </div>
//       </div>
//   </div>*/}
