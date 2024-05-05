import React from 'react';
import '../modalStyle.css';
import type { IDCollection } from '../type';

type Props = {
  deleteItem: (id: IDCollection) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
  id: IDCollection;
};

function ModalWindow({ deleteItem, modal, setModal, id }: Props): JSX.Element {
  return (
    <div className={modal ? 'modal active' : 'modal'}>
      <div className="modal_content">
        <div>Вы уверены?</div>
        <button
          type="button"
          onClick={() => {
            deleteItem(id);
            setModal(false);
          }}
          className="close-button"
        >
          Да
        </button>
        <button type="button" onClick={() => setModal(false)} className="close-button">
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
