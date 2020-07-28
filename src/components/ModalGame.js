/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Games from './Games';
import { useTranslation } from 'react-i18next';

const ModalGame = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const { t } = useTranslation();

  return (
    <div>
      <Button className="gamesButton" color="danger" onClick={toggle}>{t('games')}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{t('playGames')}</ModalHeader>
        <ModalBody>
          <Games />
        </ModalBody>
        <ModalFooter>

          <Button className="btn-danger" color="danger" onClick={toggle}>{t('closeGames')}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalGame;
