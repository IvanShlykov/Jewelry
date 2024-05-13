import React, { memo,  useState } from 'react';
import type { Collection, IDCollection } from '../type';
import ModalWindow from './ModalWindow';
import { useAppDispatch } from '../../../store/store';
import {  delCollection } from '../adminSlice';
import ModalWindowChange from './ModalWindowChange';

type Props = {
  collection: Collection;
  i: number;
};

function CollectionUno({ collection, i }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const deleteItem = (id: IDCollection): void => {
    dispatch(delCollection(id)).catch(console.log);
  };

  return (
    <tr>
      <td>{i + 1}.</td>
      <td>{collection.name}</td>
      <td>
        <img src={collection.photo} alt="Не загрузилось" width="50px" height="50px" />
      </td>
      <td>
        <ModalWindowChange collection={collection} state={state} setState={setState} />
        <button type="button" onClick={() => setState(true)}>
          Изменить
        </button>
      </td>
      <td>
        <ModalWindow deleteItem={deleteItem} modal={modal} setModal={setModal} id={collection.id} />
        <button type="button" onClick={() => setModal(true)}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default memo(CollectionUno);
