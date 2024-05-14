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
        <div className="deleteAdminVopros">
          <button
            type="button"
            onClick={() => {
              deleteItem(id);
              setModal(false);
            }}
            className='btnAdmin'
          >
            Да
          </button>

          <button type="button" className='btnAdmin' onClick={() => setModal(false)}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
