import React, { memo, useEffect, useState } from 'react';
import type { Collection, IDCollection } from '../type';
import ModalWindow from './ModalWindow';
import { useAppDispatch } from '../../../store/store';
import { changeCollection, delCollection } from '../adminSlice';

type Props = {
  collection: Collection;
  i: number;
};

function CollectionUno({ collection, i }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [state, setState] = useState(true);
  const [modal, setModal] = useState(false);

  const [newName, setNewName] = useState(collection.name);
  const [newImg, setNewImg] = useState<File>();

  const deleteItem = (id: IDCollection): void => {
    dispatch(delCollection(id)).catch(console.log);
  };

  const changeItem = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    if (newImg) {
      formData.append('photo', newImg);
    }
    formData.append('name', newName);
    dispatch(changeCollection({formData, id: collection.id})).catch(console.log);
    setState(true)
  };

  return (
    <tr>
      <td>{i + 1}.</td>
      <td>{collection.name}</td>
      <td>
        <img src={collection.photo} alt="Не загрузилось" width="50px" height="50px" />
      </td>
      <td>
        {!state && (
          <form onSubmit={changeItem}>
            <input
              type="text"
              placeholder="Название коллекции"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              name="photo"
              type="file"
              placeholder="Фото"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files && event.target.files.length > 0)
                  setNewImg(event.target.files[0]);
              }}
            />
            <button className="btn" type="submit">Сохранить</button>
          </form>
        )}
        <button type="button" onClick={() => setState(!state)}>
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
