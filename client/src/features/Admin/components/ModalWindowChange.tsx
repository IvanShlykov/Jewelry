import React, { useState } from 'react';
import '../modalStyle.css';
import type { Collection, IDCollection, Metall } from '../type';
import { useAppDispatch } from '../../../store/store';
import { changeCollection } from '../adminSlice';

type Props = {
  collection: Collection;
  state: boolean;
  setState: (modal: boolean) => void;
};

function ModalWindowChange({ collection, state, setState }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [newName, setNewName] = useState(collection.name);
  const [newImg, setNewImg] = useState<File>();

  const changeItem = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    if (newImg) {
      formData.append('photo', newImg);
    }
    formData.append('name', newName);
    dispatch(changeCollection({ formData, id: collection.id })).catch(console.log);
    setState(!state);
  };

  return (
    <div className={state ? 'modal active' : 'modal'}>
      <div className="modal_content">
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
          <button className="btn" type="submit">
            Сохранить
          </button>
        </form>
        <button type="button" onClick={() => setState(false)} className="close-button">
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default ModalWindowChange;
