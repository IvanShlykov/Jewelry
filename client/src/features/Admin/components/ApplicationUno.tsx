import React, { memo, useState } from 'react';
import type { Application, IDCollection } from '../type';
import { useAppDispatch } from '../../../store/store';
import ModalWindow from './ModalWindow';
import { closeOrderSlice } from '../adminSlice';

type Props = {
  application: Application;
  i: number;
  open: boolean;
};

function ApplicationUno({ application, i, open }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [modal, setModal] = useState(false);

  const closeOrder = (id: IDCollection): void => {
    dispatch(closeOrderSlice(id)).catch(console.log);
  };

  return (
    <tr>
      <td>{i + 1}.</td>
      <td>{application.User.name}</td>
      <td>{application.User.phone}</td>
      <td>{application.User.email}</td>
      <td>
        <img src={application.photo} alt="Не загрузилось" width="50px" height="50px" />
      </td>
      <td>{application.description}</td>
      {open && (
        <td>
          <ModalWindow
            deleteItem={closeOrder}
            modal={modal}
            setModal={setModal}
            id={application.id}
          />
          <button type="button" onClick={() => setModal(true)}>
            Подтвердить
          </button>
        </td>
      )}
    </tr>
  );
}

export default memo(ApplicationUno);
