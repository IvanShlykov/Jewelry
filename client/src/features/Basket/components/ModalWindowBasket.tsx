import React from 'react';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

function ModalWindowBasket({ modal, setModal }: Props): JSX.Element {
  return (
    <div className={modal ? 'adminmodal active' : 'adminmodal'}>
      <div className="adminmodal_content">
        <div>Заказ оплачен</div>
        <button type="button" className="btnAdmin" onClick={() => setModal(false)}>
          ОК
        </button>
      </div>
    </div>
  );
}

export default ModalWindowBasket;
