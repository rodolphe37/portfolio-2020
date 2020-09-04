/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import PhoneFrameLandscape from './phoneLandscapeFrame/PhoneLandscapeFrame';

const ModalPhoneLandscape = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="modal-phone-landscape">
        <br />
        <br />
        <ModalBody className="modal-body-phone-landscape" toggle={toggle}>
          <PhoneFrameLandscape />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalPhoneLandscape;
