import React, { memo, useState } from 'react';
import type { IDCollection, Location } from '../type';
import ModalWindow from './ModalWindow';
import { useAppDispatch } from '../../../store/store';
import { delLocation } from '../adminSlice';

type Props = {
  location: Location;
  i: number;
};

function MetallUno({ location, i }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const { phone } = location;

  const [modal, setModal] = useState(false);

  const deleteItem = (id: IDCollection): void => {
    dispatch(delLocation(id)).catch(console.log);
  };

  return (
    <tr>
      <td>{i + 1}.</td>
      <td>{location.city}</td>
      <td>{location.adress}</td>
      <td>{`${phone[0]}-${phone.slice(1, 4)}-${phone.slice(4, 7)}-${phone.slice(7,9)}-${phone.slice(9)}`}</td>
      <td>{location.time}</td>
      <td>
        <img src={location.img} alt="Не загрузилось" width="50px" height="50px" />
      </td>
      <td>
        <ModalWindow deleteItem={deleteItem} modal={modal} setModal={setModal} id={location.id} />
        <button type="button" onClick={() => setModal(true)}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default memo(MetallUno);
