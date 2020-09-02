/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import PhoneFrame from './phoneFrame/PhoneFrame';

const ModalPhone = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle} style={{ cursor: 'pointer', paddingBottom: '-25px' }}><b style={{ fontSize: '14px' }}>My Github</b></div>
      <div>
        <Modal isOpen={modal} toggle={toggle} className="modal-phone">
          <br />
          <br />
          <ModalBody className="modal-body-phone" toggle={toggle}>
            <PhoneFrame />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}

export default ModalPhone;
