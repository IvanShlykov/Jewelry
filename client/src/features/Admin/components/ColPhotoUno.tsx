import React, { memo, useState } from 'react';
import type { ColPhoto, IDCollection } from '../type';
import ModalWindow from './ModalWindow';
import { useAppDispatch } from '../../../store/store';
import { delColPhoto } from '../adminSlice';


type Props = {
  colPhoto: ColPhoto;
  i: number;
};

function ColPhotoUno({ colPhoto, i }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [modal, setModal] = useState(false);

  const deleteItem = (id: IDCollection): void => {
    dispatch(delColPhoto(id)).catch(console.log);
  };

  return (
    <tr>
      <td>{i + 1}.</td>
      <td>{colPhoto.Collection.name}</td>
      <td>
        <img src={colPhoto.url} alt="Не загрузилось" width="50px" height="50px" />
      </td>
      <td>
        <ModalWindow deleteItem={deleteItem} modal={modal} setModal={setModal} id={colPhoto.id} />
        <button type="button" onClick={() => setModal(true)}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default memo(ColPhotoUno);
