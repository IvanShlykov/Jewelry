import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/store';

import { updateUserSlice } from '../../Auth/authSlice';

type Props = {
  handlCloseUpdateUserClick: ()=> void
}

function ChangeUser({ handlCloseUpdateUserClick }:Props): JSX.Element {
  const [changeName, setChangeName] = useState('');
  const [changeMail, setChangeMail] = useState('');
  const [changePhone, setChangePhone] = useState('');

  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const updatedUser = {
      name: changeName,
      email: changeMail,
      phone: changePhone,
    };
    dispatch(updateUserSlice(updatedUser)).catch(console.log);
  };

  return (
    <div className="formChangeLK">
      <form onSubmit={handleFormSubmit}>
        <div className="decsLK">имя</div>

        <input
          value={changeName}
          placeholder="Имя"
          required
          onChange={(e) => setChangeName(e.target.value)}
        />
        <div className="decsLK">почта</div>

        <input
          value={changeMail}
          placeholder="Email"
          onChange={(e) => setChangeMail(e.target.value)}
        />
        <button type="button" className="LKbuttonChange" onClick={handlCloseUpdateUserClick}>
          Закрыть форму
        </button>
        <div className="decsLK">телефон</div>

        <input
          value={changePhone}
          placeholder="Телефон"
          onChange={(e) => setChangePhone(e.target.value)}
        />
        
        <button type="submit" className="LKbuttonChange">
          Обновить
        </button>
      </form>
    </div>
  );
}

export default ChangeUser;
