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
    <div className="authmodal active" onClick={onClose}>
      <div className="authmodal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className='containerBtnAuth'>
          <div className="btnAuthdiv">
            <button
              className={state ? 'btnAuth Auth on' : 'btnAuth on'}
              type="button"
              onClick={() => setState(true)}
            >
              Вход
            </button>
            <button
              className={state ? 'btnAuth' : 'btnAuth Auth'}
              type="button"
              onClick={() => setState(false)}
            >
              Регистрация
            </button>
          </div>
        </div>
        {state ? <Authorization /> : <Registration />}
      </div>
    </div>
  ) : (
    <div className="modal " />
  );
}

export default ModalWindowAuth;
