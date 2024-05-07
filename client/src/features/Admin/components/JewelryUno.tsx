import React, { memo, useEffect, useState } from 'react';
import type { Collection, IDCollection, Jewelry } from '../type';
import ModalWindow from './ModalWindow';
import { useAppDispatch } from '../../../store/store';
import { changeCollection, delCollection } from '../adminSlice';
import ModalWindowChange from './ModalWindowChange';
import StockMap from './StockMap';
import ModalWindowChangeJewelry from './ModalWindowChangeJewelry';

type Props = {
  jewelry: Jewelry;
  i: number;
};

function JewelryUno({ jewelry, i }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const deleteItem = (id: IDCollection): void => {
    dispatch(delCollection(id)).catch(console.log);
  };

  return (
    <tr style={{ fontSize: '20px', wordWrap: 'break-word' }}>
      <td>{i + 1}.</td>
      <td>{jewelry.name}</td>
      {/* <td>{jewelry.description}</td> */}
      {/* <td>{jewelry.price}</td> */}
      <td>{jewelry.Collection?.name}</td>
      <td>{jewelry.Type?.name}</td>
      <td>{jewelry.isNew ? 'Да' : 'Нет'}</td>
      <td>{jewelry.JewHashtags?.map((el) => <div key={el.id}>{el.Hashtag?.title}</div>)}</td>

      {jewelry.Stocks?.length ? jewelry.Stocks.map((el) => (
        <StockMap key={el.id} stock={el}/>
      )) : <td colSpan={2}>Нет на складе</td>}
      <td>{jewelry.Metall?.name}</td>
      <td>
      <ModalWindowChangeJewelry jewelry={jewelry} state={state} setState={setState}/>
        <button type="button" onClick={() => setState(true)}>
          Изменить
        </button>
      </td>
      <td>
        <ModalWindow deleteItem={deleteItem} modal={modal} setModal={setModal} id={jewelry.id} />
        <button type="button" onClick={() => setModal(true)}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default memo(JewelryUno);
