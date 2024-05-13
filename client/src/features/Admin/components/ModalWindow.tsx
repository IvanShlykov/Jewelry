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
    <div className={modal ? 'adminmodal active' : 'adminmodal'}>
      <div className="adminmodal_content">
        <div>Вы уверены?</div>
        <button
          type="button"
          onClick={() => {
            deleteItem(id);
            setModal(false);
          }}
        
        >
          Да
        </button>
        <button type="button" onClick={() => setModal(false)}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
