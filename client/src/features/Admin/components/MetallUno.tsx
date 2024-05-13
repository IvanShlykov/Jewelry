import React, { memo, useState } from 'react';
import type {  IDCollection, Metall } from '../type';
import ModalWindow from './ModalWindow';
import { useAppDispatch } from '../../../store/store';
import {  delMetall } from '../adminSlice';
import ModalWindowChangeMetall from './ModalWindowChangeMetall';

type Props = {
  metall: Metall;
  i: number;
};

function MetallUno({ metall, i }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);


  const deleteItem = (id: IDCollection): void => {
    dispatch(delMetall(id)).catch(console.log);
  };

  return (
    <tr>
      <td>{i + 1}.</td>
      <td>{metall.name}</td>
      <td>
      <ModalWindowChangeMetall metall={metall} state={state} setState={setState}/>
        <button type="button" onClick={() => setState(true)}>
          Изменить
        </button>
      </td>
      <td>
        <ModalWindow deleteItem={deleteItem} modal={modal} setModal={setModal} id={metall.id} />
        <button type="button" onClick={() => setModal(true)}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default memo(MetallUno);
