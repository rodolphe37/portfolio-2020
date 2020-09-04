/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import PhoneFrame from './phoneFrame/PhoneFrame';
import PhoneLandscapeFrame from '../modalPhoneLandscapeFrame /phoneLandscapeFrame/PhoneLandscapeFrame';
import ModalPhoneLandscape from '../modalPhoneLandscapeFrame /ModalPhoneLandscape';

const ModalPhone = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [click, setClick] = useState(false)

  const HandleClick = () => {
    if (click === false) {
      setClick(true)
    } else {
      setClick(false)
    }
  }

  return (
    <div>
      <div onClick={toggle} style={{ cursor: 'pointer', marginTop: '-9px' }}>
        <b style={{ fontSize: '10px', marginLeft: '18%' }}>My Github sur Iphone</b>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle} className="modal-phone">
          <br />
          <br />
          <ModalHeader className="header-modal-landscape">
            <span className="link-footer-iphone-lanscape iphone-landscape" onClick={HandleClick}>
              <Button className="button-landscape">
                <b style={{ color: 'black' }}>Rotation</b>
                <img
                  className="mobile-landscape"
                  style={{ width: '23%', marginLeft: '39%', color: 'white' }}
                  src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHBhdGggZD0iTTU0LjEyNjA1NzIsMTMuMTczNzgyNSBDNTcuMDc3NDU4OCwxMC4yMjIzODA4IDYxLjg2MTMxNDksMTAuMjIxMDY5NCA2NC44MTQ5MTc2LDEzLjE3NDY3MjIgTDg2LjgyNTMyNzIsMzUuMTg1MDgxOCBDODkuNzc3MjIwMywzOC4xMzY5NzQ4IDg5Ljc4MzA1NDIsNDIuOTE3MTA1MSA4Ni44MjYyMTcxLDQ1Ljg3Mzk0MjQgTDQ1Ljg3Mzk0MTgsODYuODI2MjE3NiBDNDIuOTIyNTQwMiw4OS43Nzc2MTkyIDM4LjEzODY4NCw4OS43Nzg5MzA2IDM1LjE4NTA4MTMsODYuODI1MzI3OSBMMTMuMTc0NjcxNyw2NC44MTQ5MTgzIEMxMC4yMjI3Nzg2LDYxLjg2MzAyNTIgMTAuMjE2OTQ0Nyw1Ny4wODI4OTQ5IDEzLjE3Mzc4MTksNTQuMTI2MDU3NyBMNTQuMTI2MDU3MiwxMy4xNzM3ODI1IFogTTU0LjgwNjA4MTQsMTguNjI1MDM4MSBMMTguOTI4MzYzNiw1NC41MDI3NTU4IEw0NS40OTcyNDM2LDgxLjA3MTYzNTggTDgxLjM3NDk2MTQsNDUuMTkzOTE4IEw1NC44MDYwODE0LDE4LjYyNTAzODEgWiBNMjYuMjQwMDIzOCw3NC43ODE4NTU3IEMyNy42NTA5NDU2LDc2LjE5Mjc3NzUgMjkuOTUwNzMwMiw3Ni4xODA1NDkzIDMxLjM3NjczNjEsNzQuNzU0NTQzNCBDMzIuODAyNzQyMiw3My4zMjg1MzczIDMyLjgxNDk3MDIsNzEuMDI4NzUyOSAzMS40MDQwNDg0LDY5LjYxNzgzMTEgQzI5Ljk5MzEyNjUsNjguMjA2OTA5MiAyNy42OTMzNDIyLDY4LjIxOTEzNzMgMjYuMjY3MzM2Miw2OS42NDUxNDM0IEMyNC44NDEzMzAxLDcxLjA3MTE0OTMgMjQuODI5MTAxOSw3My4zNzA5MzM4IDI2LjI0MDAyMzgsNzQuNzgxODU1NyBaIE05LjQ4NTg3MDI3LDI5Ljk1MTE4MDggTDYuMjc4NzM5MiwyOS45NTExODA4IEM1LjIwOTY5NTUxLDI5Ljk1MTE4MDggNC42NzUxNzM2NiwzMC40ODU3MDI2IDUuMjA5Njk1NTEsMzEuMDIwMjI0NSBMMTQuODMxMDg4Nyw0MC42NDE2MTc3IEwyNC40NTI0ODE5LDMxLjAyMDIyNDUgQzI0Ljk4NzAwMzgsMzAuNDg1NzAyNiAyNC40NTI0ODE5LDI5Ljk1MTE4MDggMjMuMzgzNDM4MiwyOS45NTExODA4IEwyMC4xNzYzMDcyLDI5Ljk1MTE4MDggQzE4LjYxOTg5MTksMjMuNzI1NTE5OSAyNS4yNzg3NTk4LDE5LjAxNzk3ODEgMzQuNjA4Mzk3LDE5Ljc5NTI2NTcgQzM2LjI5NTY0NTQsMTkuOTM1ODM2NyAzNi4zMzI3ODYyLDE5LjEzMTkxMjEgMzUuNjc3NDQwNywxOC43MjYyMjIgQzI0LjQ1MjQ4MTksMTEuNzc3NDM4IDkuNDg1ODcwMjcsMTYuMDUzNjEyOCA5LjQ4NTg3MDI3LDI5Ljk1MTE4MDggWiBNOTAuNTE0MTI5Nyw2OS41OTYxMTU1IEw5My43MjEyNjA4LDY5LjU5NjExNTUgQzk0Ljc5MDMwNDUsNjkuNTk2MTE1NSA5NS4zMjQ4MjYzLDY5LjA2MTU5MzcgOTQuNzkwMzA0NSw2OC41MjcwNzE4IEw4NS4xNjg5MTEzLDU4LjkwNTY3ODYgTDc1LjU0NzUxODEsNjguNTI3MDcxOCBDNzUuMDEyOTk2Miw2OS4wNjE1OTM3IDc1LjU0NzUxODEsNjkuNTk2MTE1NSA3Ni42MTY1NjE4LDY5LjU5NjExNTUgTDc5LjgyMzY5MjgsNjkuNTk2MTE1NSBDODEuMzgwMTA4MSw3NS44MjE3NzY0IDc0LjcyMTI0MDIsODAuNTI5MzE4MiA2NS4zOTE2MDMsNzkuNzUyMDMwNiBDNjMuNzA0MzU0Niw3OS42MTE0NTk1IDYzLjY2NzIxMzgsODAuNDE1Mzg0MSA2NC4zMjI1NTkzLDgwLjgyMTA3NDIgQzc1LjU0NzUxODEsODcuNzY5ODU4MiA5MC41MTQxMjk3LDgzLjQ5MzY4MzUgOTAuNTE0MTI5Nyw2OS41OTYxMTU1IFoiPjwvcGF0aD48L3N2Zz4="
                  alt="iphone"
                />
              </Button>
              <ModalPhoneLandscape />
            </span>
          </ModalHeader>
          <ModalBody className="modal-body-phone" toggle={toggle}>
            {click === true ? <PhoneLandscapeFrame /> : ''}
            {click === false ? <PhoneFrame /> : ''}
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}

export default ModalPhone;
