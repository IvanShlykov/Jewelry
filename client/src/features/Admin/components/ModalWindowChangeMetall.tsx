import React, { useState } from 'react';
import '../modalStyle.css';
import type {  Metall } from '../type';
import { useAppDispatch } from '../../../store/store';
import {  changeMetall } from '../adminSlice';

type Props = {
  metall: Metall;
  state: boolean;
  setState: (modal: boolean) => void;
};

function ModalWindowChangeMetall({ metall, state, setState }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [newName, setNewName] = useState(metall.name);

  const changeItem = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(changeMetall({ id: metall.id, name: newName })).catch(console.log);
    setState(!state);
  };

  return (
    <div className={state ? 'adminmodal active' : 'adminmodal'}>
      <div className="adminmodal_content">
        <form onSubmit={changeItem}>
          <input
            type="text"
            placeholder="Название коллекции"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="btnAdmin" type="submit">
            Сохранить
          </button>
        </form>
        <button type="button" onClick={() => setState(false)} >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default ModalWindowChangeMetall;
