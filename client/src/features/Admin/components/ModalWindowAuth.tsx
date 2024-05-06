import React from 'react';
import Authorization from '../../Auth/components/Authorization';
import Registration from '../../Auth/components/Registration';

function ModalWindowAuth ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element {
  return isOpen ? (
    <div className="modal active">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
      <Authorization/>
      <Registration/>
      </div>
    </div>
  ): <div  className="modal "/>
};

export default ModalWindowAuth;
