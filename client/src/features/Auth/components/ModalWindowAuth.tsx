import React, { useState } from 'react';
import Authorization from './Authorization';
import Registration from './Registration';
import '../modalStyle.css';

function ModalWindowAuth({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element {
  const [state, setState] = useState(true);

  return isOpen ? (
    <div className="authmodal active">
      <div className="authmodal-content">
        <div>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="btnAuthdiv">
          <button className="btn Auth" type="button" onClick={()=>setState(true)}>
            Войти
          </button>
          <button className="btn Reg" type="button" onClick={()=>setState(false)}>
            Регистрация
          </button>
        </div>
        {state ? <Authorization /> : <Registration />}
      </div>
    </div>
  ) : (
    <div className="modal " />
  );
}

export default ModalWindowAuth;
